import React from "react";
import { View, Text, TextInput } from "react-native-web";

const Input = ({ name, placeholder, typeInput }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text>{name}</Text>
      <TextInput type={typeInput} placeholder={placeholder} style={{ borderWidth: 1, padding: 5, borderColor: '#ccc' }} />
    </View>
  );
};

export default Input;
