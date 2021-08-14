import React, { useEffect, useRef } from 'react';

import { Animated, Image, Text, View } from 'react-native';
import { Container } from './styles';
import { CloudLeftMove, CloudRightMove } from '../../untils/MainPageAnimation';

const Lightning = () => {
    const SunTurn = new Animated.Value(0); //SUN회전
    const RightMove = useRef(new Animated.Value(1)).current;
    const LeftMove = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        CloudLeftMove(RightMove, 15);
        CloudRightMove(LeftMove, -15);
    });
    return (
        <Container style={{ position: 'absolute', width: '100%' }}>
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
                    top: 145,
                    left: 15,
                    transform: [{ translateX: RightMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/lightning.png')}
                    resizeMode={'contain'}
                    style={{ width: 45, height: 72 }}
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
                    top: 38,
                    right: 50,
                    transform: [{ translateX: LeftMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/cloud.png')}
                    resizeMode={'contain'}
                    style={{ width: 82, height: 56 }}
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
                    top: 123,
                    right: 14,
                    transform: [{ translateX: LeftMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/lightning.png')}
                    resizeMode={'contain'}
                    style={{ width: 45, height: 72 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 183,
                    right: 30,
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
                    top: 247,
                    right: 80,
                    transform: [{ translateX: LeftMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/lightning.png')}
                    resizeMode={'contain'}
                    style={{ width: 28, height: 45 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 260,
                    right: -30,
                    transform: [{ translateX: LeftMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/cloud.png')}
                    resizeMode={'contain'}
                    style={{ width: 174, height: 120 }}
                />
            </Animated.View>
        </Container>
    );
};

export default Lightning;
