import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextInputs from '../component/TextInput';
import AppButton from '../component/AppButton';
import {Formik } from 'formik';
import * as yup from 'yup';
import ErrorScreen from '../component/ErrorScreen';
import jwtDecode from 'jwt-decode'
import { LinearGradient } from 'expo-linear-gradient';

let validationSchema  = yup.object().shape({
    usertype:yup.string().required().label('usertype'),
    email : yup.string().required().email().label('Email'),
    password : yup.string().required().min(4).label('Password')
  });

const AdminLogin=({navigation})=> {
  // const [email, setemail] = useState('');
  // const [password, setpassword] = useState('');

  function auth(values) {
    if (
      values.usertype === 'admin' &&
      values.email === "dhanushya@gmail.com" &&
      values.password === "dhanu"
    ) 
      // if(values.ok){
       
      //     const user=jwtDecode(values.data) 
      //      console.log(user)
      //       navigation.navigate('Drawer')
      //   }
    
    {
      alert(`${values.email}  Your LogedIn`);
      console.log(values.email);
      console.log(values.password);
       navigation.navigate('Drawer')
    } 
    // else {
    //   alert("Not valid Email or Password");
    // }
  }

  

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
 <Text style={{fontSize:15, }}>ADMIN LOGIN </Text>
  <Formik 
  initialValues={{usertype:'',email:'',password:''}}
    //  onSubmit={(details)=>console.log(details)}
      onSubmit={(values) => auth(values)}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors,touched,setFieldTouched})=>(
      <>
                 <TextInputs
                  icon ='account' placeholder='USERTYPE'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('usertype')}
                    onBlur={() => setFieldTouched("usertype")}
                    />

              {touched.usertype && <ErrorScreen error={errors.usertype}></ErrorScreen>}
                <TextInputs
                icon ='email' placeholder='EMAIL' keyboardType="email-address" 
                // onChangeText={(text)=>setemail(text)}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched("email")}
                />
                 {/* {touched.email && <AppText>{errors.email}</AppText>}  */}
                 {touched.email && <ErrorScreen error={errors.email}></ErrorScreen>} 
                {/* <AppText >{errors.email}</AppText> */}
                <TextInputs
                  icon ='lock' placeholder='PASSWORD'keyboardType="default" secureTextEntry={true}
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched("password")}
                    />

              {touched.password && <ErrorScreen error={errors.password}></ErrorScreen>} 
                
                <AppButton str="LOGIN" color="#2c8759"
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




export default AdminLogin;