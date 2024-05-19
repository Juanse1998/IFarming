import { StyleSheet, View } from "react-native";
import Form from "./src/components/form/Form";
import { Provider } from "react-redux";
import store from "./src/redux/store/store"


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Form />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
