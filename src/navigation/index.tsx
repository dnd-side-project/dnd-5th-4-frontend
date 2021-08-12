import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Login from '../pages/Login';
import MyTabs from './TabNavigation';
// import UpLoad from '../pages/UpLoad';
import RegisterGender from 'pages/RegisterGender';
import RegisterNickName from 'pages/RegisterNickName';
import UploadWeather from 'pages/UploadWeather';
import UploadClothes from 'pages/UploadClothes';
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
            })}
            initialRouteName="UploadClothes"
        >
            <Stack.Screen name="UploadClothes" component={UploadClothes} />
            <Stack.Screen name="RegisterGender" component={RegisterGender} />
            <Stack.Screen name="Home" component={MyTabs} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="RegisterNickName" component={RegisterNickName} />
            <Stack.Screen name="RegisterGender" component={RegisterGender} />
        </Stack.Navigator>
    );
};

export default MyStack;
