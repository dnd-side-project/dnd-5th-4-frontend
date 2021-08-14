import React, { useEffect, useRef } from 'react';

import { Animated, Text, View, Image } from 'react-native';
import { CloudLeftMove, CloudRightMove } from '../../untils/MainPageAnimation';
import { Container } from './styles';
const Smog = () => {
    const SunTurn = new Animated.Value(0); //SUN회전
    const RightMove = useRef(new Animated.Value(1)).current;
    const LeftMove = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        CloudLeftMove(RightMove, 30);
        CloudRightMove(LeftMove, -30);
    });
    return (
        <Container style={{ position: 'absolute', width: '100%' }}>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 196,
                    left: -60,
                    transform: [{ translateX: RightMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/smog.png')}
                    resizeMode={'contain'}
                    style={{ width: 151, height: 151 }}
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 42,
                    right: -10,
                    transform: [{ translateX: RightMove }],
                }}
            >
                <Image
                    source={require('WeatherMainImage/smog.png')}
                    resizeMode={'contain'}
                    style={{ width: 110, height: 110 }}
                />
            </Animated.View>
        </Container>
    );
};

export default Smog;
