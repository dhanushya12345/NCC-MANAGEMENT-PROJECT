import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import {MaterialCommunityIcons} from "@expo/vector-icons";

function ListingsButton({onPress}) {
  return (
      <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <MaterialCommunityIcons color='skyblue' size={40 } name="plus-circle" />
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:'red',
      height:70,
      width:70,
      borderRadius:35,
      alignItems:'center',
      justifyContent:'center',
      bottom:20,
      borderColor:'white',
      borderWidth:10
  }
});

export default ListingsButton;