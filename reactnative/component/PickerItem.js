import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";
const numColumns = 3;
const WIDTH = Dimensions.get("window").width;
const PickerItem = ({ onPress, label, name, backgroundColor }) => {
  return (
    <TouchableOpacity style={styles.continer} onPress={onPress}>
      <Icon name={name} backgroundColor={backgroundColor} size={25} />
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  continer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
    height: WIDTH / numColumns,
  },
  text: {
    textAlign: "center",
  },
});

export default PickerItem;
