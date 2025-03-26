import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import { router } from 'expo-router';

interface IComment {
  id: string;
  avatar: any;
  username: string;
  comment: string;
  time: string;
  likes: number;
  replies: IComment[];
  liked: boolean;
  parentId?: string;
}

interface CommentItemProps {
  item: IComment;
  isReply?: boolean;
  onLike: (id: string, isReply?: boolean) => void;
  onReply: (id: string, username: string) => void;
}

interface CommentsScreenProps {
  onClose: () => void;
}

// Mock data
const initialComments: IComment[] = [
  {
    id: '1',
    avatar: require('../../assets/images/story/image1.jpg'),
    username: 'amy_jasus',
    comment:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate',
    time: '3h',
    likes: 3,
    replies: [],
    liked: false,
  },
];

const CommentItem: React.FC<CommentItemProps> = ({ item, isReply, onLike, onReply }) => {
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutDown}
      style={[styles.commentContainer, isReply && styles.replyContainer]}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.commentContent}>
        <Text style={styles.username}>
          {item.username} <Text style={styles.commentText}>{item.comment}</Text>
        </Text>
        <View style={styles.commentActions}>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.likes}>{item.likes} Likes</Text>
          {!isReply && (
            <TouchableOpacity onPress={() => onReply(item.id, item.username)}>
              <Text style={styles.reply}>Reply</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => onLike(item.id, isReply)}>
            <FontAwesome
              name={item.liked ? 'heart' : 'heart-o'}
              size={16}
              color={item.liked ? 'red' : 'black'}
            />
          </TouchableOpacity>
        </View>
        {item.replies?.length > 0 && (
          <View style={styles.repliesContainer}>
            {item.replies.map(reply => (
              <CommentItem key={reply.id} item={reply} isReply onLike={onLike} onReply={onReply} />
            ))}
          </View>
        )}
      </View>
    </Animated.View>
  );
};

const CommentsScreen: React.FC<CommentsScreenProps> = ({ onClose }) => {
  const [comments, setComments] = useState<IComment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<{ id: string; username: string } | null>(null);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: IComment = {
      id: Date.now().toString(),
      avatar: require('../../assets/images/avatar/avatar3.png'),
      username: 'currentUser',
      comment: newComment,
      time: 'Just now',
      likes: 0,
      replies: [],
      liked: false,
      parentId: replyTo?.id,
    };

    setComments(prevComments => {
      if (replyTo) {
        return prevComments.map(c => {
          if (c.id === replyTo.id) {
            return { ...c, replies: [...(c.replies || []), comment] };
          }
          return c;
        });
      }
      return [...prevComments, comment];
    });

    setNewComment('');
    setReplyTo(null);
  };

  const handleLike = (commentId: string, isReply?: boolean) => {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (isReply && comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map(reply =>
              reply.id === commentId
                ? {
                    ...reply,
                    liked: !reply.liked,
                    likes: reply.liked ? reply.likes - 1 : reply.likes + 1,
                  }
                : reply,
            ),
          };
        }
        if (comment.id === commentId) {
          return {
            ...comment,
            liked: !comment.liked,
            likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
          };
        }
        return comment;
      }),
    );
  };

  const handleReply = (id: string, username: string) => {
    setReplyTo({ id, username });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <FontAwesome name="close" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.header}>Comments</Text>
        </View>
        <View style={styles.closeButton} />
      </View>

      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CommentItem item={item} onLike={handleLike} onReply={handleReply} />
        )}
      />

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/images/avatar/avatar3.png')} style={styles.avatar} />
        <TextInput
          placeholder={replyTo ? `Replying to ${replyTo.username}...` : 'Add a comment...'}
          style={styles.input}
          value={newComment}
          onChangeText={setNewComment}
        />
        {replyTo && (
          <TouchableOpacity style={styles.cancelReply} onPress={() => setReplyTo(null)}>
            <FontAwesome name="times" size={16} color="#666" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleAddComment}>
          <FontAwesome name="send" size={20} color={newComment.trim() ? 'green' : '#ccc'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  closeButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
  },
  commentText: {
    fontWeight: 'normal',
    color: '#555',
  },
  commentActions: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    gap: 10,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  likes: {
    fontSize: 12,
    color: '#888',
  },
  reply: {
    fontSize: 12,
    color: '#4CAF50',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  replyContainer: {
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#f8f8f8',
  },
  repliesContainer: {
    marginTop: 10,
  },
  cancelReply: {
    padding: 5,
    marginRight: 10,
  },
});

export default CommentsScreen;
