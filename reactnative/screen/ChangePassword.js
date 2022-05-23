import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextInputs from '../component/TextInput';
import AppButton from '../component/AppButton';
import {Formik } from 'formik';
import * as yup from 'yup';
import ErrorScreen from '../component/ErrorScreen';
import { LinearGradient } from 'expo-linear-gradient';

let validationSchema  = yup.object().shape({
   
    password : yup.string().required().min(4).label('oldPassword'),
    newpassword : yup.string().required().min(4).label('newPassword')
  });

const ChangePassword=({icon})=> {
 

  

  return(
    <View style={{ 
    flex:1,width:'100%',height:'10%',alignContent:'center',justifyContent:'center'}}>
   <LinearGradient
        // Background Linear Gradient
        colors={['rgb(102, 204, 153)', 'transparent']}
        style={{flex:1, flex:1, width:'100%', justifyContent: "center",
                     alignItems: "center"}}
      >
 <Image  style={{height:100, width:100,}} source={require('../assets/ncclogo.png')}></Image> 
 <Text style={{fontSize:15,}}>Change Password Screen </Text>
  <Formik 
  initialValues={{oldpassword:'',newpassword:''}}
      onSubmit={(details)=>console.log(details)}
    //   onSubmit={(values) => auth(values)}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors,touched,setFieldTouched})=>(
      <>
                <TextInputs
                  icon ='lock' placeholder='Old Password'keyboardType="default" secureTextEntry={true}
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('oldpassword')}
                    onBlur={() => setFieldTouched("oldpassword")}
                    />

              {touched.oldpassword && <ErrorScreen error={errors.oldpassword}></ErrorScreen>} 
             
              <TextInputs
                  icon ='lock' placeholder='New Password'keyboardType="default" secureTextEntry={true}
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('newpassword')}
                    onBlur={() => setFieldTouched("newpassword")}
                    />

              {touched.newpassword && <ErrorScreen error={errors.newpassword}></ErrorScreen>} 
                <AppButton str="SUBMIT" color="#2c8759"
                  // myPress={()=>console.log(email,password)} 
                  onPress={handleSubmit}
                   />
      </>
    )} 
   </Formik>
   </LinearGradient>
  </View>
  

  )
}




export default ChangePassword;