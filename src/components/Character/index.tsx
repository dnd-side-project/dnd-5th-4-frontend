import React, { useEffect, useRef, useState } from 'react';

import { StyleSheet, Animated, Text, View, Button, Image, Dimensions } from 'react-native';
import { Container, Title } from './styles';

type CharacterProps = {
    scrollHeight: number;
};
const Character: React.FC<CharacterProps> = ({ scrollHeight }, props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [imageWidth, setImageWidth] = useState(0);
    const screenWidth = Dimensions.get('screen').width;
    const Array = [
        ['일교차', '가 클 예정이니', '겉옷', '을 챙기세요'],
        ['일교차', '낮으니', '겉옷', '을 챙기세요'],
    ];
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
                <Image
                    source={require('WeatherMainImage/sun.png')}
                    resizeMode={'contain'}
                    style={{ width: screenWidth / 4.5 }}
                />
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
