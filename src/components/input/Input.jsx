import React from "react";
import { View, Text, Input } from "react-native-web";

const InputEdit = ({name, placeholder, typeInput}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Input type={typeInput} placeholder={placeholder} />
    </View>
  )
}

export default InputEdit;