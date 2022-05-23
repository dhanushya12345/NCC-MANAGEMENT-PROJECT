import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView,} from 'react-native';
import Constants from 'expo-constants';

export default function Screen({children, style}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={style}>{children}</View>
            {/* <Text>hiiiii</Text> */}
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
container:{
    flex: 0,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    
    width:'100%',
    padding: 8,
}



})