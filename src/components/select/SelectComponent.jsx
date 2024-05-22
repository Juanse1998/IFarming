import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

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
          style={[styles.picker, Platform.OS === 'ios' && styles.pickerIOS]}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          enabled={editable}
        >
          <Picker.Item label="Seleccionar" value={''} />
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

export default SelectComponent;
