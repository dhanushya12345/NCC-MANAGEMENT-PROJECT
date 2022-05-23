import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextInputs from '../component/TextInput';
import AppButton from '../component/AppButton';
import {Formik } from 'formik';
import * as yup from 'yup';
import ErrorScreen from '../component/ErrorScreen';
import userapi from '../api/user'
import authapi from '../api/auth';
import { LinearGradient } from 'expo-linear-gradient';
import ImageInput from '../component/ImageInput'
let validationSchema  = yup.object().shape({
  usertype:yup.string().required().label('usertype'),
  name:yup.string().required().label('name'),
  fathername:yup.string().required().label('fathername'),
  mothername:yup.string().required().label('mothername'),
  batch:yup.number().required().label('batch'),
  address:yup.string().required().label('address'),
  dob:yup.string().required().label('dob'),
  bg:yup.string().required().label('bg'),
  dateOfEnroll:yup.string().required().label('dateofenrollment'),
  EnrollingOfficer:yup.string().required().label('enrollmentofficer'),
  vegOrNonveg:yup.string().required().label('veg or nonveg'),
  adharNo:yup.number().required().label('adharno'),
  rank:yup.number().required().label('rank'),
  incharge:yup.string().required().label('incharge'),
  bankName:yup.string().required().label('bankname'),
  holdername:yup.string().required().label('holder name'),
  branch:yup.string().required().label('branch'),
  accNo:yup.number().required().label('acno'),
  ifscCode:yup.number().required().label('ifsccode'),
  panNo:yup.number().required().label('panno'),
  regimentNo  :yup.number().required().label('Regiment no'),
  mobileNo:yup.number().required().label('mobile no'),
    email : yup.string().required().email().label('Email'),
    password : yup.string().required().min(4).label('Password'),
   
  });
  
  async  function handleSubmit(userInfo){
    const[error,setError]=useState();
    // console.log(userInfo)
    const result=await userapi.Register(userInfo)
    // console.log(result);
    if(!result.ok){
      console.log(result);
      if(result.data){
        setError(result.data.error)
      }
      else{
        // console.log('success')
        setError("an unexpected error occured");
        console.log(result)
      }
      setTimeout(()=>{
        setError('')
      },3000 );
      return;
      }
    
    

  }



const CadetRegisterForm=({icon})=> {

  return(
    <View style={styles.container}>
 <LinearGradient
        // Background Linear Gradient
        colors={['rgb(102, 204, 153)', 'transparent']}
        style={{flex:1, flex:1, width:'100%', justifyContent: "center",
                     alignItems: "center"}}
      >
 {/* <Image  style={{height:100, width:100,marginLeft:110,marginTop:50}} source={require('../assets/ncclogo.png')}></Image>
  */}
 <Text style={{fontSize:20,marginLeft:14,marginTop:60}}>CADET ENROLLMENT DETAILS </Text> 
  <Formik 
  initialValues={{usertype:'',regimentNo:'',email:'',password:'',branch:'',rank:'',batch:'',
name:'',fathername:'',mothername:'',address:'',dob:'',bg:'',adharNo:'',dateOfEnroll:'',
EnrollingOfficer:'',vegOrNonveg:'',holdername:'',incharge:'',bankName:'',accNo:'',ifscCode:'',
panNo:'',mobileNo:''

}}
 onSubmit={handleSubmit}
      // onSubmit={(details)=>console.log(details)}
      // onSubmit={(values) => auth(values)}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors,touched,setFieldTouched})=>(
      <>
      <ScrollView>
      <ImageInput></ImageInput>
      <TextInputs
                   placeholder='Usertype'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('usertype')}
                    onBlur={() => setFieldTouched("usertype")}
                    />

              {touched.usertype && <ErrorScreen error={errors.usertype}></ErrorScreen>}
       <TextInputs
                   placeholder='Batch'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('batch')}
                    onBlur={() => setFieldTouched("batch")}
                    />
{touched.batch && <ErrorScreen error={errors.batch}></ErrorScreen>}
            
              <TextInputs
                   placeholder='Date of enrollment'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('dateOfEnroll')}
                    onBlur={() => setFieldTouched("dateOfEnroll")}
                    />

{touched.dateOfEnroll && <ErrorScreen error={errors.dateOfEnroll}></ErrorScreen>}

              <TextInputs
                   placeholder='Enrollment officer'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('EnrollingOfficer')}
                    onBlur={() => setFieldTouched("EnrollingOfficer")}
                    />

              {touched.EnrollingOfficer && <ErrorScreen error={errors.EnrollingOfficer}></ErrorScreen>}

              <Text style={{fontSize:15,marginLeft:80}}>PERSONAL DETAILS </Text> 

              <TextInputs
                  
                   placeholder='Rank'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('rank')}
                    onBlur={() => setFieldTouched("rank")}
                    />

