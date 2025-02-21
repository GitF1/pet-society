import MyHomeScreen from "@/screens/user/home/MyHomeScreen";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Text>Home Screen</Text> */}
      <MyHomeScreen/>
      {/* <Link href="/user/activity">Activity</Link>
      <Link href="/user/friend-request">Request</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
