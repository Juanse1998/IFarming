import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectComponent = ({ selectedValue, setSelectedValue, options, addOption, editable }) => {
  const [newOption, setNewOption] = useState('');

  const handleAddOption = () => {
    if (newOption.trim() !== '') {
      addOption(newOption);
      setNewOption('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de dato:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={[styles.picker, Platform.OS === 'ios' && styles.pickerIOS]} // Agregar estilo específico para iOS
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          enabled={editable}
        >
          <Picker.Item label="Seleccionar" value={null} />
          <Picker.Item label="Texto" value="text" />
          <Picker.Item label="Número" value="number" />
          <Picker.Item label="Contraseña" value="password" />
          <Picker.Item label="Email" value="email" />
          <Picker.Item label="Opción" value="options" />
        </Picker>
      </View>
      {selectedValue === 'options' && (
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Agregar opción:</Text>
          <TextInput
            value={newOption}
            onChangeText={setNewOption}
            style={styles.input}
            placeholder="Nueva opción"
            editable={editable}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddOption}>
            <Text style={styles.addButtonText}>Agregar</Text>
          </TouchableOpacity>
          <View style={styles.optionsList}>
            {options.map((option, index) => (
              <Text key={index} style={styles.optionItem}>{option}</Text>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  pickerContainer: {
    height: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
  picker: {
    height: 30,
    width: '100%',
    color: '#333',
  },
  pickerIOS: {
    position: 'absolute', // Posición absoluta para que aparezca en la parte superior
    top: 0, // Colocarlo en la parte superior
    left: 0, // Alinearlo a la izquierda
    right: 0, // Alinearlo a la derecha
    bottom: 0, // Alinearlo en la parte inferior
    backgroundColor: 'transparent', // Hacerlo transparente
  },
  optionsContainer: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 30,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#037DAA',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  optionsList: {
    marginTop: 10,
  },
  optionItem: {
    padding: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default SelectComponent;
