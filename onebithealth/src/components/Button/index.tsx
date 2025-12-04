import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.7} // Efeito visual de clique
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}