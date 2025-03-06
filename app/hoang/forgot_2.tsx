import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";

export default function ResetPasswordScreen() {
  const router = useRouter();

  // Animation States
  const slideAnim = useRef(new Animated.Value(100)).current; // Hiệu ứng trượt vào màn hình
  const fadeAnim = useRef(new Animated.Value(0)).current; // Hiệu ứng mờ dần

  useEffect(() => {
    // Khi màn hình hiển thị, trượt vào và làm mờ dần
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header với nút Back */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Forgot Password</Text>

      {/* Nội dung chính với hiệu ứng trượt mượt mà */}
      <Animated.View
        style={[
          styles.formContainer,
          { transform: [{ translateY: slideAnim }], opacity: fadeAnim },
        ]}
      >
        <Text style={styles.headerText}>Create New Password</Text>
        <Text style={styles.subText}>
          Your new password must be different from previous used passwords.
        </Text>

        {/* Ô nhập password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" />
          <TextInput
            placeholder="Enter password"
            secureTextEntry
            style={styles.input}
          />
          <Ionicons name="eye-off-outline" size={20} color="#888" />
        </View>

        {/* Ô nhập lại password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" />
          <TextInput
            placeholder="Re-enter password"
            secureTextEntry
            style={styles.input}
          />
          <Ionicons name="eye-off-outline" size={20} color="#888" />
        </View>

        {/* Nút Send Instructions */}
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.sendButtonText}>Send Instructions</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4CAF50",
    paddingTop: 50,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 1,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  sendButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
});
