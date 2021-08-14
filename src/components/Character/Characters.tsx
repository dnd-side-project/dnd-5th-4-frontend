import React, { useEffect, useRef, useState } from 'react';
import { Container, Title } from './styles';
import { Animated, Image, Text, View } from 'react-native';
import {
    ArrowDownMove,
    CloudRightMove,
    CloudLeftMove,
    sunAnimation,
    getWeatherImage,
} from '../../untils/MainPageAnimation';
type CharacterProps = {
    currentWeather: number;
};
const Characters: React.FC<CharacterProps> = ({ currentWeather }) => {
    const ArrowMove = useRef(new Animated.Value(0)).current; // arrow
    useEffect(() => {
        ArrowDownMove(ArrowMove);
    });
    const [imageWidth, setImageWidth] = useState(0);
    return (
        <Container
            style={{
                flex: 1,
                zIndex: 100,
            }}
        >
            <View style={{ alignItems: 'center' }}>
                <Title>
                    <Title boldFont={true}>일교차</Title>클 예정이니
                </Title>
                <Title>
                    <Title boldFont={true}>겉옷을 </Title>
                    챙기세요.
                </Title>
            </View>
            <Image source={getWeatherImage(currentWeather)} resizeMode={'contain'} />
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
                        var { width } = event.nativeEvent.layout;
                        setImageWidth(width);
                    }}
                    style={{ marginLeft: -imageWidth / 2 }}
                />
            </Animated.View>
        </Container>
    );
};

export default Characters;
