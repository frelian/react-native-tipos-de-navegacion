import React, { useEffect } from 'react';

import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo', // sobree escribe lo que haya mandado el padre StackNavigator.tsx
            headerBackTitle: 'Atras' // solo para IOs, si lo mando vacio '' entonces pone el idioma que tenga el telefono
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Pagina 2 Screen</Text>

            <Button
                title="Ir página 3"
                onPress={ () => navigator.navigate('Pagina3Screen') }
            />
        </View>
    )
}