import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { theme } from "../Theme/index";
import { Svg, Polygon } from "react-native-svg";

const NewCollectionCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.list, { backgroundColor: item.bgColor }]}
      onPress={() => {
        navigation.navigate("Detailes", { id: item.id });
      }}
    >
      <View style={styles.curveView}>
        <Svg style={{ width: "100%", height: "100%" }}>
          <Polygon points="0,0 160,0 160,80" fill="white" />
        </Svg>
      </View>
      <Image style={styles.img} source={item.imageUrl} />
      <View style={styles.infoCont}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={[styles.text, { marginVertical: 5 }]}>
          {item.description}
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: theme.fontSizes.button,
              fontWeight: theme.fontWights.bold,
            },
          ]}
        >
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewCollectionCard;

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
  curveView: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "95%",
    height: "100%",
  },
  img: {
    position: "absolute",
    top: 38,
    right: -8,
    width: "110%",
    shadowOpacity: 0.5,
    height: 80,
    transform: [{ rotate: "-15deg" }],
    resizeMode: "contain",
  },
  text: {
    fontSize: theme.fontSizes.caption,
    color: theme.colors.white,
    fontWeight: theme.fontWights.regular,
  },
  infoCont: { marginBottom: 10 },
});
