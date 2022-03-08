import React from 'react'; // PARA EL STACKNAVIGATOR ES NECESARIO IMPORTAR REACT

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: { id: number, nombre: string },
}

// De forma automatica Stack Navigator pone los props
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        // initialRouteName='Pagina2Screen'
        screenOptions={{

            // headerShown: false, // Oculta el header del menu
            headerStyle: {
                elevation: 0, // propiedad solo para Android, quita el borde en el header
                shadowColor: 'transparent' // hace lo mismo que elevation: 0 pero se usa para aplicar en IOs
            },

            // Estilos para todas las screens
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <Stack.Screen name="Pagina1Screen" options={{ title: "Página 1" }} component={ Pagina1Screen } />
        <Stack.Screen name="Pagina2Screen" options={{ title: "Página 2" }} component={ Pagina2Screen } />
        <Stack.Screen name="Pagina3Screen" options={{ title: "Página 3" }} component={ Pagina3Screen } />
        <Stack.Screen name="PersonaScreen" options={{ title: "Página Persona" }} component={ PersonaScreen } />
    </Stack.Navigator>
  );
}