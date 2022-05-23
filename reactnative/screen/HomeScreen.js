import React, { useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
Modal,
StyleSheet,
Pressable,
Alert
} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import AppButton from '../component/AppButton';
import GridLayout from '../component/GridLayout';
const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require('../assets/ncc-camp.webp'),
  image2: require('../assets/ncc-camp.webp'),
 
};

const HomeScreen = ({navigation}) => {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    
  ]);

  return (
    <View style={{ flex: 1,  alignItems: 'center', }}>
       <LinearGradient
        // Background Linear Gradient
        colors={['rgb(102, 204, 153)', 'transparent']}
        style={{flex:1, width:'100%', justifyContent: "center",
                     alignItems: "center"}}
      >
        {/* <Text style={{fontSize:20,marginTop:40}}>Home Screen</Text> */}
      <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            style={styles.image}
            resizeMode='contain'
            source={item.image}
          />
        )}
      />
    
    
    <View style={{flex:1,marginBottom:300}}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{marginRight:5}}>
            <Pressable
              style={[styles.button1,{ backgroundColor: "#2c8759"}]}
               onPress={() => {setModalVisible(!modalVisible);navigation.navigate('AdminLogin')}}
              // onPress={() => navigation.navigate('AdminLogin')}
            >
              <Text style={styles.text}>Admin</Text>
            </Pressable>
            </View>
            <View style={{marginLeft:5}}>
            <Pressable
              style={[styles.button1 ,{ backgroundColor: "#2c8759"}]}
               onPress={() => {setModalVisible(!modalVisible);navigation.navigate('CadetLogin')}}
              // onPress={() =>navigation.navigate('CadetLogin')}
            >
              <Text style={styles.text}>Cadet</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{height:'150%',backgroundColor:'white',borderRadius:20,justifyContent: "center",
        alignItems: "center",}}>
             <AppButton  str="Go to Banner"color="#2c8759" style={{marginLeft:10,width:200}} onPress={()=>navigation.navigate('banner')} ></AppButton>
             
             </View>
      
              <View style={{marginTop:landscape?'20%':'20%',height:'90%'}}>
             
              <AppButton str="SIGN UP" color="#2c8759"  style={{marginLeft:10}} onPress={() => setModalVisible(true)} />
             
              </View>
              </View>
              </LinearGradient>
  </View>
  );
};

const styles = StyleSheet.create({
    weblogo:{
        paddingTop:"10%",
        alignItems:'center',
        justifyContent:'space-between',
        width: 50,
        height: 50,
        borderRadius: 20,
       marginLeft:'1%'
      },
    button1: {
        borderRadius: 20,
        width: 140,
        height: 60,
        padding: 15,
        elevation: 2,
       
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
        width: 335,
        height: 210,
        flexDirection:'row',
       
      },
      image:{
        width: 360,
         height:197 ,
         marginTop:80,
        justifyContent: "center",
        alignItems: "center",
      }
})
 

export default HomeScreen;