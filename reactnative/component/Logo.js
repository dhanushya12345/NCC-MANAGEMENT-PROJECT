import React from "react";
import { View, StyleSheet, Image } from "react-native";
const logo = ({ source }) => {
  return (
    <Image style={styles.logo} resizeMode="contain" source={source}></Image>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: "25%",
    alignSelf: "center",
    marginBottom: "5%",
  },
});
export default logo;
