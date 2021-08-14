import React, { useEffect } from 'react';

import { Animated, Dimensions, Image, Text, View } from 'react-native';
import { Container } from './styles';
import { sunAnimation } from '../../untils/MainPageAnimation';

const Snow = () => {
    const SunTurn = new Animated.Value(0); //SUN회전
    const screenWidth = Dimensions.get('screen').width;
    const interpolatedRotateAnimation = SunTurn.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg'],
    });

    useEffect(() => {
        sunAnimation(SunTurn);
    });
    return (
        <Container style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 49,
                    left: 40,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/snow.png')}
                    resizeMode={'contain'}
                    style={{ width: 37, height: 37 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 105,
                    left: 140,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/snow.png')}
                    resizeMode={'contain'}
                    style={{ width: 56, height: 56 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 68,
                    right: 30,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/snow.png')}
                    resizeMode={'contain'}
                    style={{ width: 27, height: 27 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 183,
                    right: 10,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/snow.png')}
                    resizeMode={'contain'}
                    style={{ width: 54, height: 54 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 196,
                    left: 80,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/snow.png')}
                    resizeMode={'contain'}
                    style={{ width: 27, height: 27 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 260,
                    left: 5,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/snow.png')}
                    resizeMode={'contain'}
                    style={{ width: 37, height: 37 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    bottom: 60,
                    left: 60,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/snow.png')}
                    resizeMode={'contain'}
                    style={{ width: 25, height: 25 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    bottom: 56,
                    right: 3,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/snow.png')}
                    resizeMode={'contain'}
                    style={{ width: 37, height: 37 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    bottom: 121,
                    right: 80,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/snow.png')}
                    resizeMode={'contain'}
                    style={{ width: 25, height: 25 }}
                />
            </Animated.View>
        </Container>
    );
};

export default Snow;
