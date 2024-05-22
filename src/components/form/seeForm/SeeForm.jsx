import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

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
                enabled={true} // Para deshabilitar la selección
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  fieldContainer: {
    marginVertical: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    width: 300,
    height: "auto",
    alignItems: "center",
  },
  inputWrapper: {
    width: 300,
    height: 30,
  },
  inputContainer: {
    borderBottomWidth: 0,
    padding: 0,
    margin: 0,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: "300px",
    height: "30px",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 300,
    height: 30,
  },
});

export default SeeForm;
