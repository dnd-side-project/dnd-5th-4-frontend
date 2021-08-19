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
