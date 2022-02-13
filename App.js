import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <Text style={styles.tasksTiles}>Today's Tasks:</Text>

        <View style={styles.itemsContainer}>
          {/* TODOS LISt*/}
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
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
});
