import { LinearGradient } from 'expo-linear-gradient';
import React,{useState} from "react";
import { ImageBackground, StyleSheet, Text, View,Image,Modal,Pressable } from "react-native";
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import AppButton from '../component/AppButton';
// import PropTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';

// WelcomeScreen.propTypes={
// navigation:PropTypes.string
// }
export default function WelcomeScreen({navigation}) {
      console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    // const navigation = useNavigation(); 
  return (
    <View style={{flex:1, width:'100%',justifyContent: "center",
    alignItems: "center"}}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(102, 204, 153)', 'transparent']}
        style={{flex:1, flex:1, width:'100%', justifyContent: "center",
                     alignItems: "center"}}
      >
         <Image  style={[styles.weblogo1,{marginTop:landscape?'5%':'20%'}]} source={require('../assets/rvscas1.png')}></Image>
            
                 <View style={{alignItems:'center',justifyContent:'center',marginTop:30,}}>
                <Text style={{fontSize:15,}}>RATHNAVEL SUBRAMANIAM COLLEGE OF </Text>
                 <Text style={{fontSize:15,}}> ARTS AND SCIENCE</Text>
                 <Text style={{fontSize:5,}}>(AUTONOMOUS)</Text>
                 <Text style={{fontSize:10,}}>SULUR COIMBATORE</Text>
                <Text style={{fontSize:20,}}>NATIONAL CADET CORPS</Text>
                 <Text style={{fontSize:10,}}>(1/4 TN BN NCC ,COIMBATORE)</Text>
                 </View>
                  <View style={{flex:1,}}>
                         <Image  style={[styles.weblogo,{marginTop:landscape?'5%':'20%'}]} source={require('../assets/l.png')}></Image>
                        
                      
                           <View style={{marginTop:landscape?'20%':'30%',height:'90%'}}>
                         
                       <AppButton str="GET STARTED" color="#2c8759"  style={{marginLeft:15}}
                           onPress={()=>navigation.navigate("Home")}  />
                         
                           </View>
                            {/* <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ borderRadius: 20,
                      width: 140,
                      height: 60,
                      padding: 15,
                      elevation: 2,}}>
        <Text >Sign in with Facebook</Text>
      </LinearGradient> */}
            
            
                     </View> 
      </LinearGradient>

     
    </View>
  );
}


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
     
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 18,
      // lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      // backgroundColor: "#000000c0"
    },
       weblogo:{
              paddingTop:"10%",
              alignItems:'center',
              justifyContent:'space-between',
              width: 125,
              height: 130,
              borderRadius: 20,
             marginLeft:'30%'
            },
            button1: {
              borderRadius: 20,
              width: 140,
              height: 60,
              padding: 15,
              elevation: 2,
             
            },
            weblogo1:{
              paddingTop:"10%",
              alignItems:'center',
              justifyContent:'space-between',
              width: 70,
              height: 70,
            
             marginLeft:'3%'
            },
            button1: {
              borderRadius: 20,
              width: 140,
              height: 60,
              padding: 15,
              elevation: 2,
              backgroundColor: "#FFD93D",
            },
            centeredView: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22,
             
            },
            modalView: {
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 25,
              alignItems: 'center',
              
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              width: 330,
              height: 200,
              flexDirection:'row',
             
            },
  });
  