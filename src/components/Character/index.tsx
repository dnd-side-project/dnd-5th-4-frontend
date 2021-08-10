import React, { useEffect, useRef, useState } from 'react';

import { StyleSheet, Animated, Text, View, Button, Image, Dimensions } from 'react-native';
import { Container } from './styles';

type CharacterProps = {
    scrollHeight: number;
};
const Character: React.FC<CharacterProps> = ({ scrollHeight }, props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [imageWidth, setImageWidth] = useState(0);
    useEffect(() => {
        Animated.loop(
            Animated.timing(fadeAnim, {
                toValue: 20,
                duration: 1000,
                useNativeDriver: true,
            }),

            { iterations: 1000 }
        ).start();
    });
    return (
        <Container
            style={{
                height: scrollHeight - 65,
            }}
        >
            <View style={{ position: 'absolute', top: 10, left: -15 }}>
                <Image source={require('WeatherMainImage/sun.png')} resizeMode={'contain'} />
            </View>
            <Image
                source={require('WeatherMainImage/smallCloude.png')}
                resizeMode={'contain'}
                style={{ position: 'absolute', top: 53, right: -30, height: 82 }}
            />
            <Image
                source={require('WeatherMainImage/cloud.png')}
                resizeMode={'contain'}
                style={{ position: 'absolute', bottom: 10, left: -40 }}
            />
            <View style={{ alignItems: 'center' }}>
                <Text>일교차가 클 예쩡이니</Text>
                <Text>겉옷을 챙기세요</Text>
            </View>
            <Image source={require('WeatherMainImage/hot.png')} resizeMode={'contain'} />
            <Animated.View
                style={{
                    position: 'absolute',
                    left: `50%`,
                    bottom: -18,
                    transform: [{ translateY: fadeAnim }],
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
