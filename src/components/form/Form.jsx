import React from "react";
import { View } from "react-native-web"
import { connect } from "react-redux";
import { Input, Button, Text  } from 'react-native-elements';
import SelectComponent from "../select/SelectComponent";
import { addField, removeField } from "../../redux/actions/action";

const Form = ({ name, fields, addField, removeField }) => {


  const handleAddField = () => {
    addField();
  };

  const handleRemoveField = () => {
    removeField();
  };

  return (
    <View style={{ flex: 1, display: 'flex' }}>
      <Text> {name} </Text>
      <View>
        <Text h4={true} > Ingrese el nombre del campo:</Text>
        <Input placeholder="Ej: Juan" />
        <SelectComponent />
        <Button title={'Eliminar campo'} onPress={handleRemoveField} />
      </View>
      <View>
        <Button title={'Agregar campo'} onPress={handleAddField} />
      </View>
    </View>
  )
}

const mapStateToProps = state => ({
  fields: state.fields
});

const mapDispatchToProps = {
  addField,
  removeField
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
