import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import AppNavigator from './src/AppNavigator';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
