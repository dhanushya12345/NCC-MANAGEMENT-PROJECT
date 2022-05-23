import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import Listingitems from "./ListingItems";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../component/appText";
const DATA = [
  {
    id: 1,
    title: "oil",
  },
  {
    id: 2,
    title: "saree",
  },
  {
    id: 3,
    title: "Tablets",
  },
];
const AppPicker = ({ icon, title, ...otherProps }) => {
  const [modal, setmodal] = useState(false);
  const [messages, setMessage] = useState(DATA);
  const [Category, setCategory] = useState("Category");
  const handleClick = (item) => {
    setCategory(item.title);
    console.log("you have pressed the " + item.title);
  };
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setmodal(true)}>
        <View style={styles.container}>
          {icon ? (
            <MaterialCommunityIcons
              name={icon}
              color="black"
              size={25}
              style={styles.imageStyle}
            ></MaterialCommunityIcons>
          ) : null}
          <AppText>{Category}</AppText>
          <MaterialCommunityIcons
            style={{ marginLeft: 180 }}
            name="chevron-down"
            color="black"
            size={25}
          ></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modal} animationType="slide">
        <Button title="close" onPress={() => setmodal(false)}></Button>
        <FlatList
          data={messages}
          keyExtractor={(DATA) => DATA.id.toString()}
          renderItem={({ item }) => (
            <Listingitems
              title={item.title}
              onPress={() => handleClick(item)}
            ></Listingitems>
          )}
        />
      </Modal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dbdbdb",
    borderWidth: 0.5,
    height: 40,
    borderRadius: 25,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
});
export default AppPicker;
