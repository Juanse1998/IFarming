import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import imgPez from '../../../assets/pez2.png';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const { width } = Dimensions.get('window');

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
          <Text style={styles.buttonText}>Ver formularios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
