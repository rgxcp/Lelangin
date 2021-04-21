import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GuestScreen } from '../screens/GuestScreen';

const Stack = createStackNavigator();

export const GuestStack = () => (
  <Stack.Navigator
    initialRouteName='GuestScreen'
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name='GuestScreen' component={GuestScreen} />
  </Stack.Navigator>
);
