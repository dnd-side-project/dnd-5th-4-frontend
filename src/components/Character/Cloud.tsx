import React, { useEffect, useRef } from 'react';

import { Animated, Image, Text, View } from 'react-native';
import { Container, Title } from './styles';
import { CloudLeftMove, CloudRightMove, sunAnimation } from '../../untils/MainPageAnimation';
const Cloud = () => {
    const SunTurn = new Animated.Value(0); //SUN회전
    const RightMove = useRef(new Animated.Value(1)).current;
    const LeftMove = useRef(new Animated.Value(1)).current;
    const interpolatedRotateAnimation = SunTurn.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg'],
    });
    useEffect(() => {
        CloudLeftMove(RightMove, 15);
        CloudRightMove(LeftMove, -15);
    });
    return (
        <Container style={{ position: 'absolute', width: '100%' }}>
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
                    top: 230,
                    left: -20,
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
                    top: 104,
                    left: -20,
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
                    top: 200,
                    right: -50,
                    transform: [{ translateX: LeftMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/cloud.png')}
                    resizeMode={'contain'}
                    style={{ width: 120, height: 82 }}
                />
            </Animated.View>
        </Container>
    );
};

export default Cloud;
