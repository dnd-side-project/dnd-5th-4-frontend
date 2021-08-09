import React, { useState } from 'react';
import {
    Container,
    Division,
    Expression,
    Temperature,
    UserType,
    Mood,
    TopContainer,
    BottomContainer,
    TypeBox,
    ClothesName,
    Clothes,
    UserName,
} from './styles';
import { Image, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type WeatherDetailProps = {
    post: any;
};

const Post: React.FC<WeatherDetailProps> = ({ post }) => {
    const ClothesType = ['겉옷', '상의', '하의', '신발'];
    const [showMore, setShowMore] = useState(false);

    return (
        <Container>
            <TopContainer>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Expression source={require('../../../assets/images/smile-blue.jpg')} resizeMode={'contain'} />
                    <View style={{ height: '100%', justifyContent: 'space-between' }}>
                        <UserName>{post?.item.userName}</UserName>
                        <Mood>너무 더웠어요</Mood>
                        <UserType>더위를 타는 편</UserType>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Temperature>{parseInt(post?.item.temperatureHigh)}°</Temperature>
                    <Division>/</Division>
                    <Temperature color={'Low'}>{parseInt(post?.item.temperatureLow)}°</Temperature>
                    <Entypo
                        name="chevron-up"
                        size={24}
                        color="#828282"
                        onPress={() => {
                            setShowMore(!showMore);
                        }}
                        style={{
                            marginLeft: 10,
                            transform: [{ rotate: showMore ? '0deg' : '180deg' }],
                        }}
                    />
                </View>
            </TopContainer>
            {showMore && (
                <BottomContainer>
                    {post?.item.dressResponses.map((item: any, index: number) => (
                        <TypeBox key={index}>
                            <Clothes>{ClothesType[index]}</Clothes>
                            <ClothesName>{item?.dressName ? item?.dressName : '-'}</ClothesName>
                        </TypeBox>
                    ))}
                </BottomContainer>
            )}
        </Container>
    );
};

export default Post;
