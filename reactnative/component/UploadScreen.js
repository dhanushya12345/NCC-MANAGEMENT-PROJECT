import React from 'react';
import { View, StyleSheet,Text, Modal } from 'react-native';
import Progress from 'react-native-progress/Bar';
import LottieView from 'lottie-react-native';
function UploadScreen({progress=0,visible=false,onDone}) {
  return (
      <Modal visible={visible}>
    <View style={styles.container}>
    { progress<1  
        ?(<Progress  width={100} color='skyblue' progress={progress}  ></Progress>)
:(<LottieView onAnimationFinish={onDone}
loop={false}
autoPlay
autoSize
source={require('../assets/animation/Done.json')}
> 
 </LottieView>)
} 
        {/* <Text>{progress*100}%</Text> */}
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',

  }
});

export default UploadScreen;