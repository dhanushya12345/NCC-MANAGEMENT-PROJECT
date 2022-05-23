
import React from 'react';
import {  StyleSheet ,Image,View,Text, TouchableWithoutFeedback} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import Icon from './Icon';

const Listingitems = ({title,subtitle,image, IconComponent,onPress,color,name,size,myPress}) => {
    const {landscape} = useDeviceOrientation()
   
    return (
         <TouchableWithoutFeedback onPress={myPress}>
        <View style={styles.container}>
            <View style={{marginLeft:'1%'}}>{IconComponent}</View>
            <View>
     <Image  style={styles.image} source={image}/>
     </View>
     <View style={ styles.textcontainer}>
     <Text  onPress={onPress} style={[styles.text,{fontWeight:'bold',fontSize:19}]}>{title}</Text>  
     <Text style={[styles.text,{color:'grey'}]}>{subtitle}</Text> 
     </View>
         </View>
         </TouchableWithoutFeedback> 

    );
}


const styles = StyleSheet.create({
    container: 
    {
        
        backgroundColor:'white',
        width:'100%',
        height:'40%', 
        flexDirection:'row',
        marginTop:'1%',
        //justifyContent:'center',
        //marginLeft:'5%',
        borderColor:'black',
        marginLeft:'-18%'
        
               },

      image:{
        
          width:250,
          height:100,
          borderRadius:50
           },
            textcontainer:{
                marginTop:"10%",
                height:40,
                marginLeft:'-18%'
               
            }

})

export default Listingitems;



