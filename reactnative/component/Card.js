import React from "react";
import { StyleSheet, Text, View, Image,TouchableWithoutFeedback,TouchableOpacity} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";


export default function Card({ title, subtitle, image,onPress }) {
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  return (
    <TouchableWithoutFeedback  onPress={onPress}>
    <View style={[styles.container]}>
      <View style={[styles.box1, { marginTop: landscape ? "1%" : "5%" }]}>
        <View
          style={[
            styles.box2,
            { borderRadius: 15, backgroundColor: "white", marginTop: "5%" },
          ]}
        >
          <Image
            style={[
              styles.image,
              {
                marginTop: landscape ? "1%" : "0%",
                height: landscape ? 200 : 150,
              },
            ]}
            source={image}
          ></Image>
          <Text style={styles.text}>{title}</Text>
          
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },

  box1: {
    // flex: 0.5,

    backgroundColor: "#f8f4f4",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  box2: {
    width: 125,
    height: 150,
    
  },

  text: {
    marginLeft: "10%",
  },

  image: {
    width: "100%",
    flexWrap: "wrap",
    alignContent: "stretch",
    alignItems: "center",
    alignSelf: "center",
  },
});

/* import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import color from "../app/color";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function Card({ title, subtitle }) {
  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View
          style={[
            styles.container2,
            { borderRadius: 10, backgroundColor: "white", marginTop: "20%" },
          ]}
        >
          <Image
            style={[
              styles.image,
              {
                marginTop: landscape ? "1%" : "0%",
                height: landscape ? 270 : 250,
                borderRadius: 10,
              },
            ]}
            source={require("../assets/jacket.jpg")}
          ></Image>
          <Text style={styles.text}>{title}</Text>
          <Text style={[styles.text, { color: color.secondary }]}>
            {subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },

  container1: {
    flex: 0.5,
    backgroundColor: "#f8f4f4",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  container2: {
    width: "90%",
    height: "75%",
  },

  text: {
    padding: 5,
    marginLeft: "10%",
  },

  image: {
    width: "100%",
    flexWrap: "wrap",
    alignContent: "stretch",
    alignItems: "center",
    alignSelf: "center",
  },
}); */
