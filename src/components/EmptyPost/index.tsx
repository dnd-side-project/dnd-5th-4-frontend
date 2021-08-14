import React from 'react';
import { Container, EmptyImage, Title } from './styles';
import { Image, Text, View } from 'react-native';

const EmptyPost = () => {
    return (
        <Container>
            <EmptyImage source={require('MoodImageGray/BigEmpty.png')} resizeMode={'contain'} />
            <Title>기록이 없어요 :( {'\n'}기록을 추가해주세요</Title>
        </Container>
    );
};

export default EmptyPost;
