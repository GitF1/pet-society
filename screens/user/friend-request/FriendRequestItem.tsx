import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IFriendRequest } from '@/types/user/friend';

interface FriendRequestItemProps {
  item: IFriendRequest;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
}

export const FriendRequestItem: React.FC<FriendRequestItemProps> = ({
  item,
  onAccept,
  onReject,
}) => (
  <View style={styles.friendItem}>
    <Image source={{ uri: item.avatar }} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.job}>{item.job}</Text>
    </View>
    <TouchableOpacity style={styles.acceptButton} onPress={() => onAccept(item.id)}>
      <Feather name="check-circle" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.rejectButton} onPress={() => onReject(item.id)}>
      <Feather name="x-circle" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
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
