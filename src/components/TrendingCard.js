import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import { theme } from "../Theme";

const TrendingCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.list}>
      <Image
        source={item.imageUrl}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          width: "70%",
          height: "100%",
          resizeMode: "contain",
          shadowOpacity: 0.5,
          transform: [{ rotate: "-25deg" }],
        }}
      />
      <Text style={styles.text}>{item.title}</Text>
      <Text style={[styles.text, { fontSize: theme.fontSizes.button }]}>
        {item.description}
      </Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  list: {
    width: Dimensions.get("window").width / 1.5,
    height: "100%",
    backgroundColor: theme.colors.secondary,
    borderRadius: 15,
    marginRight: 20,
    padding: 10,
    justifyContent: "center",
  },
  text: { fontSize: theme.fontSizes.body, fontWeight: theme.fontWights.medium },
  price: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWights.bold,
    paddingTop: 10,
  },
});
