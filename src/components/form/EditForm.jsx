import React from "react";
import { View, Button, FlatList, Text } from "react-native-web";
import { removeForm } from "../../redux/actions/action";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native'; 


const EditForm = ({ forms, updateForm }) => {
  const navigation = useNavigation();

  const handleEditForm = () => {
    navigation.navigate('FormEditScreen');
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
  )
}

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  removeForm
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
