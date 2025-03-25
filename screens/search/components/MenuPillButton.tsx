import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuPillButton = ({ item, selected, setSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        key={item}
        style={[
          styles.filterButton,
          selected === item && styles.selectedButton, // Apply different style when selected
        ]}
        onPress={() => setSelected(item)}
      >
        <Text
          style={[
            styles.filterButtonText,
            selected === item && styles.selectedButtonText, // Change text color on selection
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },

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
});

export default MenuPillButton;
