import React from "react";
import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ListItemDeleteAction = ({ onPress }) => {
  return (
    <View
      style={{
        backgroundColor: "skyblue",
        width: 100,
        height: "100%",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name="trash-can"
        size={50}
        color="red"
        onPress={onPress}
      />
    </View>
  );
};

export default ListItemDeleteAction;
