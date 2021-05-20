import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AppButton from "../../components/AppButton";
import { REACENTLY } from "../../data/dummyData";
import { theme } from "../../Theme";
import { AntDesign } from "@expo/vector-icons";
const Detailes = ({ route }) => {
  const [current, setCurrent] = useState(0);
  const productId = route.params.id;
  const currentItem = REACENTLY.find((element) => element.id === productId);
  return (
    <View style={styles.contianer}>
      <View style={styles.imgCont}>
        <Image style={styles.img} source={currentItem.imageUrl} />
      </View>
      <View style={styles.titleCont}>
        <Text style={styles.title}>{currentItem.title}</Text>
        <Text style={styles.price}>$ {currentItem.price}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.size}>Size</Text>
        <View style={styles.sizeListCont}>
          <FlatList
            data={currentItem.sizes}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.sizeButton,
                    {
                      backgroundColor:
                        index === current
                          ? theme.colors.black
                          : theme.colors.secondary,
                      shadowOpacity: index === current ? 0.23 : 0,
                    },
                  ]}
                  onPress={() => setCurrent(index)}
                >
                  <Text
                    style={[
                      styles.sizeNumber,
                      {
                        color:
                          index === current
                            ? theme.colors.white
                            : theme.colors.black,
                      },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.fotter}>
          <View style={styles.favouContainer}>
            <AntDesign name="hearto" size={20} color="black" />
          </View>
          <AppButton
            size={250}
            color={theme.colors.black}
            title="Add to Cart"
            titleColor={theme.colors.white}
          />
        </View>
      </View>
    </View>
  );
};

export default Detailes;

const styles = StyleSheet.create({
  contianer: { flex: 1 },
  imgCont: {
    height: Dimensions.get("window").height / 2.3,
    backgroundColor: theme.colors.secondary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
    shadowOpacity: 0.5,
  },
  titleCont: {
    height: "8%",

    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  title: { fontSize: theme.fontSizes.title, fontWeight: theme.fontWights.bold },
  price: {
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWights.medium,
  },
  body: { flex: 1, paddingLeft: 10, paddingTop: 10 },
  size: {
    fontSize: theme.fontSizes.button,
    fontWeight: theme.fontWights.bold,
  },
  sizeListCont: {
    height: "20%",
    marginVertical: 20,
  },
  sizeButton: {
    width: Dimensions.get("window").width / 5,

    backgroundColor: theme.colors.secondary,
    marginRight: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeNumber: {
    fontSize: theme.fontSizes.body,
    fontWeight: "400",
  },
  fotter: {
    flex: 1,
    flexDirection: "row",

    padding: 10,
    paddingLeft: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  favouContainer: {
    width: 72,
    height: 64,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 8,
    shadowOpacity: 0.3,
  },
});
