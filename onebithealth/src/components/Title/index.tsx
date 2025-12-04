import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>ONEBITHEALTH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxTitle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 100
  },
  textTitle: {
    color: "#252525ff",
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
});