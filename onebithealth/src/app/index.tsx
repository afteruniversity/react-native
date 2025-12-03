import { View, StyleSheet } from "react-native";
import Title from "@/components/Title";
import Main from "@/components/Main";

export default function Index() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  title: {
    color: "#33556bff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
