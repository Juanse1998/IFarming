import React from "react";
import { View, Text } from "react-native-web";
import { Input } from "react-native-elements";

const SeeForm = ({ route }) => {
  const { form } = route.params;

  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', marginVertical: 10 }}>
    <Text>{form.name}</Text>
    {form.fields.map((element, index) => (
      <View key={index} style={{ marginVertical: 10 }}>
        <Input
          label={element.fieldName}
          placeholder={element.placeholder}
          keyboardType={element.inputType}
          style={{ borderWidth: 1, padding: 5 }}
        />
      </View>
    ))}
  </View> 
  )
}

export default SeeForm;
