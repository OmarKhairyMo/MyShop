import "react-native-gesture-handler";
import React from "react";
import { Image } from "react-native";
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
import { NavThem } from "../Theme/NavigationThem";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const stackStyle = {
  headerTitle: (
    <Image
      style={{
        width: 80,
        height: 50,
        shadowOpacity: 0.2,
      }}
      source={require("../../assets/nikeLogo.png")}
    />
  ),
  headerTitleStyle: { color: theme.colors.priamary },
  headerRight: () => {
    return <RightHeader />;
  },
  headerLeft: () => {
    const navigation = useNavigation();
    return (
      <LeftButton
        onPress={() => {
          navigation.openDrawer();
        }}
        icon={
          <Image
            style={{ width: 23, height: 23 }}
            source={{
              uri: "https://www.publicdomainpictures.net/pictures/70000/nahled/4-dots.jpg",
            }}
          />
        }
      />
    );
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
const HomeStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={stackStyle}>
      <Stack.Screen name="Home1" component={Home} />
      <Stack.Screen
        name="Detailes"
        component={Detailes}
        options={{
          headerTransparent: true,
          headerLeft: () => {
            return (
              <LeftButton
                onPress={() => {
                  navigation.navigate("Home1");
                }}
                icon={<AntDesign name="left" size={24} color="black" />}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer theme={NavThem}>
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
