export const addField = (fieldName, placeholder, inputType) => ({
  type: 'ADD_FIELD',
  payload: { fieldName, placeholder, inputType },
});

export const removeField = (fieldName) => ({
  type: 'REMOVE_FIELD',
  payload: fieldName,
});
