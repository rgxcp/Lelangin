import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { AuthTab } from './navigators/AuthTab';
import { GuestStack } from './navigators/GuestStack';
import { SplashScreen } from './screens/SplashScreen';

export const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const getAuthData = async () => {
      try {
        const value = await AsyncStorage.getItem('auth');
        setAuth(value !== null ? JSON.parse(value) : null);
        setIsLoading(false);
      } catch (e) {
        console.log('src/Routes', e);
      }
    };
    getAuthData();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {auth ? (
        <AuthTab joinedAuctionsCount={auth.joined_auctions_count} />
      ) : (
        <GuestStack />
      )}
    </NavigationContainer>
  );
};
