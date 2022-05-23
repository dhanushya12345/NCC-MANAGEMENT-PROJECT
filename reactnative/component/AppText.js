import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const appText = ({ children, text, style }) => {
  return (
    <Text style={[styles.text, style]}>
      {children}
      {text}
    </Text>
  );
};

export default appText;
const styles = StyleSheet.create({
  text: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
