import { View, StyleSheet } from 'react-native';
import ActivityScreen from '@/screens/user/activity/Activity';
import SettingsScreen from '@/screens/settings/SettingsScreen';

export default function NotificationsScreen() {
  return <SettingsScreen />;
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
