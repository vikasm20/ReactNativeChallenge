import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/Splash/SplashScreen';
import { HomeScreen } from '../Screens/Home/HomeScreen';

const Stack = createStackNavigator();

const MusicofyNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Splash'}>
                <Stack.Screen name={'Splash'} component={SplashScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'Home'} component={HomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MusicofyNavigation;
