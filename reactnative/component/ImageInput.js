

import React from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity,Alert } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker';



const ImageInput = ({image,onchangeImage}) => {


    function handlePress(){
        console.log('working')
        if(!image){
 console.log('work')
        selectImage()
        }
        else{
            Alert.alert('Alert','Are you sure want to delete',[
                {text:'yes',onPress:()=>onchangeImage(false)},
                {text:'No',onPress:()=>console.log('image not deleted')}
            ])  
        }
    }


    
    const selectImage = async()=>{
         console.log('log')
        try {
          const result = await  ImagePicker.launchImageLibraryAsync();
          console.log(result);


         if(!result.cancelled) 
         onchangeImage(result.uri)
        } catch (error) {
          
        }
        }
console.log("result",image.uri);

    return (
        <TouchableOpacity onPress={handlePress}>
        <View style={styles.continer}>
         
        {!image &&  <MaterialCommunityIcons name="camera" size={40} /> }
         {image &&  <Image  source={{uri:image}} style={{height:1000,width:100,flex:1}} /> }
         {/* <MaterialCommunityIcons name="camera" size={40} /> 
          <Image  source={{uri:image}} style={{height:500,width:500,borderRadius:25}} />   */}
          {/* <Image  source={{uri:image}} /> */}
        
         </View>
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    continer:{
        height:110,
        width:110,
        alignItems:"center", 
        justifyContent:"center",
        // backgroundColor:"pink",
        marginLeft:10,
        marginVertical:10,
        borderRadius:25
        
    },
    images: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
      },
})


export default ImageInput

// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// export default class ImageInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       resourcePath: {},
//     };
//   }
//   selectFile = () => {
//     var options = {
//       title: 'Select Image',
//       customButtons: [
//         { 
//           name: 'customOptionKey', 
//           title: 'Choose file from Custom Option' 
//         },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.showImagePicker(options, res => {
//       console.log('Response = ', res);
//       if (res.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (res.error) {
//         console.log('ImagePicker Error: ', res.error);
//       } else if (res.customButton) {
//         console.log('User tapped custom button: ', res.customButton);
//         alert(res.customButton);
//       } else {
//         let source = res;
//         this.setState({
//           resourcePath: source,
//         });
//       }
//     });
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Image
//             source={{
//               uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
//             }}
//             style={{ width: 100, height: 100 }}
//           />
//           <Image
//             source={{ uri: this.state.resourcePath.uri }}
//             style={{ width: 200, height: 200 }}
//           />
//           <Text style={{ alignItems: 'center' }}>
//             {this.state.resourcePath.uri}
//           </Text>
//           <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
//               <Text style={styles.buttonText}>Select File</Text>
//           </TouchableOpacity>       
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff'
//   },
//   button: {
//     width: 250,
//     height: 60,
//     backgroundColor: '#3740ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 4,
//     marginBottom:12    
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 15,
//     color: '#fff'
//   }
// });