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
    <View style={styles.containerCard}>
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
      <Modal style={{alignItems: 'center'}} isVisible={isModalVisible} onBackdropPress={showModal}>
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
    backgroundColor: Platform.OS === 'web' ? '#fff' : '#1E40AF', 
    width: '100%',
    padding: 20,
  },
  containerCard: {
    alignItems: 'center',
    backgroundColor: Platform.OS === 'web' ? '#fff' : '#1E40AF', 
    width: Platform.OS === 'web' ? '300px' : '60%',
    padding: 20,
    border: '1px solid black',
    boxShadow: '5px 5px'
  },
  title: {
    fontSize: 20,
    marginBottom: 50
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    color: Platform.OS === 'web' ? '#000' : '#fff', 
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    width: Platform.OS === 'web' ? '200px' : '60%', 
    borderRadius: 5,
    marginBottom: 10,
    border: '1px solid black'
  },
  error: {
    color: 'red',
    marginBottom: 10,
    width: Platform.OS === 'web' ? '200px' : '60%',
  },
  buttonContainer: {
    width: Platform.OS === 'web' ? '200px' : '60%',
    marginBottom: 10,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: Platform.OS === 'web' ? '280px' : '60%', 
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
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
