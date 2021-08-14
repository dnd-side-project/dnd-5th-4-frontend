import React, { useEffect, useRef } from 'react';

import { Animated, Image, Text, View } from 'react-native';
import { Container } from './styles';
import { ArrowDownMove, CloudLeftMove, CloudRightMove, sunAnimation } from '../../untils/MainPageAnimation';

const LittleCloud = () => {
    const SunTurn = new Animated.Value(0); //SUN회전
    const RightMove = useRef(new Animated.Value(1)).current;
    const LeftMove = useRef(new Animated.Value(1)).current;
    const interpolatedRotateAnimation = SunTurn.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg'],
    });
    useEffect(() => {
        sunAnimation(SunTurn);
        CloudLeftMove(RightMove, 15);
        CloudRightMove(LeftMove, -15);
    });

    return (
        <Container style={{ position: 'absolute', width: '100%' }}>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 25,
                    left: 10,
                    transform: [{ rotate: interpolatedRotateAnimation }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/sun.png')}
                    resizeMode={'contain'}
                    style={{ width: 156, height: 156 }}
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

export default LittleCloud;
