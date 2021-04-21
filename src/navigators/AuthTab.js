import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStack } from './HomeStack';
import { JoinedAuctionsStack } from './JoinedAuctionsStack';
import { ProfileStack } from './ProfileStack';
import id from '../localizations/id.json';

const Tab = createMaterialBottomTabNavigator();

export const AuthTab = ({ joinedAuctionsCount }) => (
  <Tab.Navigator
    initialRouteName='HomeStack'
    barStyle={{ backgroundColor: '#ffffff' }}
  >
    <Tab.Screen
      name='HomeStack'
      component={HomeStack}
      options={{
        tabBarLabel: id.home,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name='home' size={24} color={color} />
        )
      }}
    />
    <Tab.Screen
      name='JoinedAuctionsStack'
      component={JoinedAuctionsStack}
      options={{
        tabBarLabel: id.joined_auctions,
        tabBarBadge: joinedAuctionsCount,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name='follow-the-signs' size={24} color={color} />
        )
      }}
    />
    <Tab.Screen
      name='ProfileStack'
      component={ProfileStack}
      options={{
        tabBarLabel: id.profile,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name='person' size={24} color={color} />
        )
      }}
    />
  </Tab.Navigator>
);
