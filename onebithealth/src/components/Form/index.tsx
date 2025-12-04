import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Pressable, 
  Keyboard 
} from "react-native";

import ResultImc from "@/components/Form/ResultImc";
import Button from "@/components/Button"; 

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [messageImc, setMessageImc] = useState("");
  const [imc, setImc] = useState<number | null>(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    const totalImc = (parseFloat(weightFormat) / (parseFloat(heightFormat) * parseFloat(heightFormat))).toFixed(2);
    setImc(parseFloat(totalImc));
    return totalImc;
  }

  function validationImc() {
    if (weight !== "" && height !== "") {
      imcCalculator();
      setHeight("");
      setWeight("");
      setMessageImc("Seu IMC é igual a:");
      setTextButton("Calcular Novamente");
      Keyboard.dismiss();
    } else {
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e altura");
    }
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
        
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          placeholderTextColor="#8D8D99"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.36"
          placeholderTextColor="#8D8D99"
          keyboardType="numeric"
        />

        <View style={styles.buttonCalculator}>
            <Button title={textButton} onPress={() => validationImc()} />
        </View>

      </View>

      <ResultImc messageResultImc={messageImc} ResultImc={imc} />
      
    </Pressable>
  );
}

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#ffffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 30
  },
  form: {
    width: "100%",
    height: "auto",
    padding: 10
  },
  formLabel: {
    color: "#3d3d3dff",
    fontSize: 18,
    paddingLeft: 20
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f7f7f7ff",
    color: "#222222ff",
    height: 50,
    margin: 12,
    paddingLeft: 20
  },
  buttonCalculator: {
    paddingTop: 14,
    marginLeft: 12,
    marginRight: 12,
  }
});