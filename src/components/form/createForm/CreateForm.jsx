import React, { useState } from "react";
import { connect } from "react-redux";
import { addField, addForm } from "../../../redux/actions/action";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import Modal from 'react-native-modal';
import { styles } from "./styles";

const CreateForm = ({ addForm, addField }) => {
  const [formName, setFormName] = useState('');
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
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>CREA TU FORMULARIO</Text>
        <Text style={styles.label}>Ingrese el nombre del formulario:</Text>
        <TextInput
          value={formName}
          onChangeText={setFormName}
          placeholder="Ej: formulario 1"
          style={styles.input}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity style={styles.buttonContainer} onPress={handleAddForm}>
          <Text style={styles.buttonText}>Agregar Formulario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSeeForms}>
          <Text style={styles.buttonText}>Ver Formularios</Text>
        </TouchableOpacity>
        <Modal style={styles.modal} isVisible={isModalVisible} onBackdropPress={showModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¡Formulario creado con éxito!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={showModal}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  addForm,
  addField
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
