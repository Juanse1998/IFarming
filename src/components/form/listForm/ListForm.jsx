import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";
import { removeForm } from "../../../redux/actions/action";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";

const ListForm = ({ forms, removeForm }) => {
  const navigation = useNavigation();

  const navigateSeeForm = (item) => {
    navigation.navigate('SeeFormScreen', { form: item });
  };

  const navigateEditForm = (item) => {
    navigation.navigate('EditFormScreen', { form: item });
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
                  <TouchableOpacity style={styles.buttonWrapper} onPress={() => removeForm(item.id)}>
                    <Text style={styles.buttonText}>Eliminar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
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
