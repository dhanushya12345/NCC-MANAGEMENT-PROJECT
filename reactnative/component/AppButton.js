import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { TouchableOpacity } from "react-native";
const AppButton = ({ onPress, color, str,style }) => {
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  // const { landscape } = useDeviceOrientation();

  return (
    <TouchableOpacity
      style={[styles.Button,style, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{str}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  Button: {
    borderRadius: 20,
    width: 310,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
     marginLeft: 1,
  },
  text: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",

  },
});
