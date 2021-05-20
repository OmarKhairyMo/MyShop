import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { REACENTLY } from "../data/dummyData";
import { theme } from "../Theme/index";
import { Svg, Polygon } from "react-native-svg";
import NewCollectionCard from "./NewCollectionCard";
import TrendingCard from "../components/TrendingCard";
const ListProduct = ({ title, myList }) => {
  return (
    <>
      <Text
        style={{
          fontSize: theme.fontSizes.title,
          fontWeight: theme.fontWights.bold,
          marginBottom: 20,
        }}
      >
        {title}
      </Text>
      <FlatList
        data={myList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return title === "Trending" ? (
            <TrendingCard item={item} />
          ) : (
            <NewCollectionCard item={item} />
          );
        }}
      />
    </>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  list: {
    width: Dimensions.get("window").width / 2.4,
    height: "100%",
    borderRadius: 10,
    marginRight: 20,
    paddingLeft: 10,

    backgroundColor: "red",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: theme.fontSizes.caption,
    color: theme.colors.white,
    fontWeight: theme.fontWights.regular,
  },
  infoCont: { marginBottom: 10 },
});
