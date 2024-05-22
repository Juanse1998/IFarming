import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import imgPez from '../../../assets/pez2.png';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    // Simular una carga de 2 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#037DAA" />
      </View>
    );
  }

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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FormListScreen')}>
          <Text style={styles.buttonText}>Ver formulario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 130,
  },
  image: {
    width: 200,
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
