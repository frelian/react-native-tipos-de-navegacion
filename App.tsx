import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuDrawerNavigator } from './src/navigator/MenuDrawerNavigator';
import {MenuLateral} from "./src/navigator/MenuLateral";

const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuDrawerNavigator /> */}
        <MenuLateral />
    </NavigationContainer>
  )
}

export default App;
