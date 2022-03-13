import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import 'react-native-reanimated';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {styles} from "../theme/appTheme";

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 718 ? 'permanent' : 'front'
      }}
      drawerContent = {(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
      />
      <Drawer.Screen
        name="settingsScreen"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( props: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View style={ styles.avatarContainer }>
        <Image
          source={{
            uri:'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        />
      </View>
    </DrawerContentScrollView>
  );
}
