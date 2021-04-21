import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import id from '../localizations/id.json';
import { ProfileScreen } from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export const ProfileStack = () => (
  <Stack.Navigator initialRouteName='ProfileScreen'>
    <Stack.Screen
      name='ProfileScreen'
      component={ProfileScreen}
      options={{ headerTitle: id.profile }}
    />
  </Stack.Navigator>
);
