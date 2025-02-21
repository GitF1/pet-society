import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HashtagItem = () => {
  return (
    <View>
      <TouchableOpacity style={styles.searchResultItem}>
        <View style={styles.hashtagIcon}>
          <FontAwesome name="hashtag" size={24} color="black" />
        </View>
        <View style={styles.searchUserTextBox}>
          <Text style={styles.searchUserText}>#graphic design</Text>
          <Text style={styles.searchUserDescription}>
            Graphic design description
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "90%", // Slightly smaller than the container to fit inside
    height: "90%",
    borderRadius: 30, // Keep the image circular
  },
  searchResultItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  searchUserText: {},
  searchUserDescription: { color: "#777" },
  searchUserTextBox: {
    marginLeft: 10,
    marginTop: 10,
  },
  hashtagIcon: {
    marginRight: 10,
  },
});

export default HashtagItem;
