import React from "react";
import { TouchableHighlight, View } from "react-native";

const Listitemseperator = () => {
  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="#DDDDDD"
      onPress={() => alert("Pressed!")}
    >
      <View
        style={{
          height: 4,
          width: "100%",
          backgroundColor: "#008ca8",
          marginTop: 40,
        }}
      ></View>
    </TouchableHighlight>
  );
};

export default Listitemseperator;
