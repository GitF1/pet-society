import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import FriendRequests from "@/screens/user/friend-request/FriendRequests";

export default function ActivityLayout() {
  return <FriendRequests />;
}
