import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const textInput = ({ icon, onChangeText, ...otherProps }) => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.sectionStyle}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          style={styles.imageStyle}
        />
        <TextInput onChangeText={onChangeText} {...otherProps} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    width: "100%",
  },

  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dbdbdb",
    borderWidth: 0.5,
    borderRadius: 15,
    marginVertical: 7,
    width: 300,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
});

export default textInput;
