import React, { useEffect } from 'react';

import { Animated, Image, PanResponder, Text, View } from 'react-native';
import { Container } from './styles';
import { MoodImage, MoodImageGray } from '../../untils/MoodWeather';
import MainEmoji from '../MainEmoji';
import { Title } from '../Character/styles';
interface RegisterLayoutProps {
    posts: any;
}
const TopMainPageEmoji: React.FC<RegisterLayoutProps> = ({ posts }) => {
    const position = new Animated.ValueXY({ x: 0, y: 0 });

    const pan = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }]),
        onPanResponderRelease: () => {
            Animated.spring(position, {
                toValue: { x: 0, y: 10 },
                useNativeDriver: true,
            }).start();
        },
    });
    const rotate = position.x.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg'],
    });
    return (
        <Container style={{ justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                {/**/}
                {/*{console.log(mainText)}*/}

                <Title>
                    미세먼지 상태가
                    <Title boldFont={true}>나쁨</Title>이니
                </Title>
                <Title>
                    <Title boldFont={true}>마스크 </Title>를 꼭 착용하세요.
                </Title>
            </View>
            <View style={{ height: '60%', width: '100%' }}>
                {posts.map((post: { mood: string }, index: number) => (
                    <MainEmoji
                        post={post}
                        mood={post?.mood}
                        left={EmojiLocaion[index][0]}
                        bottom={EmojiLocaion[index][1]}
                        index={index}
                    />
                ))}
            </View>
        </Container>
    );
};
//
const EmojiLocaion = [
    ['35%', '30%'],
    ['10%', '50%'],
    ['70%', '50%'],
    ['60%', 0],
    ['10%', 0],
];
export default TopMainPageEmoji;
const Array = [
    {
        measureId: 14,
        userId: 'testuser1',
        userName: 'testUser',
        userConstitution: 'HOT',
        date: '2021-08-05T05:28:42',
        tempInfo: '맑음',
        temperatureHigh: 31.5,
        temperatureLow: 26.3,
        humidity: 60.0,
        area: '부산',
        mood: 'HOT',
        comment: '전반적으로 괜찮았다.',
        dressResponses: [
            {
                dressId: 10,
                dressName: '검정 가디건',
                dressType: 'OUTER',
                partialMood: 'GOOD',
            },
            {
                dressId: 11,
                dressName: '아디다스 후드티',
                dressType: 'TOP',
                partialMood: 'GOOD',
            },
            {
                dressId: 12,
                dressName: '카고 반바지',
                dressType: 'BOTTOM',
                partialMood: 'COLD',
            },
            {
                dressId: 13,
                dressName: '반스 올드스쿨',
                dressType: 'SHOES',
                partialMood: 'HOT',
            },
        ],
    },
    {
        measureId: 14,
        userId: 'testuser1',
        userName: 'testUser',
        userConstitution: 'GOOD',
        date: '2021-08-05T05:28:42',
        tempInfo: '맑음',
        temperatureHigh: 31.5,
        temperatureLow: 26.3,
        humidity: 60.0,
        area: '부산',
        mood: 'GOOD',
        comment: '전반적으로 괜찮았다.',
        dressResponses: [
            {
                dressId: 10,
                dressName: '검정 가디건',
                dressType: 'OUTER',
                partialMood: 'GOOD',
            },
            {
                dressId: 11,
                dressName: '아디다스 후드티',
                dressType: 'TOP',
                partialMood: 'GOOD',
            },
            {
                dressId: 12,
                dressName: '카고 반바지',
                dressType: 'BOTTOM',
                partialMood: 'COLD',
            },
            {
                dressId: 13,
                dressName: '반스 올드스쿨',
                dressType: 'SHOES',
                partialMood: 'HOT',
            },
        ],
    },
    {
        measureId: 14,
        userId: 'testuser1',
        userName: 'testUser',
        userConstitution: 'COLD',
        date: '2021-08-05T05:28:42',
        tempInfo: '맑음',
        temperatureHigh: 31.5,
        temperatureLow: 26.3,
        humidity: 60.0,
        area: '부산',
        mood: 'VERYc',
        comment: '전반적으로 괜찮았다.',
        dressResponses: [
            {
                dressId: 10,
                dressName: '검정 가디건',
                dressType: 'OUTER',
                partialMood: 'GOOD',
            },
            {
                dressId: 11,
                dressName: '아디다스 후드티',
                dressType: 'TOP',
                partialMood: 'GOOD',
            },
            {
                dressId: 12,
                dressName: '카고 반바지',
                dressType: 'BOTTOM',
                partialMood: 'COLD',
            },
            {
                dressId: 13,
                dressName: '반스 올드스쿨',
                dressType: 'SHOES',
                partialMood: 'HOT',
            },
        ],
    },
    {
        measureId: 14,
        userId: 'testuser1',
        userName: 'testUser',
        userConstitution: 'HOT',
        date: '2021-08-05T05:28:42',
        tempInfo: '맑음',
        temperatureHigh: 31.5,
        temperatureLow: 26.3,
        humidity: 60.0,
        area: '부산',
        mood: 'GOOD',
        comment: '전반적으로 괜찮았다.',
        dressResponses: [
            {
                dressId: 10,
                dressName: '검정 가디건',
                dressType: 'OUTER',
                partialMood: 'GOOD',
            },
            {
                dressId: 11,
                dressName: '아디다스 후드티',
                dressType: 'TOP',
                partialMood: 'GOOD',
            },
            {
                dressId: 12,
                dressName: '카고 반바지',
                dressType: 'BOTTOM',
                partialMood: 'COLD',
            },
            {
                dressId: 13,
                dressName: '반스 올드스쿨',
                dressType: 'SHOES',
                partialMood: 'HOT',
            },
        ],
    },
    {
        measureId: 5,
        userId: 'testuser1',
        userName: 'testUser',
        userConstitution: 'HOT',
        date: '2021-08-04T05:28:42',
        tempInfo: '구름 많음',
        temperatureHigh: 31.5,
        temperatureLow: 24.3,
        humidity: 15.0,
        area: '서울',
        mood: 'COLD',
        comment: '상의는 대체로 더웠으나 하의와 신발은 추웠다.',
        dressResponses: [
            {
                dressId: 1,
                dressName: '회색 가디건',
                dressType: 'OUTER',
                partialMood: 'GOOD',
            },
            {
                dressId: 2,
                dressName: '나이키 후드티',
                dressType: 'TOP',
                partialMood: 'HOT',
            },
            {
                dressId: 3,
                dressName: '연청바지',
                dressType: 'BOTTOM',
                partialMood: 'COLD',
            },
            {
                dressId: 4,
                dressName: '삼선 슬리퍼',
                dressType: 'SHOES',
                partialMood: 'VERYCOLD',
            },
        ],
    },
];
