import "react-native-gesture-handler";
import React from "react";
// Navigation Packtges
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

// Import Custom Screens
import Home from "../Screens/Shop/Home";
import Detailes from "../Screens/Shop/Detailes";
import { LeftButton, RightHeader } from "../components/NavigationHeader";
import { theme } from "../Theme";
import CartScreen from "../Screens/Shop/CartScreen";
import OrdersScreen from "../Screens/Shop/OrdersScreen";
// Custom Drawer
import DrawerContent from "./DrawerContent";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const stackStyle = {
  headerTitleStyle: { color: theme.colors.priamary },
  headerRight: () => {
    return <RightHeader />;
  },
  headerLeft: () => {
    return <LeftButton />;
  },
};

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

const CartStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detailes" component={Detailes} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="slide"
        drawerContent={(props) => {
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Cart" component={CartStackNavigator} />
        <Drawer.Screen name="Orders" component={OrderStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
