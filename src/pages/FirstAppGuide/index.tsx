import React from 'react';

import { Image, Text, View } from 'react-native';
import AppGuidesLayout from '../../layout/AppGuides';
import { useNavigation } from '@react-navigation/native';
import { TopContainer } from '../../layout/AppGuides/styles';
import { MoodImage } from '../../untils/MoodWeather';

const FirstAppGuide = () => {
    const navigation = useNavigation();
    const PushNextPage = () => {
        navigation.navigate('SecondAppGuide');
    };
    const TopcontainerFunction = () => {
        return (
            <TopContainer>
                {MoodImageArray.map((Moods, index) => (
                    <Image
                        key={index}
                        source={MoodImage[Moods]}
                        style={{
                            position: 'absolute',
                            width: 100,
                            height: 100,
                            top: EmojiLocaion[index][0],
                            left: EmojiLocaion[index][1],
                            transform: [{ rotate: rotateArray[index] }],
                        }}
                    />
                ))}
            </TopContainer>
        );
    };
    return (
        <AppGuidesLayout
            titleContents={`체감 온도를 평가해서\n나만의 날씨를 기록해보세요`}
            subTitleContents={`체감 온도는 덥고 추움을 기준으로\n다섯 가지로 평가할 수 있어요`}
            Images={'First'}
            PushNextPage={PushNextPage}
            TopcontainerFunction={TopcontainerFunction}
        />
    );
};

export default FirstAppGuide;
export const StempArray: { [index: string]: any } = {
    First: require('Images/FirstBar.png'),
    Second: require('Images/SecondBar.png'),
    Third: require('Images/ThirdBar.png'),
};
const EmojiLocaion = [
    ['35%', '35%'],
    ['10%', '70%'],
    ['60%', '63%'],
    ['60%', '7%'],
    ['10%', '4%'],
];
const rotateArray = ['-24.17deg', '0deg', '23.57deg', '-17.47deg', '38.12deg'];
const MoodImageArray = ['VERYCOLD', 'COLD', 'VERYHOT', 'GOOD', 'HOT'];
