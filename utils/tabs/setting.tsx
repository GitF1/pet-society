import { FontAwesome } from "@expo/vector-icons";

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;

export interface TabConfig {
  name: string;
  title: string;
  icon: string;
  component?: React.ComponentType<any>;
  customButton?: (props: any) => React.ReactNode;
}

export const TAB_CONFIG: TabConfig[] = [
  {
    name: "index",
    title: "Home",
    icon: "home",
  },
  {
    name: "search",
    title: "Search",
    icon: "search",
  },
  {
    name: "notifications",
    title: "Alerts",
    icon: "bell",
  },
  {
    name: "profile",
    title: "Profile",
    icon: "user",
  },
];
