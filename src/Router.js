import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Slider from './screen/slider';
import Welcome from './screen/welcome';
import SignUp from './screen/signUp';
import Home from './screen/home';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Slider" headerMode="none">
                <Stack.Screen name="Slider" component={Slider} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={Home} />                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;