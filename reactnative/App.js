import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen'
import AdminLogin from './screen/AdminLogin';
import CadetLogin from './screen/CadetLogin';
import CadetProfile from './screen/CadetProfile';
import CadetRegisterForm from './screen/CadetRegisterForm';
import HomeScreen from './screen/HomeScreen';
import AdminProfile from './screen/AdminProfile';
import UpdateScreen from './screen/UpdateScreen';
import CadetDetails from './screen/CadetDetails';
import ChangePassword from './screen/ChangePassword';
import ImagePickers from './component/ImagePickers';
import StackNavigation from './navigation/stackNavigation'
import {  NavigationContainer } from '@react-navigation/native';
import CadetList from './screen/CadetList';
import ImageInput from './component/ImageInput';
import ImageInputList from './component/ImageInputList'
import GridLayout from './component/GridLayout'
import AchievementBanner from './screen/AchievementBanner';

export default function App() {
 
  return (
    <View style={styles.container}>
      {/* <ImageInput></ImageInput> */}
      {/* <ImagePickers></ImagePickers> */}
      {/* <CadetList></CadetList> */}
      {/* <HomeScreen></HomeScreen> */}
      <AchievementBanner></AchievementBanner>
    </View>
   
   
    // <NavigationContainer>
     
    //   <StackNavigation></StackNavigation>
     
    // </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


