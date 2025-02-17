import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="#777" />
        <TextInput placeholder="Search #tag" style={styles.input} />
      </View>
      <Text>Search Results...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  input: { marginLeft: 10, flex: 1 },
});
