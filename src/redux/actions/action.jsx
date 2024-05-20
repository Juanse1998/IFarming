export const addForm = (formId, name) => ({
  type: 'ADD_FORM',
  payload: { formId, name }
});

export const removeForm = (formId) => ({
  type: 'REMOVE_FORM',
  payload: { formId }
});

export const addField = (formId, fieldName, placeholder, inputType) => ({
  type: 'ADD_FIELD',
  payload: { formId, fieldName, placeholder, inputType }
});

export const removeField = (formId) => ({
  type: 'REMOVE_FIELD',
  payload: { formId }
});

export const updateField = (formId, index, fieldName, placeholder, inputType) => ({
  type: 'UPDATE_FIELD',
  payload: { formId, index, fieldName, placeholder, inputType }
});
