import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {

  const [name, setName] = useState("");

  function handleNext() {
    router.navigate("/dashboard");
  }

  function onChangeText(text: string) {
    setName(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {name}!</Text>

      <Input onChangeText={setName} />
      <Button title="Continuar" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    color: "#33556bff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
