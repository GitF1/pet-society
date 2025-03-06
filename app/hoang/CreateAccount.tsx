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

export default function CreateAccountScreen() {
  const router = useRouter();

  // Animation States
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start(() => router.push("/hoang/forgot_1"));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Create Account</Text>

      <Animated.View style={[styles.formContainer, { transform: [{ translateY: slideAnim }] }]}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subText}>
          Create an account to explore amazing destinations around the world!
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#888" />
          <TextInput placeholder="Enter your full name" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#888" />
          <TextInput placeholder="Enter your email address" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" />
          <TextInput placeholder="Enter password" secureTextEntry style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" />
          <TextInput placeholder="Confirm password" secureTextEntry style={styles.input} />
        </View>

        <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
          <TouchableOpacity style={styles.createButton} onPress={handlePress}>
            <Text style={styles.createButtonText}>Create Account</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </Animated.View>

        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text style={styles.signInLink} onPress={() => router.push("/hoang/login")}>
            Sign in
          </Text>
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4CAF50", paddingTop: 50 },
  backButton: { position: "absolute", top: 50, left: 20, zIndex: 10 },
  title: { color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  formContainer: { backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, flex: 1 },
  welcomeText: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  subText: { fontSize: 14, color: "#666", marginBottom: 20 },
  inputContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#F5F5F5", borderRadius: 10, padding: 10, marginBottom: 15 },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  createButton: { backgroundColor: "#4CAF50", padding: 15, borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10 },
  createButtonText: { color: "white", fontSize: 18, fontWeight: "bold", marginRight: 10 },
  signInText: { textAlign: "center", marginTop: 15, fontSize: 14, color: "#666" },
  signInLink: { color: "#4CAF50", fontWeight: "bold" },
});
