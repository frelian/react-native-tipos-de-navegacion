import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

    useEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menú"
                    onPress={ () => navigation.toggleDrawer() }
                />
            ) 
        })

    }, [])

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