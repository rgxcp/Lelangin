import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Center } from '../components/Center';

export const SplashScreen = () => (
  <Center>
    <Image style={styles.logo} source={require('../../assets/logo.png')} />
  </Center>
);

const styles = StyleSheet.create({
  logo: {
    height: 250,
    width: 250
  }
});
