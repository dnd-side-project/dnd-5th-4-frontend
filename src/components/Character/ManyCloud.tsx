import React from 'react';

import { Animated, Image, Text, View } from 'react-native';
import { Container, Title } from './styles';
import { getWeatherImage } from '../../untils/MainPageAnimation';
type CharacterProps = {
    currentWeather: number;
};
const ManyCloud: React.FC<CharacterProps> = ({ currentWeather }) => {
    return <Container></Container>;
};

export default ManyCloud;
