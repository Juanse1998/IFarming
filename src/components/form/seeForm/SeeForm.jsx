import React from "react";
import { View, Text, Input } from "react-native";
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
            <Input
              placeholder={element.placeholder}
              keyboardType={element.inputType}
              inputContainerStyle={styles.inputContainer}
              labelStyle={styles.label}
              inputStyle={[styles.input, { minHeight: 30 }]}
              containerStyle={styles.inputWrapper}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default SeeForm;
