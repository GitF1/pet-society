import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const comments = [
  {
    id: "1",
    avatar: require('../../assets/images/story/image1.jpg'),
    username: "amy_jasus",
    comment: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    time: "3h",
    likes: 3,
    replies: 0,
    liked: false,
  },
  {
    id: "2",
    avatar: require('../../assets/images/story/image2.jpg'),
    username: "moreira_25",
    comment: "What a amazing design that is personally i would love your artwork.",
    time: "4h",
    likes: 10,
    replies: 2,
    liked: true,
  },
  {
    id: "3",
    avatar: require('../../assets/images/story/image3.jpg'),
    username: "kiaracourses",
    comment: "Are you looking for designs?",
    time: "4h",
    likes: 10,
    replies: 0,
    liked: false,
  },
  {
    id: "4",
    avatar: require('../../assets/images/story/image4.jpg'),
    username: "chooeselife",
    comment: "i’ll contact you ohk.",
    time: "3h",
    likes: 10,
    replies: 0,
    liked: true,
  },
  {
    id: "5",
    avatar: require('../../assets/images/story/image5.jpg'),
    comment: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
    time: "1 day ago",
    likes: 10,
    replies: 2,
    liked: false,
  },
];

const CommentItem = ({ item }) => {
  return (
    <View style={styles.commentContainer}>
      <Image 
        source={item.avatar} 
        style={styles.avatar} 
      />
      <View style={styles.commentContent}>
        <Text style={styles.username}>
          {item.username || 'Anonymous'} <Text style={styles.commentText}>{item.comment}</Text>
        </Text>
        <View style={styles.commentActions}>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.likes}>{item.likes} Likes</Text>
          <Text style={styles.reply}>Reply</Text>
          <TouchableOpacity>
            <FontAwesome name={item.liked ? "heart" : "heart-o"} size={16} color={item.liked ? "red" : "black"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function CommentsScreen({ onClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <FontAwesome name="close" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.header}>Comments </Text>
        </View>
        <View style={styles.closeButton} /> {/* Empty view for balance */}
      </View>
      <FlatList data={comments} keyExtractor={(item) => item.id} renderItem={({ item }) => <CommentItem item={item} />} />
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/images/avatar/avatar1.png')} style={styles.avatar} />
<TextInput placeholder="Add a comment..." style={styles.input} />
        <TouchableOpacity>
          <FontAwesome name="send" size={20} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4CAF50",
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
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  commentContainer: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderTopLeftRadius: 10, borderTopRightRadius: 10,
   
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
    fontWeight: "bold",
  },
  commentText: {
    fontWeight: "normal",
    color: "#555",
  },
  commentActions: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 12,
    color: "#888",
    marginRight: 10,
  },
  likes: {
    fontSize: 12,
    color: "#888",
    marginRight: 10,
  },
  reply: {
    fontSize: 12,
    color: "blue",
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
};