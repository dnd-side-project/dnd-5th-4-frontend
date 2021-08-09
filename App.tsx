import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <MyStack />
            </SafeAreaView>
        </NavigationContainer>
    );
}
