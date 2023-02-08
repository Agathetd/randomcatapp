import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TermsScreen } from "../screens/TermsScreen";
import { Routes } from "./Routes";
import CatsFeedScreen from "../screens/CatsFeedScreen"

  const Stack = createNativeStackNavigator();

  export default function Navigator () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Terms" component={TermsScreen} />
          { <Stack.Screen name="Cats" component={CatsFeedScreen} /> }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }