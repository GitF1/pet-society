import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import SearchHistoryHeader from "@/screens/search/components/SearchHistoryHeader";
import MenuPillButton from "@/screens/search/components/MenuPillButton";
import SearchResultItem from "@/screens/search/components/SearchResultItem";
import HashtagItem from "@/screens/search/components/HashtagItem";

const images = [
  {
    id: "1",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4asPQgTA-eR7b4vMq-tijmG78uZaKz34ICw&s",
  },
  {
    id: "2",
    uri: "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg",
  },
  { id: "3", uri: "https://placehold.co/200x200/000000/FFFFFF/png" },
  { id: "4", uri: "https://placehold.co/200x200/000000/FFFFFF/png" },
  { id: "5", uri: "https://placehold.co/200x200/000000/FFFFFF/png" },
  { id: "6", uri: "https://placehold.co/200x200" },
  { id: "7", uri: "https://placehold.co/200x200/000000/FFFFFF/png" },
  {
    id: "8",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXVmx6QegOP3TG7-e4VOwlhb-kMd3heeQ-w&s",
  },
  {
    id: "9",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKk4rdmQiuOkGcYKKJQBMT-9WxDeyD7Rbs9Q&s",
  },
  {
    id: "10",
    uri: "https://static.wikia.nocookie.net/nichijou/images/2/26/Sakamoto.png/revision/latest?cb=20190531163434",
  },
  {
    id: "11",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKk4rdmQiuOkGcYKKJQBMT-9WxDeyD7Rbs9Q&s",
  },
  {
    id: "12",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKk4rdmQiuOkGcYKKJQBMT-9WxDeyD7Rbs9Q&s",
  },
];

const hashtags = [
  "#helloform",
  "#clothesfashiondesign",
  "ux",
  "#clothesfashiondesign2",
];

// Get screen width for responsive layout
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / 2 - 40; // 2 columns with some spacing

export default function SearchScreen() {
  const [selected, setSelected] = useState("Discover");
  const [hashtag, setHashtag] = useState("");
  return (
    <View style={styles.container}>

      <View style={styles.searchBar}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={20}
          color="#777"
        />
        <TextInput placeholder="Search #tag" style={styles.input} />
        <Feather style={styles.micIcon} name="mic" size={20} color="#777" />
      </View>

      <View style={styles.containerSearchFilter}>
        {["Discover", "Account", "Tags"].map((item) => (
          <MenuPillButton
            key={item}
            item={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </View>
      
      <View>
        {selected === "Discover" && (
          <View style={styles.containerFlatList}>
            <FlatList
              data={images}
              keyExtractor={(item) => item.id}
              numColumns={2} // Two-column layout
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: item.uri }}
                    style={styles.imageFlatList}
                  />
                </View>
              )}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        )}
        {selected === "Account" && (
          <View style={styles.scrollContainer}>
            <SearchHistoryHeader />
            <View style={styles.scrollContainer}>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <SearchResultItem
                  avatar="https://placehold.co/200x200/000000/FFFFFF/png"
                  name="ABC"
                  description="Alphabet"
                />
                <SearchResultItem
                  avatar={
                    "https://static.wikia.nocookie.net/all-worlds-alliance/images/6/69/Ac4e52e769285180dcf268e71d602ff8.jpg/revision/latest/scale-to-width-down/250?cb=20190713074315"
                  }
                  name="DEF"
                  description="Alphabet"
                />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
              </ScrollView>
            </View>
          </View>
        )}
        {selected === "Tags" && (
          <View>
            <SearchHistoryHeader />
            <View style={styles.hashtagsContainer}>
              {hashtags.map((item) => (
                <MenuPillButton
                  item={item}
                  selected={hashtag}
                  setSelected={setHashtag}
                />
              ))}
            </View>
            <View>
              <HashtagItem />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFlatList: {
    // flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  flatListContainer: {
    paddingBottom: 20, // Space at the bottom
  },
  imageContainer: {
    flex: 1,
    margin: 5, // Space between images
  },
  imageFlatList: {
    width: imageSize,
    height: imageSize,
    borderRadius: 10, // Optional: rounded corners
  },
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  scrollContainer: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  hashtagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerSearchFilter: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",

    gap: "5px",
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
  },
  input: { marginLeft: 10, flex: 1 },
  micIcon: { marginRight: 4 },
  searchIcon: { marginLeft: 4 },
  selectedButton: {
    marginRight: 5,
    backgroundColor: "#3B9678",
    paddingVertical: 10, // Vertical padding for better touch area
    paddingHorizontal: 15, // Horizontal padding for button width
    borderRadius: 20, // Rounded corners
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
  },
  filterButton: {
    marginRight: 5,
    backgroundColor: "#EAEAEA",
    paddingVertical: 10, // Vertical padding for better touch area
    paddingHorizontal: 15, // Horizontal padding for button width
    borderRadius: 20, // Rounded corners
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    // borderWidth: 1,
  },
  selectedButtonText: {
    color: "#fff", // White text
    fontSize: 14, // Adjust font size
    fontWeight: "bold", // Optional: Make text bold
  },
  filterButtonText: {
    color: "#777",
  },
  outerCircle: {
    width: 60, // Adjust size as needed
    height: 60,
    borderRadius: 40, // Half of width/height to make it circular
    borderWidth: 3,
    borderColor: "green", // Adjust border color
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "90%", // Slightly smaller than the container to fit inside
    height: "90%",
    borderRadius: 30, // Keep the image circular
  },
  searchResultItem: {
    display: "flex",
    flexDirection: "row",
  },
  searchUserText: {},
  searchUserDescription: { color: "#777" },
  searchUserTextBox: {
    marginLeft: 10,
    marginTop: 10,
  },
});
