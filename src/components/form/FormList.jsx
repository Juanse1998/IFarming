import React from "react";
import { View, Button, FlatList, TextInput } from "react-native-web";
import { connect } from "react-redux";
import { addForm, removeForm } from "../../redux/actions/action";
import Form from "./Form";

const FormList = ({ forms, addForm, removeForm }) => {
  const [formName, setFormName] = React.useState('');

  const handleAddForm = () => {
    const formId = new Date().getTime().toString();
    addForm(formId, formName);
    setFormName('');
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
      <FlatList
        data={Object.values(forms)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Form formId={item.id} name={item.name} />
            <Button title="Eliminar Formulario" onPress={() => removeForm(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  addForm,
  removeForm
};

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
