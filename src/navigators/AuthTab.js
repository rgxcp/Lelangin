import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStack, JoinedAuctionsStack, ProfileStack } from '.';
import { id } from '../localizations';

const Tab = createMaterialBottomTabNavigator();

const AuthTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeStack'
      barStyle={{ backgroundColor: '#ffffff' }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          tabBarLabel: id.home,
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name='home' size={24} color={color} />;
          }
        }}
      />
      <Tab.Screen
        name='JoinedAuctionsStack'
        component={JoinedAuctionsStack}
        options={{
          tabBarLabel: id.joined,
          tabBarIcon: ({ color }) => {
            return (
              <MaterialIcons name='follow-the-signs' size={24} color={color} />
            );
          }
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          tabBarLabel: id.profile,
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name='person' size={24} color={color} />;
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthTab;
