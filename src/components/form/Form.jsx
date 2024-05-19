import React from "react";
import { View, Text, Select } from "react-native-web"
import { Input, Button } from 'react-native-elements';
import SelectComponent from "../select/SelectComponent";


const Form = ({name}) => {
  return (
    <View style={{flex: 1, display: 'flex'}}>
      <Text> {name} </Text>
      <View  >
        <Input placeholder="Ej: Juan" />
        <SelectComponent />
        <Button title={'Eliminar campo'} />
      </View>
      <View>
        <Button title={'Agregar campo'} />
      </View>
    </View>
  )
}



export default Form;