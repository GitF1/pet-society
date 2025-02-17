import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import ActivityScreen from "@/screens/user/activity/Activity";

export default function ActivityLayout() {
  const colorScheme = useColorScheme();
  return <ActivityScreen />;
}
