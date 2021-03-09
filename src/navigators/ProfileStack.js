import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { id } from '../localizations';
import {
  AccountsScreen,
  AddressesScreen,
  BanksScreen,
  CreateAccountScreen,
  CreateAddressScreen,
  EditAccountScreen,
  EditAddressScreen,
  EditProductScreen,
  InvoiceDetailScreen,
  InvoicesScreen,
  ProfileScreen,
  UserProductsScreen
} from '../screens';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName='ProfileScreen'>
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
        name='InvoiceDetailScreen'
        component={InvoiceDetailScreen}
        options={{ headerTitle: id.invoice_detail }}
      />
      <Stack.Screen
        name='InvoicesScreen'
        component={InvoicesScreen}
        options={{ headerTitle: id.invoices }}
      />
      <Stack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{ headerTitle: id.profile }}
      />
      <Stack.Screen
        name='UserProductsScreen'
        component={UserProductsScreen}
        options={{ headerTitle: id.user_products }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
