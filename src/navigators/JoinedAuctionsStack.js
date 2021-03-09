import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { id } from '../localizations';
import {
  AccountsScreen,
  AddressesScreen,
  AuctionScreen,
  BanksScreen,
  CreateAccountScreen,
  CreateAddressScreen,
  EditAccountScreen,
  EditAddressScreen,
  EditProductScreen,
  JoinedAuctionsScreen,
  LoseAuctionScreen,
  ProductDetailScreen,
  WinAuctionScreen
} from '../screens';

const Stack = createStackNavigator();

const JoinedAuctionsStack = () => {
  return (
    <Stack.Navigator initialRouteName='JoinedAuctionsScreen'>
      <Stack.Screen
        name='AccountsScreen'
        component={AccountsScreen}
        options={{ headerTitle: id.accounts }}
      />
      <Stack.Screen
        name='AddressesScreen'
        component={AddressesScreen}
        options={{ headerTitle: id.addresses }}
      />
      <Stack.Screen
        name='AuctionScreen'
        component={AuctionScreen}
        options={{ headerTitle: id.auction_rom }}
      />
      <Stack.Screen
        name='BanksScreen'
        component={BanksScreen}
        options={{ headerTitle: id.banks }}
      />
      <Stack.Screen
        name='CreateAccountScreen'
        component={CreateAccountScreen}
        options={{ headerTitle: id.create_account }}
      />
      <Stack.Screen
        name='CreateAddressScreen'
        component={CreateAddressScreen}
        options={{ headerTitle: id.create_address }}
      />
      <Stack.Screen
        name='EditAccountScreen'
        component={EditAccountScreen}
        options={{ headerTitle: id.edit_account }}
      />
      <Stack.Screen
        name='EditAddressScreen'
        component={EditAddressScreen}
        options={{ headerTitle: id.edit_address }}
      />
      <Stack.Screen
        name='EditProductScreen'
        component={EditProductScreen}
        options={{ headerTitle: id.edit_product }}
      />
      <Stack.Screen
        name='JoinedAuctionsScreen'
        component={JoinedAuctionsScreen}
        options={{ headerTitle: id.joined }}
      />
      <Stack.Screen
        name='LoseAuctionScreen'
        component={LoseAuctionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProductDetailScreen'
        component={ProductDetailScreen}
        options={{ headerTitle: id.product_detail }}
      />
      <Stack.Screen
        name='WinAuctionScreen'
        component={WinAuctionScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default JoinedAuctionsStack;
