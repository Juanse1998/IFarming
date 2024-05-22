import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/logo-ifarming.png';

const Nav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} resizeMode="contain" />
      </View>
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

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
  },
  linksContainer: {
    flexDirection: 'row',
  },
  navLink: {
    paddingHorizontal: 10,
  },
  navText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Nav;
