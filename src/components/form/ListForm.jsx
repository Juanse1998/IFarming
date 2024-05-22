import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { removeForm } from "../../redux/actions/action";
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
        <FlatList
          data={formArray}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                  <Button title="Ver" onPress={() => navigateSeeForm(item)} />
                </View>
                <View style={styles.buttonWrapper}>
                  <Button title="Eliminar" onPress={() => removeForm(item.id)} /> 
                </View>
                <View style={styles.buttonWrapper}>
                  <Button title="Editar" onPress={() => navigateEditForm(item)} />   
                </View>
              </View>
            </View>
          )}
        />
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
  },
  contentButton: {
    marginRight: 5
  }
});

const mapStateToProps = state => ({
  forms: state.form.forms
});

const mapDispatchToProps = {
  removeForm
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
