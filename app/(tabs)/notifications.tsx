import SettingComponent from "@/components/SettingsComponent/SettingComponent";
import SettingsScreen from "@/screens/settings/SettingsScreen";
import { View, Text, StyleSheet } from "react-native";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      
     <SettingsScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
