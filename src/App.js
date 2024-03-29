import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Router from './routers';

export default function App() {
    return (
        <NavigationContainer>
            <Router />
            <FlashMessage position='top' />
        </NavigationContainer>
    );
}
