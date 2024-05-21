import React, { useState } from "react";
import { View, Button, FlatList } from "react-native-web";
import { removeForm } from "../../redux/actions/action";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

const ListForm = ({ forms, removeForm }) => {
  const navigation = useNavigation();

  const navigateSeeForm = (item) => {
    navigation.navigate('SeeFormScreen', { form: item });
  };

  const navigateEditForm = (item) => {
    navigation.navigate('EditFormScreen', { form: item });
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
              <Button title="Ver" onPress={() => navigateSeeForm(item)} />
              <Button title="Eliminar" onPress={() => removeForm(item.id)} />
              <Button title="Editar" onPress={() => navigateEditForm(item)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
