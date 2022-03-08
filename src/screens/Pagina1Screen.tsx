import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

/* 
    StackScreenProps pide 2 argumentos
    1. Un objeto
    2. Que especifique las propiedades que puede tener ese objeto
*/
interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Pagina 1 Screen</Text>

            <Button
                title="Ir página 2"
                onPress={ () => navigation.navigate('Pagina2Screen') }
            />

            <View style={ styles.spaces } />
            
            <Text>Navegar con argumentos</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#bbdefb'
                    }}
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: "Pedro"
                    }) }
                >
                    <Text style={ styles.textBigButton }>Pedro</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.bigButton }
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: "Maria"
                    }) }
                >
                    <Text style={ styles.textBigButton }>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}