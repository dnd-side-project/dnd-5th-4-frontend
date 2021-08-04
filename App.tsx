import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import RegisterGender from './src/pages/RegisterGender';

export default function App() {
    return (
        <View style={styles.container}>
            {/*<Text>Hello world!</Text>*/}
            {/* <Login /> */}
            <RegisterGender />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
