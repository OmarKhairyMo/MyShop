import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { theme } from "../Theme/index";
import { Feather } from "@expo/vector-icons";
const MainTextInput = () => {
  return (
    <View style={styles.inputCont}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
      />
      <Feather name="search" size={20} color="gray" style={styles.search} />
    </View>
  );
};

export default MainTextInput;

const styles = StyleSheet.create({
  inputCont: {
    width: "100%",
    height: "75%",
    flexDirection: "row",
    backgroundColor: theme.colors.textInput,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: theme.fontSizes.button,
    fontWeight: theme.fontWights.medium,
  },
  search: { alignSelf: "center" },
});
