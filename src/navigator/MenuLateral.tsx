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
// import {createStackNavigator} from "@react-navigation/stack"; seccion 7
import {Tabs} from "./Tabs";

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  /* Fix para IOs en el Drawer.Screen cambiar por SettingsStackScreen
    <Drawer.Screen   name="SettingsScreen" component={SettingsStackScreen}  />
  const Stack = createStackNavigator();
  const SettingsStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SettingsScreen"
          component={ SettingsScreen }
        />
      </Stack.Navigator>
    )
  }
  */

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 718 ? 'permanent' : 'front'
      }}
      drawerContent = {(props) => <MenuInterno {...props}/>}
    >
      {/* seccion 7 <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
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
          onPress={ () => navigation.navigate('Tabs') }
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
