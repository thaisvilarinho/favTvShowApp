import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Login, SignUp} from '../src/pages';
import RestrictArea from '../src/pages/RestrictArea';

export default function Routes(){
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
                <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}} />
                <Stack.Screen name='RestrictArea' component={RestrictArea} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}