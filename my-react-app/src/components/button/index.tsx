import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
}

export function Button({ title, ...rest }: Props){
    //...rest está pegando o resto das propriedades que vieram do TouchableOpacityProps seem serem explicitadas.
    return (
        <TouchableOpacity activeOpacity={0.2} style={styles.button} {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}