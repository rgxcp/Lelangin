import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const JoinedAuctionsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen />
    </Stack.Navigator>
  );
};

export default JoinedAuctionsStack;
