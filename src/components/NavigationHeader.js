import React from "react";
import { TouchableOpacity, Platform, StyleSheet, Image } from "react-native";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export const LeftButton = ({ onPress, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {icon}
    </TouchableOpacity>
  );
};
export const RightHeader = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: { marginHorizontal: 10 },
});
