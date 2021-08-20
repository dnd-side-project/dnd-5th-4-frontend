import React from 'react';

import { Image, Text, View } from 'react-native';
import AppGuidesLayout from '../../layout/AppGuides';
import { useNavigation } from '@react-navigation/native';
import { TopContainer, BigCalendar } from './style';
const ThirdAppGuide = () => {
    const navigation = useNavigation();
    const PushNextPage = () => {
        // console.log('1');
        navigation.navigate('Home');
    };
    const TopcontainerFunction = () => {
        return (
            <TopContainer>
                <BigCalendar source={require('Images/BigCalendar.png')} resizeMode={'contain'} />
            </TopContainer>
        );
    };
    return (
        <AppGuidesLayout
            titleContents={`캘린더를 통해 나의 날씨 기록을\n한 눈에 볼 수 있어요`}
            subTitleContents={`작년 여름은 무엇을 입었고 얼마나 더웠었는지\n기억을 되짚어 볼 수 있어요`}
            Images={'Third'}
            PushNextPage={PushNextPage}
            TopcontainerFunction={TopcontainerFunction}
        >
            <Text>ThirdAppGuide</Text>
        </AppGuidesLayout>
    );
};

export default ThirdAppGuide;
