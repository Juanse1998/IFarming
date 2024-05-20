import React, { useState } from "react";
import { View, Text, TextInput } from "react-native-web";
import { connect } from "react-redux";
import { Input, Button } from 'react-native-elements';
import SelectComponent from "../select/SelectComponent";
import { addField, removeField, updateField } from "../../redux/actions/action";

const Form = ({ formId, name, addField, fields, removeField, updateField }) => {
  const [inputName, setInputName] = useState('');
  const [inputPlaceholder, setInputPlaceholder] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleAddField = () => {
    addField(formId, inputName, inputPlaceholder, selectedValue);
    setInputName('');
    setInputPlaceholder('');
    setSelectedValue('');
  };

  const handleUpdateField = (index) => {
    updateField(formId, index, inputName, inputPlaceholder, selectedValue);
    setInputName('');
    setInputPlaceholder('');
    setSelectedValue('');
  };

  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', marginVertical: 10 }}>
      <Text>{name}</Text>
      {fields.map((element, index) => (
        <View key={index} style={{ marginVertical: 10 }}>
          <Text>Nombre del campo: {element.fieldName}</Text>
          <TextInput
            onChangeText={text => setInputName(text)}
            value={inputName}
            placeholder="Ej: Nombre"
            style={{ borderWidth: 1, padding: 5 }}
          />
          <Text>Placeholder: {element.placeholder}</Text>
          <TextInput
            onChangeText={text => setInputPlaceholder(text)}
            value={inputPlaceholder}
            placeholder="Ej: Juan"
            style={{ borderWidth: 1, padding: 5 }}
          />
          <Text>Tipo de campo: {element.inputType}</Text>
          <Text>Seleccione el tipo de campo:</Text>
          <SelectComponent selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
          <Button title="Actualizar campo" onPress={() => handleUpdateField(index)} />
        </View>
      ))}
      <Button title={'Agregar campo'} onPress={handleAddField} />
      <Button title={'Eliminar último campo'} onPress={() => removeField(formId)} />
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  fields: state.form.forms[ownProps.formId].fields
});

const mapDispatchToProps = {
  addField,
  removeField,
  updateField
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