{touched.rank && <ErrorScreen error={errors.rank}></ErrorScreen>}

              <TextInputs
                  
                   placeholder='Name'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('name')}
                    onBlur={() => setFieldTouched("name")}
                    />

              {touched.name && <ErrorScreen error={errors.name}></ErrorScreen>}

              <TextInputs
                   placeholder='Fathername'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('fathername')}
                    onBlur={() => setFieldTouched("fathername")}
                    />

              {touched.fathername && <ErrorScreen error={errors.fathername}></ErrorScreen>}
              <TextInputs
                   placeholder='Mothername'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('mothername')}
                    onBlur={() => setFieldTouched("mothername")}
                    />

{touched.mothername && <ErrorScreen error={errors.mothername}></ErrorScreen>}


        <TextInputs
                 
                  placeholder='REGIMENT NO'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('regimentNo')}
                    onBlur={() => setFieldTouched("regimentNo")}
                    />

              {touched.regimentNo && <ErrorScreen error={errors.regimentNo}></ErrorScreen>} 
                 
              <TextInputs
                 
                 placeholder='Mobile  No'keyboardType="default" 
                   // onChangeText={(text)=>setpassword(text)}
                   onChangeText={handleChange('mobileNo')}
                   onBlur={() => setFieldTouched("mobileNo")}
                   />

             {touched.mobileNo && <ErrorScreen error={errors.mobileNo}></ErrorScreen>} 
                


              <TextInputs
                  placeholder='DOB'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('dob')}
                    onBlur={() => setFieldTouched("dob")}
                    />

{touched.dob && <ErrorScreen error={errors.dob}></ErrorScreen>}

              <TextInputs
                  placeholder='Address'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('address')}
                    onBlur={() => setFieldTouched("address")}
                    />

{touched.address && <ErrorScreen error={errors.address}></ErrorScreen>}          

              <TextInputs
                  placeholder='Bloodgroup'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('bg')}
                    onBlur={() => setFieldTouched("bg")}
                    />

{touched.bg && <ErrorScreen error={errors.bg}></ErrorScreen>} 

              <TextInputs
                 
                  placeholder='veg or non-veg'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('vegOrNonveg')}
                    onBlur={() => setFieldTouched("vegOrNonveg")}
                    />

{touched.vegOrNonveg && <ErrorScreen error={errors.vegOrNonveg}></ErrorScreen>}    

              <TextInputs
                  placeholder='Incharge name'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('incharge')}
                    onBlur={() => setFieldTouched("incharge")}
                    />

{touched.incharge && <ErrorScreen error={errors.incharge}></ErrorScreen>}    

              <TextInputs
                  placeholder='Adhar No'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('adharNo')}
                    onBlur={() => setFieldTouched("adharNo")}
                    />

{touched.adharNo && <ErrorScreen error={errors.adharNo}></ErrorScreen>}     

                <TextInputs
                placeholder='EMAIL' keyboardType="email-address" 
                // onChangeText={(text)=>setemail(text)}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched("email")}
                />
                 {/* {touched.email && <AppText>{errors.email}</AppText>}  */}
                 {touched.email && <ErrorScreen error={errors.email}></ErrorScreen>} 
                {/* <AppText >{errors.email}</AppText> */}
                <TextInputs
                   placeholder='PASSWORD'keyboardType="default" secureTextEntry={true}
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched("password")}
                    />

              {touched.password && <ErrorScreen error={errors.password}></ErrorScreen>} 
              <Text style={{fontSize:15,marginLeft:100}}>BANK DETAILS </Text>
              <TextInputs
                  placeholder='Bankname'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('bankName')}
                    onBlur={() => setFieldTouched("bankName")}
                    />

{touched.bankName && <ErrorScreen error={errors.bankName}></ErrorScreen>}

              <TextInputs
                  placeholder='Holdername'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('holdername')}
                    onBlur={() => setFieldTouched("holdername")}
                    />
{touched.holdername && <ErrorScreen error={errors.holdername}></ErrorScreen>}
             
              <TextInputs
                  placeholder='A/C No'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('accNo')}
                    onBlur={() => setFieldTouched("accNo")}
                    />

              {touched.accNo && <ErrorScreen error={errors.accNo}></ErrorScreen>}

              <TextInputs
                  placeholder='Branch'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('branch')}
                    onBlur={() => setFieldTouched("branch")}
                    />

              {touched.branch && <ErrorScreen error={errors.branch}></ErrorScreen>}
              <TextInputs
                   placeholder='IFSC Code'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('ifscCode')}
                    onBlur={() => setFieldTouched("ifscCode")}
                    />

              {touched.ifscCode && <ErrorScreen error={errors.ifscCode}></ErrorScreen>}
              <TextInputs
                   placeholder='Pan No'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('panNo')}
                    onBlur={() => setFieldTouched("panNo")}
                    />

              {touched.panNo && <ErrorScreen error={errors.panNo}></ErrorScreen>}
              </ScrollView>    
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

const styles = StyleSheet.create({
  container: {
   
    flex:1,width:'100%',height:'10%',
    alignContent:'center',justifyContent:'center',
   
  },
  
});


export default CadetRegisterForm;