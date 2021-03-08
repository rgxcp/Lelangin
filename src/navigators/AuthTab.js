import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const AuthTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen />
    </Tab.Navigator>
  );
};

export default AuthTab;
