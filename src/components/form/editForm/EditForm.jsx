import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import SelectComponent from '../../select/SelectComponent';
import { connect } from "react-redux";
import { addField, removeField, updateField } from '../../../redux/actions/action';
import Modal from 'react-native-modal';
import { styles } from './styles';

const EditForm = ({ route, updateField, addField, removeField }) => {
  const { form } = route.params;
  const [fields, setFields] = useState(form ? [...form.fields] : []);
  const [errorFields, setErrorFields] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(!isModalVisible);
  }

  const handleAddField = () => {
    const newField = { fieldName: '', placeholder: '', inputType: '', options: [] };
    setFields([...fields, newField]);
    addField(form.id, newField.fieldName, newField.placeholder, newField.inputType, newField.options);
    setErrorFields([...errorFields, null]);
  };

  const handleUpdateField = (index) => {
    const updatedField = fields[index];
    if (!updatedField.fieldName || !updatedField.placeholder || !updatedField.inputType) {
      const newErrorFields = [...errorFields];
      newErrorFields[index] = "¡Debes completar los datos del campo!";
      setErrorFields(newErrorFields);
      return;
    }
    updateField(form.id, index, updatedField.fieldName, updatedField.placeholder, updatedField.inputType, updatedField.options);
    const newErrorFields = [...errorFields];
    newErrorFields[index] = null;
    setErrorFields(newErrorFields);
    showModal();
  };

  const handleChangeField = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index] = {
      ...updatedFields[index],
      [key]: value, 
    };
    setFields(updatedFields);
  };
  
  const handleAddOption = (index, option) => {
    const updatedFields = [...fields];
    if (!Array.isArray(updatedFields[index].options)) {
      updatedFields[index].options = [];
    }
    updatedFields[index].options.push(option);
    setFields(updatedFields);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
    removeField(form.id, index);
    const newErrorFields = [...errorFields];
    newErrorFields.splice(index, 1);
    setErrorFields(newErrorFields);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {fields.map((field, index) => (
          <View key={index} style={[styles.fieldContainer, index === fields.length - 1 && styles.newField]}>
            <View style={styles.containerInputs}>
              <Text style={styles.label}>Nombre del campo:</Text>
              <TextInput
                onChangeText={(text) => handleChangeField(index, 'fieldName', text)}
                value={field.fieldName}
                style={[styles.input, { width: '70%' }]}
              />
            </View>
            <View style={styles.containerInputs}>
              <Text style={styles.label}>Placeholder:</Text>
              <TextInput
                onChangeText={(text) => handleChangeField(index, 'placeholder', text)}
                value={field.placeholder}
                placeholder="Ej: Juan"
                style={[styles.input, { width: '70%' }]}
              />
            </View>
            <SelectComponent
              selectedValue={field.inputType}
              setSelectedValue={(value) => handleChangeField(index, 'inputType', value)}
              options={field.options || []}
              addOption={(option) => handleAddOption(index, option)}
            />
            {errorFields[index] && <Text style={styles.error}>{errorFields[index]}</Text>}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpdateField(index)}>
                <Text style={styles.buttonText}>Actualizar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleRemoveField(index)}>
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <Modal style={styles.modal} isVisible={isModalVisible} onBackdropPress={showModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¡Formulario actualizado con éxito!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={showModal}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleAddField}>
          <Text style={styles.buttonText}>Agregar campo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default connect(null, { addField, removeField, updateField })(EditForm);
