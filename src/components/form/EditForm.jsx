import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SelectComponent from '../select/SelectComponent';
import { connect } from "react-redux";
import { addField, removeField, updateField } from '../../redux/actions/action';

const EditForm = ({ route, updateField, addField, removeField }) => {
  const [errorFields, setErrorFields] = useState(null);
  
  const { form } = route.params;
  const [fields, setFields] = useState(form ? [...form.fields] : []);

  const handleAddField = () => {
    const newField = { fieldName: '', placeholder: '', inputType: '' };
    setFields([...fields, newField]);
    addField(form.id, newField.fieldName, newField.placeholder, newField.inputType);
  };

  const handleUpdateField = (index) => {
    const updatedField = fields[index];
    if (!updatedField.fieldName || updatedField.placeholder || updatedField.inputType) {
      setErrorFields("¡Debe completar los datos del campo!");
      return;
    }
    updateField(form.id, index, updatedField.fieldName, updatedField.placeholder, updatedField.inputType);
    setErrorFields(null);
  };

  const handleChangeField = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', marginVertical: 10 }}>
      {fields.map((field, index) => (
        <View key={index} style={{ marginVertical: 10 }}>
          <Text>Nombre del campo:</Text>
          <TextInput
            onChangeText={(text) => handleChangeField(index, 'fieldName', text)}
            value={field.fieldName}
            style={{ borderWidth: 1, padding: 5 }}
          />
          <Text>Placeholder:</Text>
          <TextInput
            onChangeText={(text) => handleChangeField(index, 'placeholder', text)}
            value={field.placeholder}
            placeholder="Ej: Juan"
            style={{ borderWidth: 1, padding: 5 }}
          />
          <SelectComponent
            selectedValue={field.inputType}
            setSelectedValue={(value) => handleChangeField(index, 'inputType', value)}
          />
          <Button title={'Eliminar campo'} onPress={() => removeField(form.id, index)} />
          <Button title="Actualizar campo" onPress={() => handleUpdateField(index)} />
          {errorFields && <Text style={{ color: 'red' }}>{errorFields}</Text>}
        </View>
      ))}
      <Button title={'Agregar campo'} onPress={handleAddField} />
    </View>
  );
};

const mapDispatchToProps = {
  updateField,
  addField,
  removeField
};

export default connect(null, mapDispatchToProps)(EditForm);
