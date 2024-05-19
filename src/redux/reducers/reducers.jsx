const initialState = {
  fields: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FIELD':
      return {
        ...state,
        fields: [...state.fields, action.payload],
      };
    case 'REMOVE_FIELD':
      return {
        ...state,
        fields: state.fields.filter(field => field.fieldName !== action.payload),
      };
    default:
      return state;
  }
};

export default formReducer;
