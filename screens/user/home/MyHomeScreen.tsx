import PostComponent from '@/components/PostComponent/PostComponent';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Button } from 'react-native';

import { FlatList } from 'react-native';

var avatarImageFiles: string[] = [];

const MyHomeScreen: React.FC = () => {
  useEffect(() => {
    for (let i = 1; i <= 5; ++i) {
      avatarImageFiles.push(`avatar${i}.png`);
    }
  }, []);

  // function renderImages() {
  //     return avatarImageFiles.map((file) => {
  //         return (
  //             <Image style={styles.avatarImage} source={require('/images/avatar/avatar1.png')}/>
  //         )
  //     })
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Media X</Text>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity onPress={() => router.push('/user/post')}>
            <Ionicons name="add-outline" style={styles.headerIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/(tabs)/notifications')}>
            <Ionicons name="notifications-outline" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.allAvatarsContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              source={require('../../../assets/images/avatar/avatar1.png')}
            />
            <Text style={styles.nameText}>You</Text>
          </View>

          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              source={require('../../../assets/images/avatar/avatar2.png')}
            />
            <Text style={styles.nameText}>Đình Duy</Text>
          </View>

          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              source={require('../../../assets/images/avatar/avatar3.png')}
            />
            <Text style={styles.nameText}>Minh Vinh</Text>
          </View>

          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              source={require('../../../assets/images/avatar/avatar4.png')}
            />
            <Text style={styles.nameText}>Thái Hoàng</Text>
          </View>

          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              source={require('../../../assets/images/avatar/avatar5.png')}
            />
            <Text style={styles.nameText}>Văn Toàn</Text>
          </View>
        </View>
      </ScrollView>

      <PostComponent />
    </View>
  );
};

const colors = {
  green: '#3c947c',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#FAFAFA',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center', // width 90% sẽ nằm ở center
    width: '90%',
  },

  body: {},

  headerText: {
    fontSize: 28,
    color: colors.green,
    padding: 10,
    fontWeight: 'bold',
  },

  headerIconContainer: {
    flexDirection: 'row',
  },

  headerIcon: {
    padding: 10,
    fontSize: 28,
  },

  footer: {},

  allAvatarsContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginHorizontal: 20, //*
    marginVertical: 20, //*
    gap: 20,
  },

  avatarContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.green,
  },

  nameText: {
    marginTop: 6,
  },
});

export default MyHomeScreen;
