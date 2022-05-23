import React,{ useState} from 'react';
import { View, StyleSheet ,FlatList,Image,Text} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import ListingItems from '../component/ListingItems';
import AppButton from '../component/AppButton';
import { LinearGradient } from 'expo-linear-gradient';
function AdminProfile({navigation}) {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
  
  
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(102, 204, 153)', 'transparent']}
        style={{flex:1, flex:1, width:'100%', justifyContent: "center",
                     alignItems: "center"}}
      >
        <Image  style={[styles.weblogo,{marginTop:landscape?'5%':'5%'}]} source={require('../assets/ncclogo.png')}></Image>
        <Text style={{fontSize:15,}}>NATIONAL CADET CORPS</Text>
        {/* <Text style={{fontSize:15,marginLeft:125}}>ADMIN PROFILE</Text> */}
        <View style={styles.container1}>
<ListingItems title='dhanushya' subtitle='dhanushya@gmail.com' image={require('../assets/splash.png')} />

 </View>
 <View style={styles.container2}>
 <Text> GO TO CADET DETAILS SCREEN</Text>

 <AppButton str=" DETAILS" color="#2c8759"  style={{marginLeft:15,width:200 }} onPress={()=>navigation.navigate('List')}   />
 </View>
             
             <AppButton str="LOGOUT" color="#2c8759"  style={{marginLeft:15, marginTop:'20%',}}  />
            
             </LinearGradient>    
    </View>
   
  );

    }
const styles = StyleSheet.create({
  container: {flex:1,width:'100%',},
  weblogo:{
    paddingTop:"10%",
    alignItems:'center',
    justifyContent:'space-between',
    width: 80,
    height: 80,
    borderRadius: 20,
  
  },
  container1: {
       
    backgroundColor:'white',
    width:'100%',
    height:'15%', 
    marginTop:'1%',
   
},
container2: {
   
  backgroundColor:'white',
  width:'70%',
  height:'25%', 
  marginTop:'20%',

alignItems:'center',
justifyContent:'center',
borderRadius: 20,
},
});

export default AdminProfile;