import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal, Text } from "react-native";

const DreamInput = (props) => {
  const [inputDream, setInputDream] = useState("");

  const handleDream = (dreamText) => {
    setInputDream(dreamText);
    //console.log("Input Received");
  };

  const handleSubmit = () => {
    props.onDreamInput(inputDream);
    console.log("Dream Submitted: " + inputDream);
    setInputDream("");
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.insideContainer}>
        <Text style={{fontSize: 18}}>What is you dream ???</Text>
        <TextInput
          onChangeText={handleDream}
          placeholder="Your Dream"
          style={styles.inputText}
          value={inputDream}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title="Submit"
              color="blue"
              //onPress={() => props.onDreamInput(inputDream)}  // onDreamInput is a prop that we passed from App.js
              onPress={handleSubmit} //this is the same as above
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  insideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  buttonStyle: {
    width: "45%",
  },
});

export default DreamInput;
