import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import DreamInput from "./components/DreamInput";
import DreamItem from "./components/DreamItem";

export default function App() {
  const [dreams, setDreams] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  console.log(dreams);

  const dreamSubmit = (dreamTitle) => {
    if (dreamTitle.length === 0) {
      return;
    }
    setDreams((currentDreams) => [
      ...currentDreams,
      { id: Math.random().toString(), value: dreamTitle },
    ]);
    setModalOpen(false);
  };

  const deleteDream = (dreamId) => {
    setDreams((currentDreams) => {
      return currentDreams.filter((dream) => dream.id !== dreamId);
    });
    console.log("Dream Deleted: " + dreamId);
  };

  const cancelHandleSubmit = () => {
    setModalOpen(false);
    console.log("Modal Closed");
  }


  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Make your dream come true!</Text>
      <Button title="Add New Dream" onPress={() => setModalOpen(true, console.log("Modal Opened"))} />
      <DreamInput
        visible={modalOpen}
        onDreamInput={dreamSubmit}
        onCancel={cancelHandleSubmit}
      />
      <Text style={styles.textStyle}>Dream List:</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={dreams}
        renderItem={(dreamItem) => (
          <DreamItem
            id={dreamItem.item.id}
            onDelete={deleteDream}
            //onDelete={() => deleteDream(dreamItem.item.id)} //this is the same as above using arrow function
            title={dreamItem.item.value}
          />
        )}
      />

      {/*<ScrollView>
        {dreams.map((dream) => <View key={dream} style={styles.itemList}><Text>{dream}</Text></View>)}
      </ScrollView>*/}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  textStyle: {
    padding: 10,
    fontSize: 18,
  }
});
