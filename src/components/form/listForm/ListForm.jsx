import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { removeForm } from "../../../redux/actions/action";
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  noFormsText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
    marginTop: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginLeft: 10,
    backgroundColor: '#037DAA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  removeForm
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
