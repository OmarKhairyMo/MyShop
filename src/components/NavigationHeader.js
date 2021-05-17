import React from "react";
import { TouchableOpacity, Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, Octicons } from "@expo/vector-icons";
import { theme } from "../Theme/index";

export const LeftButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={styles.button}
    >
      <Octicons
        name="three-bars"
        size={24}
        color={
          Platform.OS === "ios" ? theme.colors.priamary : theme.colors.white
        }
      />
    </TouchableOpacity>
  );
};
export const RightHeader = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => console.log("I`M Workingasdasd")}
      style={styles.button}
    >
      <Feather
        name="shopping-cart"
        size={24}
        color={
          Platform.OS === "ios" ? theme.colors.priamary : theme.colors.white
        }
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: { marginHorizontal: 10 },
});
