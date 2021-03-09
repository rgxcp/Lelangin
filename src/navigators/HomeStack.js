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
  CreateProductScreen,
  EditAccountScreen,
  EditAddressScreen,
  EditProductScreen,
  LoseAuctionScreen,
  ProductDetailScreen,
  ProductsScreen,
  WinAuctionScreen
} from '../screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='ProductsScreen'>
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
        options={{ headerTitle: id.auction_room }}
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
        name='CreateProductScreen'
        component={CreateProductScreen}
        options={{ headerTitle: id.create_product }}
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
        name='ProductsScreen'
        component={ProductsScreen}
        options={{ headerTitle: id.home }}
      />
      <Stack.Screen
        name='WinAuctionScreen'
        component={WinAuctionScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
