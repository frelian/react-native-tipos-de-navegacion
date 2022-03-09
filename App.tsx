import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuDrawerNavigator } from './src/navigator/MenuDrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator /> */}
        <MenuDrawerNavigator />
    </NavigationContainer>
  )
}

export default App;
