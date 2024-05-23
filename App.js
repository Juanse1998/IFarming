import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import AppNavigator from './src/AppNavigator';
import { View, StyleSheet, PlatformColor} from 'react-native';

const App = () => (
  <Provider store={store}>
    <View style={{ ...styles.container, backgroundColor: 'black !important'}}>
      <AppNavigator />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
