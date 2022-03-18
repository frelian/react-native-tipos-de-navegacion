import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from "../screens/Tab1Screen";
import { Tab2Screen } from "../screens/Tab2Screen";
import { StackNavigator } from "./StackNavigator";
import { colors } from "../theme/appTheme";
import {Text} from "react-native";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
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
                            iconName = 'T1'
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;
                        case 'StackNavigator':
                            iconName = 'St'
                            break;
                    }
                    return <Text style = {{ color }} > { iconName } </Text>
                }
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>ICO</Text> }} component={Tab1Screen}/> */}
            <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen}/>
            <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen}/>
            <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator}/>
        </Tab.Navigator>
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
