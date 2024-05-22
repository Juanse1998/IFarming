import React, { useState } from "react";
import { connect } from "react-redux";
import { addField, addForm } from "../../redux/actions/action";
import { View, Button, TextInput, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import Modal from 'react-native-modal';

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
        <View style={styles.buttonContainer}>
          <Button title="Agregar Formulario" onPress={handleAddForm} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Ver Formularios" onPress={handleSeeForms} />
        </View>
        <Modal style={styles.modal} isVisible={isModalVisible} onBackdropPress={showModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¡Formulario creado con éxito!</Text>
            <Button title="Cerrar" onPress={showModal} />
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: Platform.OS === 'web' ? 300 : '80%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  modal: {
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333333',
  },
});

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  addForm,
  addField
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
