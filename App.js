import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/Navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <>
      <MainNavigation />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
