import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts, Archivo_600SemiBold } from '@expo-google-fonts/archivo';
import { id } from '../localizations';

const SplashScreen = () => {
  useFonts({
    Archivo_600SemiBold
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../assets/slam-card-reader.png')}
      />
      <Text style={styles.title}>{id.app_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    height: 150,
    width: 150
  },
  title: {
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 30,
    marginTop: 15
  }
});

export default SplashScreen;
