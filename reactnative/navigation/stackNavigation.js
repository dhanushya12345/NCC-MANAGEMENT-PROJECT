import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from  '../screen/HomeScreen';
import WelcomeScreen from "../screen/WelcomeScreen";
import AdminLogin from "../screen/AdminLogin";
import CadetLogin from "../screen/CadetLogin";
import DrawerNavigation from "./DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChangePassword from "../screen/ChangePassword";
import CadetProfile from "../screen/CadetProfile";
import AchievementBanner from "../screen/AchievementBanner";
const Stack = createNativeStackNavigator();
 function StackNavigation() {
  return (
   
      <Stack.Navigator initialRouteName="welcome"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'black',
        headerStyle: { backgroundColor: 'white' },
      }}>
        <Stack.Screen name="welcome" component={WelcomeScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="banner" component={AchievementBanner} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="CadetLogin" component={CadetLogin} />
        <Stack.Screen name="Password" component={ChangePassword} />
        <Stack.Screen name="Profile" component={CadetProfile} options={{headerShown:false}} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} options={{headerShown:false}}/>
        
        
      </Stack.Navigator>
    
  );
}
export default StackNavigation;
