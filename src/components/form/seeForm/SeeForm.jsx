import React from "react";
import { View, Text, TextInput } from "react-native"; // Cambio de "Input" a "TextInput"
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";

const SeeForm = ({ route }) => {
  const { form } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{form.name}</Text>
      {form.fields.map((element, index) => (
        <View key={index} style={styles.fieldContainer}>
          <Text style={styles.label}>{element.fieldName}</Text>
          {element.inputType === "options" ? (
            <View>
              <Picker
                selectedValue={element.selectedOption}
                style={styles.picker}
                enabled={true}
              >
                {element.options.map((option, optionIndex) => (
                  <Picker.Item
                    key={optionIndex}
                    label={option}
                    value={option}
                  />
                ))}
              </Picker>
            </View>
          ) : (
            <TextInput
              placeholder={element.placeholder}
              keyboardType={element.inputType}
              style={[styles.input, { minHeight: 30, borderColor: 'black', borderWidth: 1 }]} // Aplicar estilos directamente aquí
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default SeeForm;
