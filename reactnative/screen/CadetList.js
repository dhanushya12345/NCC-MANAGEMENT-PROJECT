import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet,Text ,Image,FlatList,TouchableOpacity} from 'react-native';
import Card from '../component/Card';
import AppButton from '../component/AppButton';
import { LinearGradient } from 'expo-linear-gradient';
function CadetList({navigation}) {
    const [images, setimages] = useState([
        {cadetname:'dhanushya',regimentno:'01'},
        {cadetname:'vicky', regimentno:'02'},
        {cadetname:'krithi', regimentno:'03'},
        {cadetname:'vijay',regimentno:'04'},
        {cadetname:'anu',regimentno:'05'},
        {cadetname:'kowsi',regimentno:'06'},
        {cadetname:'elax',regimentno:'11'},
        {cadetname:'abi',regimentno:'12'},
        {cadetname:'aji',regimentno:'13'},
        {cadetname:'priya',regimentno:'14'},
        {cadetname:'ishu',regimentno:'15'},
        {cadetname:'uma', regimentno:'16'},
        {cadetname:'karthi', regimentno:'17'},
        {cadetname:'arun',regimentno:'18'},
        {cadetname:'ammu',regimentno:'19'},
        {cadetname:'pavi',regimentno:'20'},
        {cadetname:'dhanushya',regimentno:'12'},
        {cadetname:'dhanushya',regimentno:'12'},
        {cadetname:'dhanushya',regimentno:'12'},
        {cadetname:'dhanushya',regimentno:'12'}
      ]);
     
  return (
      <>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(102, 204, 153)', 'transparent']}
        style={{flex:1, width:'100%', justifyContent: "center",
                     alignItems: "center", paddingTop:"10%"}}
      >
     <Text style={{fontSize:20, paddingTop:"10%"}}>CADET LIST</Text>
      
    <FlatList
    
    data={images}
    key={"2"}
    numColumns={2}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        
        <>
        
        <TouchableOpacity style={{flexDirection:'column',marginLeft:10,width: 150,
          height: 60,
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: "white",
          padding:10,
          borderColor: "black",
          marginTop: StatusBar.currentHeight || 16,}} onPress={()=>navigation.navigate('Details')}>
    
       <Text style={{marginLeft:10}}>{item.cadetname}</Text>
       <Text style={{marginLeft:10}}>{item.regimentno}</Text>
      </TouchableOpacity>
      </>
    )}
  />
    <AppButton str="BACK" color="#2c8759"  style={{marginLeft:15,marginBottom:20}} onPress={()=>navigation.navigate('Admin')}  />
    </LinearGradient>        
  </>
  );
}


export default CadetList;


