import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import { View } from 'react-native-web';
import FormList from './src/components/form/FormList';

const App = () => (
  <Provider store={store}>
    <View style={{ padding: 20 }}>
      <FormList />
    </View>
  </Provider>
);

export default App;
