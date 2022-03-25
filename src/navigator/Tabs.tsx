import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from "react-native";

import { Tab1Screen } from "../screens/Tab1Screen";
import { Tab2Screen } from "../screens/Tab2Screen";

import { StackNavigator } from "./StackNavigator";
import { colors } from "../theme/appTheme";
import { TopTabNavigator } from "./TopTabNavigator";
import Icon from "react-native-vector-icons/Ionicons";

export const Tabs = () => {

    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />;
}

// Configuración de Android
const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
    return (
          <BottomTabAndroid.Navigator
              sceneAnimationEnabled={ true }
              barStyle={{
                  backgroundColor: colors.primary
              }}
              /* Fix React Navigator 6 incluyendo seccion del icono */
              screenOptions = {({route}) => ({
                  tabBarActiveTintColor: colors.primary,
                  tabBarStyle: {
                      borderTopColor: colors.primary,
                      borderTopWidth: 0,
                      elevation: 0
                  },
                  tabBarLabelStyle: {
                      fontSize: 15
                  },
                  tabBarIcon: ({ color, focused}) => {
                      // Puedo verificar lo que trae route o alguna propiedad
                      console.log(route.name)

                      let iconName: string = '';
                      switch (route.name) {
                          case 'Tab1Screen':
                              iconName = 'ribbon-outline'
                              break;
                          case 'Tab2Screen':
                              iconName = 'game-controller-outline'
                              break;
                          case 'StackNavigator':
                              iconName = 'paw-outline'
                              break;
                      }
                      // return <Text style = {{ color }} > { iconName } </Text>
                      return <Icon name={ iconName } size={20} color={ color } />
                  }
              })}
          >
              <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen }/>
              <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator }/>
              <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator }/>
          </BottomTabAndroid.Navigator>
    );
}

// Configuración de IOs
const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
                borderTopColor: colors.primary,
                borderTopWidth: 1,
            }}

            /* Fix React Navigator 6 incluyendo seccion del icono */
            screenOptions = {({route}) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ color, focused, size}) => {
                    // Puedo verificar lo que trae route o alguna propiedad
                    console.log(route.name)

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'ribbon-outline'
                            break;
                        case 'Tab2Screen':
                            iconName = 'game-controller-outline'
                            break;
                        case 'StackNavigator':
                            iconName = 'paw-outline'
                            break;
                    }
                    // return <Text style = {{ color }} > { iconName } </Text>
                    return <Icon name={ iconName } size={24} color={ color } />
                }
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>ICO</Text> }} component={Tab1Screen}/> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen}/>
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator}/>
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator}/>
        </BottomTabIOS.Navigator>
    )
}

{/* Version sin icono cap 122
screenOptions={
    ({ route }) => ({})
    {
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'white', // color de fondo de los tabs (iconos)
            paddingBottom: 10, //( Platform.OS === 'ios') ? 0 : 10,
            borderWidth: 0,
            elevation: 0,
            borderTopWidth: 0, // parte inferior, grosor del borde de los tabs
            height: 60,//( Platform.OS === 'ios') ? 70 : 80,
        },
        tabBarLabelStyle: {
            fontSize: 15 // Tamaño del titulo de las tabs
        },
    }
}
*/}
