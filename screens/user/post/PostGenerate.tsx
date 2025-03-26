import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Animated, {
  FadeInUp,
  FadeOutDown,
  SlideInRight,
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const PostGenerate = () => {
  const [content, setContent] = useState('');
  const [selectedPrivacy, setSelectedPrivacy] = useState('public');
  const [selectedMood, setSelectedMood] = useState('');
  const [showMoodPicker, setShowMoodPicker] = useState(false);

  const headerHeight = useSharedValue(60);
  const inputHeight = useSharedValue(200);

  const headerStyle = useAnimatedStyle(() => ({
    height: withSpring(headerHeight.value),
  }));

  const inputStyle = useAnimatedStyle(() => ({
    height: withSpring(inputHeight.value),
  }));

  const moods = [
    { icon: '😊', label: 'Happy' },
    { icon: '😢', label: 'Sad' },
    { icon: '😎', label: 'Cool' },
    { icon: '🥰', label: 'In Love' },
    { icon: '😴', label: 'Sleepy' },
  ];

  const privacyOptions: {
    icon: typeof Ionicons extends { name: infer T } ? T : never;
    label: string;
    value: string;
  }[] = [
    { icon: 'earth-outline', label: 'Public', value: 'public' },
    { icon: 'people-outline', label: 'Friends', value: 'friends' },
    { icon: 'lock-closed-outline', label: 'Only me', value: 'private' },
  ];

  const handlePost = () => {
    if (!content.trim()) return;

    const post = {
      content: content.trim(),
      privacy: selectedPrivacy,
      mood: selectedMood,
      timestamp: new Date().toISOString(),
    };

    console.log('Creating post:', post);

    setContent('');
    setSelectedMood('');
    setShowMoodPicker(false);

    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.header, headerStyle]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close-outline" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Post</Text>
        <TouchableOpacity
          style={[styles.postButton, !content && styles.postButtonDisabled]}
          onPress={handlePost}
          disabled={!content}>
          <Animated.Text entering={FadeInUp} style={styles.postButtonText}>
            Post
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.userInfo}>
        <Image source={require('@/assets/images/avatar/avatar1.png')} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>Your Own...</Text>
          <TouchableOpacity style={styles.privacySelector}>
            {privacyOptions.map(
              option =>
                option.value === selectedPrivacy && (
                  <Animated.View
                    key={option.value}
                    style={styles.privacyOption}
                    entering={SlideInRight}>
                    <Ionicons name={option.icon} size={16} color="#4CAF50" />
                    <Text style={styles.privacyText}>{option.label}</Text>
                    <Ionicons name="chevron-down" size={16} color="#666" />
                  </Animated.View>
                ),
            )}
          </TouchableOpacity>
        </View>
      </View>

      <Animated.View style={[styles.inputContainer, inputStyle]}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="What's on your mind?"
          value={content}
          onChangeText={setContent}
          onFocus={() => {
            headerHeight.value = 0;
            inputHeight.value = 300;
          }}
          onBlur={() => {
            headerHeight.value = 60;
            inputHeight.value = 200;
          }}
        />
      </Animated.View>

      {showMoodPicker && (
        <Animated.View style={styles.moodPicker} entering={FadeInUp} exiting={FadeOutDown}>
          {moods.map(mood => (
            <TouchableOpacity
              key={mood.label}
              style={[styles.moodOption, selectedMood === mood.label && styles.selectedMood]}
              onPress={() => setSelectedMood(mood.label)}>
              <Text style={styles.moodIcon}>{mood.icon}</Text>
              <Text style={styles.moodLabel}>{mood.label}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}

      <View style={styles.addToPost}>
        <Text style={styles.addToPostTitle}>Add to your post</Text>
        <View style={styles.addToPostButtons}>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="images-outline" size={24} color="#4CAF50" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="location-outline" size={24} color="#4CAF50" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setShowMoodPicker(!showMoodPicker)}>
            <Ionicons name="happy-outline" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  postButtonDisabled: {
    backgroundColor: '#ccc',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    padding: 16,
    fontSize: 16,
    maxHeight: 200,
  },
  addToPost: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addToPostTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  addToPostButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  privacySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 4,
    borderRadius: 12,
    marginTop: 4,
  },
  privacyOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  privacyText: {
    fontSize: 12,
    color: '#666',
  },
  inputContainer: {
    overflow: 'hidden',
  },
  moodPicker: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    margin: 16,
  },
  moodOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  selectedMood: {
    backgroundColor: '#e8f5e9',
  },
  moodIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  moodLabel: {
    fontSize: 16,
    color: '#666',
  },
});

export default PostGenerate;
