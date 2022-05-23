import React,{useEffect, useState} from 'react';
import { TextInput,Button,Text} from 'react-native';
import Screen from "../component/Screen";


import {Formik} from "formik";
import * as Yup from "yup";

import ImageInputList from "../component/ImageInputList";

 

const validationSchema = Yup.object().shape({
   
    
    images:Yup.array().required().min(1,"Required"),
   
});
const ImagePickers = () => {
  
   
    return (
    <Screen>
       
        <Formik
        initialValues={{images:[]}}
        onSubmit={(values)=>console.log("image pick",values)}
        
        validationSchema={validationSchema} 
        >
        
            
            {({handleChange,handleSubmit,errors,setFieldValue,values, setFieldTouched})=>(
                <>
                    <ImageInputList
                    
                         imageuri={values['images']} 
                         onAddImage={(uri)=>setFieldValue('images',[...values['images'],uri])}
                        // (item)=>setFieldValue("category",item)
                        // onRemoveImage={(uri)=>setFieldValue('images',values['images'].filter(imageuri=>imageuri !== uri)) }
                       
                       />

                                     </>
            )}
        </Formik>
    </Screen>                    
    );
}

export default ImagePickers;

// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
// import * as ImagePicker from 'react-native-image-picker';
// export default class ImagePickers extends React.Component {
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
//     ImagePicker.launchImageLibrary(options, res => {
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

