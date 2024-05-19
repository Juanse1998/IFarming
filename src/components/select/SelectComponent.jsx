import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const SelectComponent = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Seleccione el tipo de dato:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Texto" value="text" />
        <Picker.Item label="Número" value="number" />
        <Picker.Item label="Contraseña" value="password" />
        <Picker.Item label="Email" value="email" />
      </Picker>
      <Text style={styles.selectedText}>Seleccionado: {selectedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    marginBottom: 7,
  },
  picker: {
    height: 35,
    width: 200,
  },
  selectedText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default SelectComponent;
