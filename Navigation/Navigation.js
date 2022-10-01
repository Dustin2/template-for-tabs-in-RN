//dependences
import react, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

//screens
import HomeScreen from "../Screens/HomeScreen";
import ProductsScreen from "../Screens/ProductsScreen";
import StackScreen from "../Screens/StackScreen";
import DealilsStore from "../Screens/DealilsStore";
//icons
import { MaterialIcons } from "@expo/vector-icons";

///create in someone const we function for use button tab navigation
const Tab = createBottomTabNavigator();

//create componet or function containing we tab navigator
function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red",
      }}
    >
      {
        //get prop for change options, props need or work name and component
      }
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarLabel: "Inventario",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="inventory" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      
      <Tab.Screen
        name="DealilsStore"
        component={DealilsStore}
        options={{
          tabBarLabel: "Detalle de tienda",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="details" size={24} color={color} /> ),
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}

//export navigation and return component and tabs
export default function navigation() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
