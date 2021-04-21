import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import id from '../localizations/id.json';
import { JoinedAuctionsScreen } from '../screens/JoinedAuctionsScreen';

const Stack = createStackNavigator();

export const JoinedAuctionsStack = () => (
  <Stack.Navigator initialRouteName='JoinedAuctionsScreen'>
    <Stack.Screen
      name='JoinedAuctionsScreen'
      component={JoinedAuctionsScreen}
      options={{ headerTitle: id.joined_auctions }}
    />
  </Stack.Navigator>
);
