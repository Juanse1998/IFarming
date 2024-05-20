import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addForm } from "../../redux/actions/action";
import { View, Button, TextInput } from "react-native-web";
import { useNavigation } from '@react-navigation/native'; 


const CreateForm = ({ forms, addForm }) => {
  const [formName, setFormName] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Forms updated:', forms);
  }, [forms]);

  const handleAddForm = () => {
    const formId = new Date().getTime().toString();
    addForm(formId, formName);
    setFormName('');
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
      <Button title="Agregar Formulario" onPress={handleAddForm} />
      <Button title="Ver Formularios" onPress={handleSeeForms} /> 
    </View>
  )
}

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  addForm
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);