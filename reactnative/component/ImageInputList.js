

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';
import { ScrollView } from 'react-native';
function ImageInputList({images=[],onRemoveImage,onAddImage}) {
  console.log("image",images);
  return (
    <ScrollView  horizontal>
      
    <View style={styles.container}>
     
    <ImageInput onchangeImage={(uri)=>onAddImage(uri)} ></ImageInput>
   
    {images.map((uri)=>(<ImageInput  key={uri} onchangeImage={(uri)=>onRemoveImage(uri)} image={uri}></ImageInput>))}
    
    
    
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row'
  }
});

export default ImageInputList;