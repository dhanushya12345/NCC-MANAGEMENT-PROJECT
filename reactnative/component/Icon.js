import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, size, backgroundColor, color = "white" }) => {
  return (
    <View
      style={{
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "35%",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        backgroundColor={backgroundColor}
        color={color}
        size={size}
      ></MaterialCommunityIcons>
    </View>
  );
};

export default Icon;
