import React from "react";
import { View, StyleSheet,Text,Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const GridLayout = () => {
  return (
      
    <Grid style={{flex:1,padding:10}}>
        
    <Col size={2} >
        <Image style={{width:160,height:260}} source={require('../assets/icon.png')}></Image>
    </Col>
    <Col size={2} >
        <Row>
        <Image style={{width:170,height:90}} source={require('../assets/icon.png')}></Image>
        </Row>
        <Row  >
        <Image style={{width:170,height:120}} source={require('../assets/favicon.png')}></Image>
        </Row>
    </Col>
</Grid>
  );
};

export default GridLayout;
