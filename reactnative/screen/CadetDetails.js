import React from 'react';
import {View,StyleSheet ,FlatList,ScrollView,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingItems from '../component/ListingItems';
import Icon from '../component/Icon';
import Listingitems from '../component/ListingItems';
import AppButton from '../component/AppButton';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import { LinearGradient } from 'expo-linear-gradient';

const CadetDetails = ({navigation}) => {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
   
    return (
        <View  style={styles.container}>
            <LinearGradient
        // Background Linear Gradient
        colors={['rgb(102, 204, 153)', 'transparent']}
        style={{flex:1, flex:1, width:'100%', justifyContent: "center",
                     alignItems: "center"}}
      >
            <Text style={[styles.text,{fontSize:20,marginTop:'15%',}]}>CADET DETAILS</Text>
     <ScrollView>
    
     <View style={styles.container1}>
<ListingItems title='dhanushya' subtitle='dhanushya@gmail.com' image={require('../assets/splash.png')} />
 </View>
 <View  style={styles.container2}>
 <Text style={[styles.text,{fontSize:15,marginTop:'3%',marginLeft:100}]}>PERSONAL DETAILS</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>Batch:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>dateofenrollment:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>enrollingofficer</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>regimentno</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>rank:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>incharge:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>address:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>fathername:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>mothername:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>dob:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>phoneno:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>bg:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>vegornonveg:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>adharno:</Text>
 </View>
 <View style={styles.container2}>
 <Text style={[styles.text,{fontSize:15,marginTop:'3%',marginLeft:100}]}>BANK DETAILS</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>holdername:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>a/cno:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>bankname:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>branch:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>ifsccode:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>panno:</Text>
 </View>
 <View style={styles.container2}>
 <Text style={[styles.text,{fontSize:15,marginTop:'3%',marginLeft:100}]}>CAMP DETAILS</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>State Level:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>National Level:</Text>
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>Others:</Text>
 </View>
 
 <Text style={[styles.text,{fontSize:14,marginTop:'3%'}]}>date of passingout:</Text>
 <View style={styles.container3}>

 </View>
 
 </ScrollView>
 
 
 <View >
             
             <AppButton str="BACK" color="#2c8759"  style={{marginLeft:25}} onPress={()=>navigation.navigate('List')}  />
            
             </View>
 
             </LinearGradient>
 </View>

    );
}

export default CadetDetails;

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        height:'100%', 
       
    },
    
    container1: {
       
        backgroundColor:'white',
        width:350,
        height:'10%', 
        marginTop:'15%', 
    },

    container2:{
      width:'100%',
     // height:'44%',
      marginTop:'5%' ,
      backgroundColor:'white',
      padding:20 
    },
    
    container3:{
        width:'100%',
        height:'90%',
        marginTop:'15%'  
      },
      
      
    
})
