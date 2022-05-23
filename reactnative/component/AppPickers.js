import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Text,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "./PickerItem";
import AppText from "./AppText";
const numColumns = 3;
const AppPickers = ({ items, selectedItem, onSelectItem, placeholder }) => {
  const [ModalVisible, setModelVisible] = React.useState(false); //state
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={styles.continer}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="apps"
            size={25}
          ></MaterialCommunityIcons>
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            style={styles.icon}
            name="chevron-down"
            size={25}
          ></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={ModalVisible}>
        <Button title="close" onPress={() => setModelVisible(false)}></Button>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              name={item.icon}
              label={item.label}
              backgroundColor={item.backgroundColor}
              onPress={() => {
                setModelVisible(false);
                onSelectItem(item);
              }}
            ></PickerItem>
          )}
          numColumns={numColumns}
        ></FlatList>
      </Modal>
    </React.Fragment>
  );
};

export default AppPickers;
const styles = StyleSheet.create({
  continer: {
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    borderWidth: 0.5,
    backgroundColor: "#dbdbdb",
    padding: 16,
    marginVertical: 5,
  },
  icon: {
    paddingRight: 20,
  },
  text: {
    flex: 1,
  },
});
