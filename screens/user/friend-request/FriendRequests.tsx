import React, { FC, useCallback, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import { FriendRequestItem } from './FriendRequestItem';
import { mockFriendRequests } from '@/data/mockFriendRequests';
import { IFriendRequest } from '@/types/user/friend';
import { router } from 'expo-router';

interface FriendRequestsProps {
  navigation: NavigationProp<any>;
}

const FriendRequests = () => {
  const [friendRequests, setFriendRequests] = useState<IFriendRequest[]>(mockFriendRequests);

  const handleAccept = useCallback((id: string) => {
    setFriendRequests((prev: IFriendRequest[]) => prev.filter(request => request.id !== id));
  }, []);

  const handleReject = useCallback((id: string) => {
    setFriendRequests((prev: IFriendRequest[]) => prev.filter(request => request.id !== id));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Feather name="chevron-left" size={24} color="white" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Friend Requests</Text>
      </View>

      <FlatList
        data={friendRequests}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <FriendRequestItem item={item} onAccept={handleAccept} onReject={handleReject} />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
    backgroundColor: '#2C8850',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  listContainer: {
    paddingTop: 10,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  job: {
    fontSize: 12,
    color: '#777',
  },
  acceptButton: {
    backgroundColor: '#2C8850',
    padding: 10,
    borderRadius: 50,
    marginRight: 8,
  },
  rejectButton: {
    backgroundColor: '#E74C3C',
    padding: 10,
    borderRadius: 50,
  },
});

export default FriendRequests;
