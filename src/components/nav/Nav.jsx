import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/logo-ifarming.png';
import { styles } from './styles';

const Nav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate('Home')}>
        <Image style={styles.logo} source={logo} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
      <TouchableOpacity style={styles.navLink} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navLink} onPress={() => navigation.navigate('CreateForm')}>
          <Text style={styles.navText}>Crear Formulario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navLink} onPress={() => navigation.navigate('FormListScreen')}>
          <Text style={styles.navText}>Ver Formularios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Nav;
