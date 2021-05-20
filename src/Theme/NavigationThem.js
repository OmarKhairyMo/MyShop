import { DefaultTheme } from "@react-navigation/native";
import { theme } from "./index";
export const NavThem = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.white,
    border: theme.colors.white,
  },
};
