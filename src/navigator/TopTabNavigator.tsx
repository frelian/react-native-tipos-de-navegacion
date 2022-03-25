import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {ChatScreen} from "../screens/ChatScreen";
import {ContactsScreen} from "../screens/ContactsScreen";
import {AlbumsScreen} from "../screens/AlbumsScreen";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {colors} from "../theme/appTheme";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


/*
// Como ignorar los warnings ?
import { LogBox } from "react-native";
LogBox.ignoreLogs(['Sending']);
*/

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  // Exclusivo para notch de IOs
  const { top:paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{ backgroundColor: 'white' }} // fondo de las tab para IOs y Android

      // Codigo agregando la seccion del icono
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarOptions: {
          activeBackgroundColor: colors.primary,
          inactiveTintColor: 'blue',
        },
        // tabBarActiveTintColor: colors.primary, // Color del texto de la tab activa
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary, // color de fondo del borde de la tab activa
        },
        tabBarStyle: {
          // backgroundColor: 'red', // color de fondo de todo el area de tabs
          shadowColor: 'transparent', // Solucion para IOs
          elevation: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'Contacts':
              iconName = 'people-outline';
              break;

            case 'Albums':
              iconName = 'albums-outline';
              break;
          }
          return <Icon name={ iconName } size={24} color={ color } />;
          // return <Text style={{ color: colors.primary }}>{iconName}</Text>;
          //  return <Text style={{ color }}>{iconName}</Text>;
        },
      })}

      /* Codigo sin agregar la seccion del icono
      screenOptions={{
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarActiveTintColor: colors.primary, // Color del texto de la tab activa
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },

        // Seccion para quitar el borde gris de los tabs
        tabBarStyle:{
          shadowColor: 'transparent', // Solucion para IOs
          borderTopColor: colors.primary, // Para agregarle un borde superior al tab
          borderTopWidth: 2,
          elevation: 0
        }
      }}
      */
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}
