import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Title from "@/components/Title";
import Form from "@/components/Form";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#292929" />
      
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdfdff"
  },
});