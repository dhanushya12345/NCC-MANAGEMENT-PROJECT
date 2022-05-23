import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextInputs from '../component/TextInput';
import AppButton from '../component/AppButton';
import {Formik } from 'formik';
import * as yup from 'yup';
import ErrorScreen from '../component/ErrorScreen';
import authapi from '../api/auth'
import jwtDecode from 'jwt-decode'
import { LinearGradient } from 'expo-linear-gradient';

let validationSchema  = yup.object().shape({
  // usertype:yup.string().required().label('usertype'),
  regimentno:yup.number().required().label('Regiment no'),
    // email : yup.string().required().email().label('Email'),
    password : yup.string().required().min(4).label('Password')
  });

const CadetLogin=({navigation})=> {
  // const [email, setemail] = useState('');
  // const [password, setpassword] = useState('');

  const handleSubmit=async({regimentno,password})=>{ 
    
    const result =await authapi.Login(regimentno,password)
          if(!result.ok){
            console.log(result.problem) 
            }
         else {
          const user=jwtDecode(result.data) 
              console.log(user)
           
            //  console.log(result.data)
           
             }
    
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
 <Text style={{fontSize:15}}>CADET LOGIN </Text> 
  <Formik 
  initialValues={{regimentno:'',password:''}}
    //  onSubmit={(details)=>console.log(details)}
      // onSubmit={(values) => auth(values)}
      onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors,touched,setFieldTouched})=>(
      <>
      
            
        <TextInputs
                  icon ='pen' placeholder='REGIMENT NO'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('regimentno')}
                    onBlur={() => setFieldTouched("regimentno")}
                    />

              {touched.regimentno && <ErrorScreen error={errors.regimentno}></ErrorScreen>} 
                 
              
                 {/* {touched.email && <AppText>{errors.email}</AppText>}  */}
               
                {/* <AppText >{errors.email}</AppText> */}
                <TextInputs
                  icon ='lock' placeholder='PASSWORD'keyboardType="default" secureTextEntry={true}
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched("password")}
                    />

              {touched.password && <ErrorScreen error={errors.password}></ErrorScreen>} 
              
              <AppButton str="Change password" color="#FF7272"
                 onPress={()=>navigation.navigate('Password')}
                 
                   />
                <AppButton str="LOGIN" color="#2c8759"
                  // myPress={()=>console.log(email,password)} 
                  // onPress={handleSubmit}
                  onPress={()=>navigation.navigate('Profile')}
                   />
      </>
    )} 
   </Formik>
   </LinearGradient>
  </View>
  

  )
}



export default CadetLogin;