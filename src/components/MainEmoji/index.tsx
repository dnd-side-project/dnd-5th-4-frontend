import React, { useState } from 'react';

import { Animated, Image, PanResponder, Text, TouchableOpacity, View } from 'react-native';
import { MoodImage } from '../../untils/MoodWeather';
import MainPageModal from '../MainPageModal';
interface RegisterLayoutProps {
    left: number | string;
    bottom: number | string;
    mood: string;
    index: number;
    post: any;
}
const MainEmoji: React.FC<RegisterLayoutProps> = ({ left, bottom, mood, index, post }) => {
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);
    const position = new Animated.ValueXY({ x: 0, y: 0 });
    const pan = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }], { useNativeDriver: false }),
        onPanResponderRelease: () => {
            Animated.spring(position, {
                toValue: { x: 0, y: 10 },
                useNativeDriver: false,
            }).start();
        },
    });
    const rotate = position.x.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg'],
    });
    return (
        <Animated.View
            {...pan.panHandlers}
            style={{
                position: 'absolute',
                bottom: bottom,
                left: left,
                height: 100,
                width: 100,
                transform: [{ translateY: position.y }, { translateX: position.x }, { rotate: rotate }],
            }}
        >
            <MainPageModal isOpenAddModal={isOpenAddModal} setIsOpenAddModal={setIsOpenAddModal} post={post} />
            <TouchableOpacity
                onPress={() => {
                    setIsOpenAddModal(true);
                }}
            >
                <Image
                    source={MoodImage[mood]}
                    style={{ height: 100, width: 100, transform: [{ rotate: rotateArray[index] }] }}
                />
            </TouchableOpacity>
        </Animated.View>
    );
};
const rotateArray = ['-24.17deg', '38.12deg', '0deg', '-17.47deg', '23.57deg'];
export default MainEmoji;
