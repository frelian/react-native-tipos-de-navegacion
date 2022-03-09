import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-reanimated';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}