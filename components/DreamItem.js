import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DreamItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View>
        <Text style={styles.itemList}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemList: {
    borderColor: "#1c313a",
    margin: 10,
    padding: 10,
    borderWidth: 2,
  },
});

export default DreamItem;
