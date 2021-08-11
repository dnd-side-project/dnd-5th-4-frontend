import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Login from '../pages/Login';
import MyTabs from './TabNavigation';
import UpLoad from '../pages/UpLoad';
import LocationSearch from '../pages/LocationSearch';
import RegisterGender from 'pages/RegisterGender';
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
            })}
            initialRouteName="LocationSearch"
        >
            <Stack.Screen name="RegisterGender" component={RegisterGender} />
            <Stack.Screen name="Home" component={MyTabs} />
            <Stack.Screen name="Upload" component={UpLoad} />
            <Stack.Screen name="LocationSearch" component={LocationSearch} />
        </Stack.Navigator>
    );
};

export default MyStack;
