import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectComponent = ({ selectedValue, setSelectedValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de dato:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Seleccionar" value={null} />
          <Picker.Item label="Texto" value="text" />
          <Picker.Item label="Número" value="number" />
          <Picker.Item label="Contraseña" value="password" />
          <Picker.Item label="Email" value="email" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pickerContainer: {
    flex: 1,
    height: 30,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  picker: {
    color: '#333',
  },
});

export default SelectComponent;
