import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";
import { removeForm } from "../../../redux/actions/action";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import Modal from 'react-native-modal';


const ListForm = ({ forms, removeForm }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [formIdToRemove, setFormIdToRemove] = useState(null);

  const showModal = (formId) => {
    setFormIdToRemove(formId);
    setModalVisible(true);
  };

  const closeModal = () => {
    setFormIdToRemove(null);
    setModalVisible(false);
  };

  const navigateSeeForm = (item) => {
    navigation.navigate('SeeFormScreen', { form: item });
  };

  const navigateEditForm = (item) => {
    navigation.navigate('EditFormScreen', { form: item });
  };
  
  const handleRemoveForm = () => {
    removeForm(formIdToRemove);
    closeModal();
  };

  const formArray = Object.values(forms);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de formularios:</Text>
      <View style={{ flex: 1 }}>
        {formArray.length === 0 ? (
          <Text style={styles.noFormsText}>No hay formularios creados</Text>
        ) : (
          <FlatList
            data={formArray}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigateSeeForm(item)}>
                    <Text style={styles.buttonText}>Ver</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigateEditForm(item)}>
                    <Text style={styles.buttonText}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonWrapper} onPress={() => showModal(item.id)}>
                    <Text style={styles.buttonText}>Eliminar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
      <Modal style={styles.modal} isVisible={modalVisible} onBackdropPress={closeModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Seguro desea eliminar este formulario?</Text>
            <View style={styles.containerButtonModal}>
              <TouchableOpacity style={styles.modalButton} onPress={handleRemoveForm}>
                <Text style={styles.modalButtonText}>Eliminar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    </View>
  );
}

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  removeForm
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
