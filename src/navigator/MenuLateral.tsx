import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import 'react-native-reanimated';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import {Image, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
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
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}
// Sin desestructurar las props
//const MenuInterno = ( props: DrawerContentComponentProps ) => {
// Desestructurando las props
const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image
          source={{
            uri:'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        />
      </View>


      {/* Opciones de menú */}
      <View style={ styles.menuContainer }>

        <TouchableOpacity
          style={ styles.menuBoton }
          onPress={ () => navigation.navigate('StackNavigator') }
        >
          <Text style={ styles.menuTexto }>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ styles.menuBoton }
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          <Text style={ styles.menuTexto }>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}
