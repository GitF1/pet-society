import { View, Text, Image, StyleSheet, Animated, Easing } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  const router = useRouter();

  // Animation States (Chậm hơn)
  const fadeAnim = useRef(new Animated.Value(0)).current; // Fade-in effect
  const bounceAnim = useRef(new Animated.Value(0.6)).current; // Bounce effect
  const textAnim = useRef(new Animated.Value(0)).current; // Typewriter effect
  const rotateAnim = useRef(new Animated.Value(0)).current; // Rotation effect

  useEffect(() => {
    // Chạy các Animation chậm hơn bằng cách tăng duration
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500, // Tăng thời gian từ 1500 lên 2500ms để chậm hơn
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnim, {
        toValue: 1,
        friction: 6, // Tăng friction lên để giảm tốc độ
        tension: 30, // Giảm tension để animation chậm lại
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3500, // Xoay chậm hơn từ 2000 lên 3500ms
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();

    // Typewriter Effect xuất hiện chậm hơn
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 3000, // Chữ xuất hiện chậm hơn từ 2000 lên 3000ms
      useNativeDriver: true,
    }).start();

    // Điều hướng sau 5 giây thay vì 3 giây
    const timer = setTimeout(() => {
      router.replace("/hoang/welcome_1");
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer khi component unmount
  }, []);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // Xoay vòng logo khi xuất hiện
  });

  return (
    <LinearGradient colors={["#A8E6A2", "#3B8D99"]} style={styles.container}>
      {/* Logo với hiệu ứng Bounce và Rotation */}
      <Animated.Image
        source={require("@/assets/images/avatar/logo1.jpg")}
        style={[
          styles.logo, 
          { 
            opacity: fadeAnim, 
            transform: [{ scale: bounceAnim }, { rotate: rotateInterpolate }] 
          },
        ]}
      />

      {/* Chữ Pet Society với hiệu ứng Typewriter & Glow */}
      <Animated.Text style={[styles.text, { opacity: textAnim }]}>
        Pet Society
      </Animated.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
  },
  logo: { 
    width: 100, 
    height: 100, 
    marginBottom: 20,
    borderRadius: 50, // Làm logo tròn hơn nếu cần
  },
  text: { 
    fontSize: 30, 
    fontWeight: "bold", 
    textAlign: "center",
    letterSpacing: 2,
    color: "#fff", 
    textShadowColor: "#2F4F2F", // Hiệu ứng phát sáng
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 10,
  },
});
