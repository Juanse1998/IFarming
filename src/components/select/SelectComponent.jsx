import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const SelectComponent = ({ selectedValue, setSelectedValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Seleccione el tipo de dato:</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '400px'
  },
  label: {
    fontSize: 16,
    marginRight: 10, 
  },
  picker: {
    height: 30,
    flex: 1
  },
});

export default SelectComponent;
