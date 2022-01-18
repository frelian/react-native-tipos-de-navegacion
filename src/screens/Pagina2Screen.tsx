import React from 'react';

import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    return (
        <View style={ styles.globalMargin }>
            <Text> Pagina 2 Screen</Text>

            <Button
                title="Ir página 3"
                onPress={ () => navigator.navigate('Pagina3Screen') }
            />
        </View>
    )
}