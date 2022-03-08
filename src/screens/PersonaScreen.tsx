import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouteParams {
//     id: string;
//     nombre: string;
// }

// Primero typo es el ParamList y luego el param Name por eso el string PersonaScreen
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ( { route, navigation }: Props ) => {

    // const params = route.params as RouteParams;
    const params = route.params;

    useEffect(() => {
        
        navigation.setOptions({
            // title: params!.nombre
            title: params.nombre
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify( params, null, 3 )
                }
            </Text>
        </View>
    )
}