import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { Card } from "react-native-shadow-cards";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

const Listingitems = () => {
  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={{ padding: 5 }}>
          <Image
            style={styles.image}
            source={require("../assets/jacket.jpg")}
          />
        </View>

        <View style={styles.textcontainer}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            MoshHaimdani
          </Text>
          <Text style={styles.text}>5 Listings</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "50%",
    flexDirection: "row",
    marginTop: "20%",
    marginLeft: "5%",
    borderColor: "black",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  card: {
    flexDirection: "row",
    height: 110,
  },

  text: {
    marginLeft: 20,
  },

  textcontainer: {
    marginTop: "10%",
  },
});

export default Listingitems;
