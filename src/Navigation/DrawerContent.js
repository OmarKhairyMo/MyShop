import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { theme } from "../Theme";
import { LinearGradient } from "expo-linear-gradient";

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
const DrawerContent = (props) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[theme.colors.priamary, theme.colors.secondary]}
    >
      <DrawerContentScrollView {...props}>
        <View style={styles.profileContainer}>
          <View style={styles.avatar}>
            <Image
              source={{
                uri: "http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
              }}
              style={styles.img}
            />
          </View>
          <Text style={styles.name}>Guest</Text>
        </View>

        <DrawerItem
          onPress={() => props.navigation.navigate("Home")}
          label="Home"
          labelStyle={styles.label}
          icon={({ size, color }) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          }}
        />
        <DrawerItem
          label="WishList"
          onPress={() => props.navigation.navigate("WishList")}
          labelStyle={styles.label}
          icon={({ size, color }) => {
            return <FontAwesome5 name="heart" size={size} color={color} />;
          }}
        />
        <DrawerItem
          label="Cart"
          onPress={() => props.navigation.navigate("Cart")}
          labelStyle={styles.label}
          icon={({ size, color }) => {
            return <Feather name="shopping-cart" size={size} color={color} />;
          }}
        />
        <DrawerItem
          label="Orders"
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate("Orders")}
          icon={({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={size}
                color={color}
              />
            );
          }}
        />
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.priamary },
  profileContainer: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: "25%",
    height: "55%",
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: 19,
  },
  name: {
    paddingHorizontal: 15,
    fontSize: theme.fontSizes.title,
    color: theme.colors.secondary,
    fontWeight: theme.fontWights.regular,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  label: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWights.regular,
    marginLeft: -12,
  },
});
