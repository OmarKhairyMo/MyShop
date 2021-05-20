import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../Theme";

const AppButton = ({ title, color, onPress, size, titleColor }) => {
  return (
    <TouchableOpacity style={styles(size, color).button}>
      <Text style={styles(titleColor).title1}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = (size, color, titleColor) =>
  StyleSheet.create({
    button: {
      width: size,
      height: size / 4,
      borderRadius: size / 3,
      backgroundColor: color,
      justifyContent: "center",
      alignItems: "center",
      shadowOpacity: 0.3,
    },
    title1: {
      color: theme.colors.white,
      fontWeight: theme.fontWights.medium,
      fontSize: theme.fontSizes.button,
    },
  });
