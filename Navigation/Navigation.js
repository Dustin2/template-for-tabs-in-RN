//dependences
import react, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../colors";
//screens
import HomeScreen from "../Screens/HomeScreen";
import HubScreen from "../Screens/HubScreen";
import CaptureScreen from "../Screens/CaptureScreen";
//icons
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

///create in someone const we function for use button tab navigation
const Tab = createBottomTabNavigator();

//create componet or function containing we tab navigator
function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      {
        //get prop for change options, props need or work name and component
      }
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerTintColor: Colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Hub"
        component={HubScreen}
        options={{
          tabBarLabel: "Hub",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="inventory" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerTintColor: Colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Captura de datos"
        component={CaptureScreen}
        options={{
          tabBarLabel: "Captura de datos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="barcode-scan" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerTintColor: Colors.primary,
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
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
