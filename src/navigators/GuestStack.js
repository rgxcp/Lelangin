import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GuestScreen, LoginScreen, RegisterScreen } from '../screens';

const Stack = createStackNavigator();

const GuestStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='GuestScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='GuestScreen' component={GuestScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default GuestStack;
