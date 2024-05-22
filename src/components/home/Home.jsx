import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import imgPez from '../../../assets/pez2.svg';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={imgPez} 
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateForm')}>
          <Text style={styles.buttonText}>Crear formulario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('FormListScreen')}>
          <Text style={styles.buttonText}>Ver formulario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 130
  },
  image: {
    width: '90%',
    aspectRatio: 16 / 9,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    bottom: 20,
    width: '100%',
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: '#037DAA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
