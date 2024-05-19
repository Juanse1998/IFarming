import React from "react";
import { View, Text } from "react-native"
import { Input, Button } from 'react-native-elements';

const Form = ({name}) => {
  return (
    <View>
      <Text> {name} </Text>
      <View>
        <Input placeholder="Ej: Juan" />
        <Button title={'Eliminar campo'} />
      </View>
      <View>
        <Button title={'Agregar campo'} />
      </View>
    </View>
  )
}



export default Form;