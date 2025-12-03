import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ResultImc from "@/components/Form/ResultImc"; 

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState<number | null>(null);

  function validationImc() {
    if (weight !== "" && height !== "") {
      const formattedHeight = parseFloat(height.replace(',', '.')); // faz com que 1,80 vire 1.80
      const formattedWeight = parseFloat(weight.replace(',', '.'));
      
      // Cálculo simples do IMC
      const imcCalculator = formattedWeight / (formattedHeight * formattedHeight);
      
      setImc(parseFloat(imcCalculator.toFixed(2)));
      setMessageImc("Seu IMC é igual a:");
      setHeight("");
      setWeight("");
    } else {
      setImc(null);
      setMessageImc("Preencha o peso e altura");
    }
  }

  return (
    <View>
      <View>
        <Text>Altura:</Text>
        <TextInput
          placeholder="Ex.: 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />

        <Text>Peso:</Text>
        <TextInput
          placeholder="Ex.: 75"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />

        <Button 
            title="Calcular IMC" 
            onPress={() => validationImc()}
        />
      </View>
      <ResultImc 
        messageResultImc={messageImc} 
        ResultImc={imc} 
      />
    </View>
  );
}