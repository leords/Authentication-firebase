import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login';
import HomePage from '../pages/HomePage';

const Stack = createNativeStackNavigator();

function Routes() {
    return(
        <NavigationContainer
            screenOptions={{              
                headerShown: false // -> headerShown = não aparecer o cabeçalho das paginas.
        }}
        >
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}/>
                <Stack.Screen 
                    name='Home'
                    component={HomePage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;