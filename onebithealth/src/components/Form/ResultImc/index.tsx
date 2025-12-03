import react from "react";
import { View, Text} from "react-native";

interface ResultImcProps {
  ResultImc: any;
  messageResultImc: string;
}

// Aplicamos a interface aqui
export default function ResultImc(props: ResultImcProps) {
  return (
    <View>
      <Text>{props.messageResultImc}</Text>
      <Text>{props.ResultImc}</Text>
    </View>
  );
}