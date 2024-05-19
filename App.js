import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/form/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
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
