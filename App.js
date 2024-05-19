import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import Form from './src/components/form/Form';

{/* <Input 
  containerStyle={{width: '50%'}}
  placeholder="aca"
></Input> */}

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
