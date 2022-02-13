import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Keyboard, KeyboardAvoidingView } from "react-native-web";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const handleCompleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <Text style={styles.tasksTiles}>Today's Tasks:</Text>

        <View style={styles.itemsContainer}>
          {/* TODOS LISt*/}
          {taskItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCompleteTask(index)}
            >
              <Task key={index} text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View>
        {/* WRITE A TASK*/}
        <KeyboardAvoidingView
          behavior={Platform.Os === "ios" ? "padding" : "height"}
          style={styles.writeTasksContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Write a task"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity
            style={styles.addContainer}
            onPress={() => handleAddTask()}
          >
            <View style={styles.addButton}>
              {" "}
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34aee8",
  },

  tasksContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  tasksTiles: {
    color: "#fcfcfd",
    fontSize: 24,
    fontWeight: "bold",
  },

  itemsContainer: {
    marginTop: 40,
  },

  writeTasksContainer: {
    position: "absolute",
    top: 400,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  addContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fcfcfd",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#abb6ba",
    borderWidth: 1,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    maxWidth: 250,
    backgroundColor: "#fcfcfd",
    borderRadius: 50,
    borderColor: "#abb6ba",
    borderWidth: 1,
  },

  addText: {},

  addButton: {},
});
