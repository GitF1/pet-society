import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// Lấy kích thước màn hình
const { width, height } = Dimensions.get("window");

export default function HoangScreen2() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require("@/assets/images/avatar/panda5.jpg")} // Đặt ảnh vào thư mục assets/images
      style={styles.background}
      resizeMode="cover" // Giúp ảnh luôn vừa với màn hình
    >
      <View style={styles.overlay}>
        {/* Nút Skip
        <Text style={styles.skip} onPress={() => router.replace("/hoang/welcome_3")}>Skip</Text> */}
        
        {/* Nội dung chính */}
        <View style={styles.content}>
          <Text style={styles.title}>Welcome To the Fun</Text>
          <Text style={styles.subtitle}>Pet Society</Text>

          {/* Nút Next */}
          <TouchableOpacity style={styles.button} onPress={() => router.push("/hoang/welcome_3")}>
            <Text style={styles.buttonText}>Next</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: width * 0.05, // Padding linh động theo màn hình
    paddingBottom: height * 0.08,
  },
  skip: {
    position: "absolute",
    top: height * 0.06,
    right: width * 0.05,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    alignItems: "flex-start",
  },
  title: {
    fontSize: width * 0.07, // Kích thước chữ linh động theo màn hình
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: width * 0.07,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    marginTop: height * 0.02,
    backgroundColor: "#2D6A4F", // Màu xanh lá cây
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.08,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
    fontSize: width * 0.045,
    fontWeight: "bold",
    marginRight: 10,
  },
});
