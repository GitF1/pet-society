import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const profileData = {
  username: 'Minh Vinh',
  role: 'Coder',
  profileImage: require('../../assets/images/avatar/avatar3.png'),
  following: 20,
  followers: '30',
  posts: 10,
  storyAvatars: [
    
    require('../../assets/images/story/image1.jpg'),
    require('../../assets/images/story/image2.jpg'),
    require('../../assets/images/story/image3.jpg'),
    require('../../assets/images/story/image4.jpg'),
    require('../../assets/images/story/image5.jpg'),
    require('../../assets/images/story/image1.jpg'),
  ],
  postsImages: [
    require('../../assets/images/story/image1.jpg'),
    require('../../assets/images/story/image2.jpg'),
    require('../../assets/images/story/image3.jpg'),
    require('../../assets/images/story/image4.jpg'),
    require('../../assets/images/story/image5.jpg'),
    require('../../assets/images/story/image2.jpg'),
    require('../../assets/images/story/image4.jpg'),
  ],
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.profileSection}>
        <View style={styles.profileMainInfo}>
          <Image source={profileData.profileImage} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={styles.username}>{profileData.username}</Text>
            <Text style={styles.role}>@{profileData.role}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.statsContainer}>
          <Text style={styles.statText}>{profileData.following} {'\n'}Following</Text>
          <Text style={styles.statText}>{profileData.followers} {'\n'}Followers</Text>
          <Text style={styles.statText}>{profileData.posts} {'\n'}Post</Text>
        </View>
      </View>
      
      <FlatList
        horizontal
        data={profileData.storyAvatars}
        renderItem={({ item }) => (
          <Image source={item} style={styles.storyAvatar} />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.storyContainer}
      />
      
      <FlatList
        data={profileData.postsImages}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={item} style={styles.postImage} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  profileSection: {
marginVertical: 20 
  },
  profileMainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: { 
    width: 80, 
    height: 80, 
    borderRadius: 40,
    marginRight: 20
  },
  profileDetails: {
    flex: 1,
  },
  username: { 
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 4,
  },
  role: { 
    fontSize: 14, 
    color: 'gray',
    marginBottom: 8,
  },
  editButton: { 
    backgroundColor: '#2F805D', 
    paddingVertical: 5, 
    paddingHorizontal: 20, 
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  editText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 },
  statText: { fontSize: 14, textAlign: 'center', fontWeight: 'bold' },
  storyContainer: { 
    marginVertical: 15,
    marginBottom: 20,  // Increased bottom margin
    borderBottomWidth: 0.5,  // Optional: adds a subtle separator
    borderBottomColor: '#000',  // Black separator
    paddingBottom: 10,  // Added padding before separator
  },
  storyAvatar: {
    marginBottom: 50,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  postImage: {
    width: '48%',
    height: 150,
    margin: '1%',
    borderRadius: 10,
  },
});

export default ProfileScreen;