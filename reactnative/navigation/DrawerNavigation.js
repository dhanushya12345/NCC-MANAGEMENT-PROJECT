import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CadetRegisterForm from '../screen/CadetRegisterForm';
import UpdateScreen from '../screen/UpdateScreen';
import EventForm from '../screen/EventForm';
import stack from './stack'
const Drawer = createDrawerNavigator();
function DrawerNavigation(props) {
  return (
    <Drawer.Navigator initialRouteName= "AdminProfile" drawerStyle={{ backgroundColor: '#2c8759' }}>
    <Drawer.Screen name="register" component={CadetRegisterForm} />
    <Drawer.Screen name="AdminProfile" component={stack}/>
    <Drawer.Screen name="update" component={UpdateScreen} />
    <Drawer.Screen name="event" component={EventForm} />
</Drawer.Navigator>
  );
}



export default DrawerNavigation;