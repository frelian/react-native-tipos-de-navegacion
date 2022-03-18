import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from "../screens/Tab1Screen";
import { Tab2Screen } from "../screens/Tab2Screen";
import { StackNavigator } from "./StackNavigator";
import { colors } from "../theme/appTheme";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
                borderTopColor: colors.primary,
                borderTopWidth: 1,
            }}
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'white', // color de fondo de los tabs (iconos)
                    paddingBottom: 10, //( Platform.OS === 'ios') ? 0 : 10,
                    borderWidth: 0,
                    elevation: 0,
                    borderTopWidth: 0, // parte inferior, grosor del borde de los tabs
                    height: 60,//( Platform.OS === 'ios') ? 70 : 80,
              }
            }}
        >
            <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen}/>
            <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen}/>
            <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator}/>
        </Tab.Navigator>
    )
}
