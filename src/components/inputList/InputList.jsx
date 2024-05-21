import React from "react";
import { View, Text } from "react-native-web";
import { connect } from "react-redux";
import Input from "./Input";

const InputList = ({ fields }) => {
  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Text>Lista de Campos</Text>
      {fields.map((field, index) => (
        <Input
          key={index}
          name={field.fieldName}
          placeholder={field.placeholder}
          typeInput={field.inputType}
        />
      ))}
    </View>
  );
};

const mapStateToProps = state => ({
  fields: state.form.fields
});

export default connect(mapStateToProps)(InputList);
