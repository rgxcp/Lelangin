import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import id from '../localizations/id.json';
import { ProductsScreen } from '../screens/ProductsScreen';

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator initialRouteName='ProductsScreen'>
    <Stack.Screen
      name='ProductsScreen'
      component={ProductsScreen}
      options={{ headerTitle: id.home }}
    />
  </Stack.Navigator>
);
