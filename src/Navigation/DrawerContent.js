import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { theme } from "../Theme";

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: theme.colors.drawer, flex: 1 }}
    >
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
            style={styles.img}
          />
        </View>
        <Text style={styles.name}>Islam El-Marg</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.labelCont}>
          <DrawerItem
            onPress={() => props.navigation.navigate("Home")}
            label="Home"
            labelStyle={styles.label}
            icon={({ size, color }) => {
              return (
                <Ionicons
                  name="home-outline"
                  size={size}
                  color={theme.colors.white}
                />
              );
            }}
          />
        </View>
        <View style={styles.labelCont}>
          <DrawerItem
            label="WishList"
            onPress={() => props.navigation.navigate("WishList")}
            labelStyle={styles.label}
            icon={({ size, color }) => {
              return (
                <FontAwesome5
                  name="heart"
                  size={size}
                  color={theme.colors.white}
                />
              );
            }}
          />
        </View>
        <View style={styles.labelCont}>
          <DrawerItem
            label="Cart"
            onPress={() => props.navigation.navigate("Cart")}
            labelStyle={styles.label}
            icon={({ size, color }) => {
              return (
                <Feather
                  name="shopping-cart"
                  size={size}
                  color={theme.colors.white}
                />
              );
            }}
          />
        </View>
        <View style={styles.labelCont}>
          <DrawerItem
            label="Orders"
            labelStyle={styles.label}
            onPress={() => props.navigation.navigate("Orders")}
            icon={({ size, color }) => {
              return (
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={size}
                  color={theme.colors.white}
                />
              );
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
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
    width: 80,
    height: 85,
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  labelCont: { flex: 1, marginBottom: 20 },
  label: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.white,
    fontWeight: theme.fontWights.regular,
    marginLeft: -12,
  },
});
