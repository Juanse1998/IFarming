import React, { useState } from "react";
import { connect } from "react-redux";
import { addField, addForm } from "../../redux/actions/action";
import { View, Button, TextInput, Text } from "react-native-web";
import { useNavigation } from '@react-navigation/native'; 
import Modal from 'react-native-modal';

const CreateForm = ({ addForm, addField }) => {
  const [formName, setFormName] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  const showModal = () => {
    setModalVisible(!isModalVisible);
  }
  
  const handleAddForm = () => {
    if (!formName) {
      setError("¡El nombre del formulario no puede estar vacío!");
      return;
    }
    setError(null);
    const formId = new Date().getTime().toString();
    addForm(formId, formName);
    addField(formId, null, null, null);
    setFormName('');
    showModal();
  };

  const handleSeeForms = () => {
    navigation.navigate('FormListScreen');
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={formName}
        onChangeText={setFormName}
        placeholder="Nombre del Formulario"
        style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
      />
       {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Agregar Formulario" onPress={handleAddForm} />
      <Button title="Ver Formularios" onPress={handleSeeForms} />
      <Modal isVisible={isModalVisible} onBackdropPress={showModal}>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text>¡Formulario creado con exito!</Text>
          <Button title="Cerrar" onPress={showModal} />
        </View>
      </Modal>
    </View>
  )
}

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  addForm,
  addField
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);