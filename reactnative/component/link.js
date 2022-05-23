import React from 'react'
import {Button}from 'react-native'
import { NavigationContainer,useNavigation } from "@react-navigation/native";
const link=()=>{
    const navigation=useNavigation();
    return(
      <Button title="clickmee" onPress={()=>navigation.navigate()}></Button>
    )
  }
 export default link;  