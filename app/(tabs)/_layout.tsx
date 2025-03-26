import React, { useCallback, useState } from 'react';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import ProfileModal from '@/components/ProfileModal';
import { TabConfig, TabBarIcon, TAB_CONFIG } from '@/utils/tabs/setting';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);

  const getTabOptions = useCallback((tab: TabConfig) => {
    const baseOptions = {
      title: tab.title,
      tabBarIcon: ({ color }: { color: string }) => (
        <TabBarIcon name={tab.icon as any} color={color} />
      ),
    };

    // if (tab.name === 'profile') {
    //   return {
    //     ...baseOptions,
    //     tabBarButton: (props: any) => (
    //       <Pressable {...props} onPress={() => setProfileModalVisible(true)} />
    //     ),
    //   };
    // }

    return baseOptions;
  }, []);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].primary,
            height: 60,
          },
          headerShown: useClientOnlyValue(false, false),
        }}>
        {TAB_CONFIG.map(tab => (
          <Tabs.Screen key={tab.name} name={tab.name} options={getTabOptions(tab)} />
        ))}
      </Tabs>
      {/* <ProfileModal
        visible={isProfileModalVisible}
        onClose={() => setProfileModalVisible(false)}
      /> */}
    </>
  );
}
