import React, { useEffect, useRef, useState } from 'react';

import { StyleSheet, Animated, Text, View, Button, Image, Dimensions } from 'react-native';
import { Container, Title } from './styles';
import {
    ArrowDownMove,
    CloudRightMove,
    CloudLeftMove,
    sunAnimation,
    getWeatherImage,
} from '../../untils/MainPageAnimation';
type CharacterProps = {
    scrollHeight: number;
    currentWeather: number;
};
const Character: React.FC<CharacterProps> = ({ scrollHeight, currentWeather }, props) => {
    const ArrowMove = useRef(new Animated.Value(0)).current; // arrow
    const SunTurn = new Animated.Value(0); //SUN회전
    const SunMove = useRef(new Animated.Value(1)); //Sun
    const RightMove = useRef(new Animated.Value(1)).current;
    const LeftMove = useRef(new Animated.Value(1)).current;
    const [imageWidth, setImageWidth] = useState(0);
    const screenWidth = Dimensions.get('screen').width;
    const interpolatedRotateAnimation = SunTurn.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg'],
    });
    const Array = [
        ['일교차', '가 클 예정이니', '겉옷', '을 챙기세요'],
        ['일교차', '낮으니', '겉옷', '을 챙기세요'],
    ];

    useEffect(() => {
        sunAnimation(SunTurn);
        CloudLeftMove(RightMove);
        CloudRightMove(LeftMove);
        ArrowDownMove(ArrowMove);
    });

    return (
        <Container
            style={{
                flex: 1,
            }}
        >
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: -15,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/sun.png')}
                    resizeMode={'contain'}
                    style={{ width: screenWidth / 3 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 53,
                    right: -30,
                    transform: [{ translateX: RightMove }],
                }}
            >
                <Image
                    style={{}}
                    source={require('WeatherMainImage/smallCloude.png')}
                    resizeMode={'contain'}
                    // style={{ position: 'absolute', top: 53, right: -30, height: 82 }}
                />
            </Animated.View>
            <Animated.View
                style={{ position: 'absolute', bottom: 10, left: -40, transform: [{ translateX: LeftMove }] }}
            >
                <Image source={require('WeatherMainImage/cloud.png')} resizeMode={'contain'} />
            </Animated.View>
            <View style={{ alignItems: 'center' }}>
                <Title>
                    <Title boldFont={true}>{Array[0][0]}</Title>
                    {Array[0][1]}
                </Title>
                <Title>
                    <Title boldFont={true}>{Array[0][2]}</Title>
                    {Array[0][3]}
                </Title>
            </View>

            <Image source={require('WeatherMainImage/hot.png')} resizeMode={'contain'} />
            <Animated.View
                style={{
                    position: 'absolute',
                    left: `50%`,
                    bottom: -24,
                    transform: [{ translateY: ArrowMove }],
                }}
            >
                <Image
                    source={require('Images/Arrow.png')}
                    resizeMode={'contain'}
                    onLayout={(event) => {
                        var { height, width } = event.nativeEvent.layout;
                        setImageWidth(width);
                    }}
                    style={{ marginLeft: -imageWidth / 2 }}
                />
            </Animated.View>
        </Container>
    );
};

export default Character;
