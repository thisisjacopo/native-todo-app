import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fefcf6",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#54aee8",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10,
  },
  text: {
    maxWidth: "75%",
  },
  circle: {
    width: 15,
    height: 15,
    borderColor: "#4af6b7",
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default Task;
