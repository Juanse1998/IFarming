import React from "react";
import { View, Button, FlatList, Text } from "react-native-web";
import { removeForm } from "../../redux/actions/action";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native'; 


const FormList = ({ forms, removeForm }) => {
  const navigation = useNavigation();

  const handleSeeForm = (item) => {
    navigation.navigate('SeeFormScreen', { form: item });
  };

  return (
    <View>
      <FlatList
          data={Object.values(forms)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <h3> {item.name} </h3>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Ver" onPress={() => handleSeeForm(item)} />
              <Button title="Editar" onPress={() => removeForm(item.id)} />
              <Button title="Eliminar" onPress={() => handleEditForm(item)} />
            </View>
          </View>
          )}
        />
    </View>
  )
}

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  removeForm
};

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
