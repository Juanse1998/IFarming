const initialState = {
  forms: {}
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FORM':
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formId]: {
            id: action.payload.formId,
            name: action.payload.name,
            fields: []
          }
        }
      };
    case 'REMOVE_FORM':
      const { [action.payload.formId]: _, ...remainingForms } = state.forms;
      return {
        ...state,
        forms: remainingForms
      };
    case 'ADD_FIELD':
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formId]: {
            ...state.forms[action.payload.formId],
            fields: [
              ...state.forms[action.payload.formId].fields,
              { fieldName: action.payload.fieldName, placeholder: action.payload.placeholder, inputType: action.payload.inputType }
            ]
          }
        }
      };
    case 'REMOVE_FIELD':
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formId]: {
            ...state.forms[action.payload.formId],
            fields: state.forms[action.payload.formId].fields.slice(0, -1)
          }
        }
      };
    case 'UPDATE_FIELD':
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formId]: {
            ...state.forms[action.payload.formId],
            fields: state.forms[action.payload.formId].fields.map((field, index) =>
              index === action.payload.index
                ? { fieldName: action.payload.fieldName, placeholder: action.payload.placeholder, inputType: action.payload.inputType }
                : field
            )
          }
        }
      };
    default:
      return state;
  }
};

export default formReducer;
