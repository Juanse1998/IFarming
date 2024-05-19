import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../reducers/reducers';

const store = configureStore({
  reducer: {
    form: formReducer
  }
});

export default store;