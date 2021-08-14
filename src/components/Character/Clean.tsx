import React, { useEffect, useRef } from 'react';
import { Container, Title } from './styles';
import { Animated, Dimensions, Image, Text, View } from 'react-native';
import {
    ArrowDownMove,
    CloudLeftMove,
    CloudRightMove,
    sunAnimation,
    sunScaleAnimation,
} from '../../untils/MainPageAnimation';

const Clean = () => {
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
        <Container style={{ position: 'absolute' }}>
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
        </Container>
    );
};

export default Clean;
