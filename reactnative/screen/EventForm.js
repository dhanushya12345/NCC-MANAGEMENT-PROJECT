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
   nameoftheevent:yup.string().required().label('Name of the event'),
  date:yup.date().required().label('Date'),
     time : yup.string().required().email().label('Time'),
     venue : yup.string().required().email().label('Venue'),
    chiefguestname : yup.string().required().min(4).label('Chief guest name')
  });

const EventForm=({navigation})=> {
 

  
  

  return(
    <View style={{ 
      flex:1,width:'100%',height:'10%',alignContent:'center',justifyContent:'center'}}>
    <LinearGradient
        // Background Linear Gradient
        colors={['rgb(102, 204, 153)', 'transparent']}
        style={{flex:1, flex:1, width:'100%', justifyContent: "center",
                     alignItems: "center"}}
      >
 <Text style={{fontSize:15}}>EVENT FORM </Text> 
  <Formik 
  initialValues={{nameoftheevent,chiefguestname,date,time,venue}}
  onSubmit={()=>alert("successfully submited")}
      // onSubmit={(values) => auth(values)}
    //   onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors,touched,setFieldTouched})=>(
      <>
      
            
        <TextInputs
                   placeholder='Name of the event'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('nameoftheevent')}
                    onBlur={() => setFieldTouched("nameoftheevent")}
                    />

              {touched.nameoftheevent && <ErrorScreen error={errors.nameoftheevent}></ErrorScreen>} 
                 
              <TextInputs
                   placeholder='Date'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('date')}
                    onBlur={() => setFieldTouched("date")}
                    />

              {touched.date && <ErrorScreen error={errors.date}></ErrorScreen>} 
                 
              <TextInputs
                  placeholder='Time'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('time')}
                    onBlur={() => setFieldTouched("time")}
                    />

              {touched.time && <ErrorScreen error={errors.time}></ErrorScreen>} 
                 
              <TextInputs
                  
                   placeholder='Chief Guest'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('chiefguest')}
                    onBlur={() => setFieldTouched("chiefguest")}
                    />

              {touched.chiefguestname && <ErrorScreen error={errors.chiefguestname}></ErrorScreen>} 
                 
              
                
                <TextInputs
                   placeholder='Venue'keyboardType="default" secureTextEntry={true}
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('venue')}
                    onBlur={() => setFieldTouched("venue")}
                    />

              {touched.venue && <ErrorScreen error={errors.venue}></ErrorScreen>} 
              
              
                 
                   
                <AppButton str="LOGIN" color="#2c8759"
                  // myPress={()=>console.log(email,password)} 
                   onPress={handleSubmit}
                //   onPress={()=>navigation.navigate('Profile')}
                   />
      </>
    )} 
   </Formik>
   </LinearGradient>
  </View>
  

  )
}



export default EventForm;