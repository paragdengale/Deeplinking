import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Component/Splash';
import Login from '../Component/Login';

const Stack = createNativeStackNavigator()

function LoginStackNavigator() {
    return (
        <Stack.Navigator initialRouteName='Login' >
            <Stack.Screen name='Splash' component={Splash}  />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    );
}

export default LoginStackNavigator