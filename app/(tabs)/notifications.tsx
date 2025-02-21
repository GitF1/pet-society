import { View, StyleSheet } from 'react-native';
import ActivityScreen from '@/screens/user/activity/Activity';

export default function NotificationsScreen() {
  return <ActivityScreen />;
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
