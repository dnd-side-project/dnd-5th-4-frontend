import React, { useEffect } from 'react';
import { Text, View, Image, Platform, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import UpLoad from '../pages/UpLoad';
import { AntDesign } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MyTabs = ({ route }: { route: any }) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    display: routeName === 'UpLoad' ? 'none' : 'flex',
                    height: 56,
                    // Shadow...
                    shadowColor: '#000',
                    shadowOpacity: 0.96,
                    shadowOffset: {
                        width: 10,
                        height: 86,
                    },
                },
            }}
        >
            <Tab.Screen
                name="Main"
                component={Main}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Fontisto name="day-sunny" size={23} color={focused ? 'black' : '#C9C9C9'} />
                    ),
                }}
            />
            <Tab.Screen
                name="UpLoad"
                component={UpLoad}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="pluscircle"
                            size={50}
                            color="black"
                            // color={focused ? 'black' : '#C9C9C9'}
                            style={{ marginBottom: 50 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Mypage"
                component={MyPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="calendar-today" size={23} color={focused ? 'black' : '#C9C9C9'} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MyTabs;
