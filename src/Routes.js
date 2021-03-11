import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthTab, GuestStack } from './navigators';

const Routes = () => {
  // TODO: Load data using persistence storage
  const isAuth = false;

  return (
    <NavigationContainer>
      {isAuth ? <AuthTab /> : <GuestStack />}
    </NavigationContainer>
  );
};

export default Routes;
