import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
interface IActivityData {
  id: string;
  name: string;
  action: string;
  time: string;
  avatar: string;
}
const activityData: IActivityData[] = [
  {
    id: "1",
    name: "amy_jasus",
    action: "Commented on your post",
    time: "Just Now",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "chineze.afamefuna",
    action: "Like your post.",
    time: "1 hour ago",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "darren_adams",
    action: "Tagged you in a post.",
    time: "6 hours ago",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "princy_poliya",
    action: "Started following you.",
    time: "7 hours ago",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "5",
    name: "____.shrutti__",
    action: "Like your post.",
    time: "8 hours ago",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "6",
    name: "erika_mateo",
    action: "Tagged you in a post.",
    time: "2 days ago",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "7",
    name: "princy_poliya",
    action: "Started following you.",
    time: "3 days ago",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "8",
    name: "chineze.afamefuna",
    action: "Like your post.",
    time: "3 days ago",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "9",
    name: "chineze.afamefuna",
    action: "Like your post.",
    time: "3 days ago",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "10",
    name: "chineze.afamefuna",
    action: "Like your post.",
    time: "3 days ago",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "11",
    name: "chineze.afamefuna",
    action: "Like your post.",
    time: "3 days ago",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const ActivityScreen = ({ navigation }: any) => {
  const handleGoBack = () => {
    router.back();
  };

  const renderItem = ({ item }: { item: IActivityData }) => (
    <View style={styles.activityItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.username}>{item.name}</Text>
        <Text style={styles.action}>{item.action}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={activityData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2C8850",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  listContainer: {
    paddingTop: 10,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  action: {
    fontWeight: "400",
    color: "#555",
  },
  time: {
    fontSize: 12,
    color: "#999",
    marginTop: 3,
  },
});

export default ActivityScreen;
