import React, { useEffect, useRef } from 'react';

import { Animated, Image, Text, View } from 'react-native';
import { Container } from './styles';
import { CloudLeftMove, CloudRightMove } from '../../untils/MainPageAnimation';

const Rain = () => {
    const SunTurn = new Animated.Value(0); //SUN회전
    const RightMove = useRef(new Animated.Value(1)).current;
    const LeftMove = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        CloudLeftMove(RightMove, 15);
        CloudRightMove(LeftMove, -15);
    });
    return (
        <Container
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}
        >
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 150,
                    left: 78,
                    transform: [{ translateX: RightMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/cloud.png')}
                    resizeMode={'contain'}
                    style={{ width: 84, height: 58 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 78,
                    left: -30,
                    transform: [{ translateX: RightMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/cloud.png')}
                    resizeMode={'contain'}
                    style={{ width: 120, height: 82 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 230,
                    left: -30,
                    transform: [{ translateX: RightMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/cloud.png')}
                    resizeMode={'contain'}
                    style={{ width: 161, height: 110 }}
                />
            </Animated.View>

            <Animated.View
                style={{
                    position: 'absolute',
                    top: 51,
                    right: -20,
                    transform: [{ translateX: LeftMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/cloud.png')}
                    resizeMode={'contain'}
                    style={{ width: 120, height: 82 }}
                />
            </Animated.View>

            <Animated.View
                style={{
                    position: 'absolute',
                    top: 240,
                    right: -70,
                    transform: [{ translateX: LeftMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/cloud.png')}
                    resizeMode={'contain'}
                    style={{ width: 174, height: 120 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 54,
                    right: 10,
                    transform: [{ translateY: LeftMove }],
                    height: '70%',
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={require('WeatherMainImage/rain.png')}
                    resizeMode={'contain'}
                    style={{ width: '100%', height: '100%' }}
                />
            </Animated.View>
        </Container>
    );
};

export default Rain;
