const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    backgroundHeader: "#2C8850",
    primary: "#2C8850",
  },
  dark: {
    primary: "#2C8850",
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export const COLORS = {
  primary: "#2C8850",
  error: "#E74C3C",
  white: "#FFFFFF",
  border: "#EEE",
  textSecondary: "#777",
} as const;
