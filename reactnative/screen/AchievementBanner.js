import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet,Text ,Image,FlatList,TouchableOpacity} from 'react-native';
import Card from '../component/Card';
import AppButton from '../component/AppButton';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
function AchievementBanner({navigation}) {
    const [images, setimages] = useState([
        require('../assets/ncc-camp.webp'),
        require('../assets/ncclogo.png'),
        require('../assets/ncclogo.png'),
        require('../assets/ncc-camp.webp'),
       
      ]);
     
  return (
      <>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(102, 204, 153)', 'transparent']}
        style={{flex:1, width:'100%', justifyContent: "center",
                     alignItems: "center", paddingTop:"10%"}}
      >
     <Text style={{fontSize:20, paddingTop:"10%"}}>AchievementBanners</Text>
     <ScrollView>
     <Image
          style={{ width: 320, height: 200, marginBottom: 15 ,marginLeft:20}}
          source={require("../assets/ncc-camp.webp")}
        />


    <FlatList
    
    data={images}
    key={"2"}
    numColumns={2}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        
        
        
        
    <Image
        source={item}
        style={{
          width: 160,
          height: 200,
          borderWidth: 2,
          borderColor: "#c35547",
          resizeMode: "contain",
          margin: 6,
        }}
       
     />
    )}
  />
  
   </ScrollView>
    </LinearGradient>        
  </>
  );
}


export default AchievementBanner;


