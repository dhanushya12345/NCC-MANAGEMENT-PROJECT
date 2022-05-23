import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AdminProfile from "../screen/AdminProfile";
import CadetList from '../screen/CadetList'
import CadetDetails from "../screen/CadetDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
 function StackNavigation() {
  return (
   
      <Stack.Navigator initialRouteName="Admin"  screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'black',
        headerStyle: { backgroundColor: 'white' },
      }}>
        <Stack.Screen name="Admin" component={AdminProfile}  options={{headerShown:false}}/>
        <Stack.Screen name="List" component={CadetList}options={{headerShown:false}} />
        <Stack.Screen name="Details" component={CadetDetails}options={{headerShown:false}} />
         
        
        
      </Stack.Navigator>
    

  );
}
export default StackNavigation;
