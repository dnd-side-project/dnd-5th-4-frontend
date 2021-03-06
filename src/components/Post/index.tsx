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
    Circle,
    Blank,
} from './styles';
import { Image, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MoodColor, MoodDescription, MoodImage } from '../../untils/MoodWeather';
import moment from 'moment';

type WeatherDetailProps = {
    post: any;
    isMyPost: boolean;
};

const Post: React.FC<WeatherDetailProps> = ({ post, isMyPost }) => {
    const ClothesType = ['겉옷', '상의', '하의', '신발'];
    const ClothesTypeEng = ['OUTER', 'TOP', 'BOTTOM', 'SHOES'];
    const [showMore, setShowMore] = useState(false);
    let Day = ['일', '월', '화', '수', '목', '금', '토'];
    const userConstitution =
        post?.item.userConstitution === 'HOT'
            ? '더위를 타는 편'
            : post?.item.userConstitution === 'COLD'
            ? '추위를 타는 편'
            : '';
    const PostDate = moment(post?.item.date)?.format('MM월 DD일 ') + Day[moment(post?.item.date).days()] + '요일';
    return (
        <Container showMore={showMore}>
            <TopContainer>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Expression source={MoodImage[post?.item.mood]} resizeMode={'contain'} />
                    <View style={{ height: '100%', justifyContent: 'space-between' }}>
                        {<UserName>{isMyPost ? PostDate : post?.item.userName}</UserName>}
                        <Mood>{MoodDescription[post?.item.mood]}</Mood>
                        <UserType>{isMyPost ? post?.item.area : userConstitution}</UserType>
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
                            // console.log(post);
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
                    {/*{post?.item.dressResponses.map((item: any, index: number) => (*/}
                    {/*    <TypeBox key={index}>*/}
                    {/*        <Clothes>{ClothesType[index]}</Clothes>*/}
                    {/*        {item?.dressName ? (*/}
                    {/*            item?.partialMood ? (*/}
                    {/*                <Circle MoodColor={MoodColor[item?.partialMood]} />*/}
                    {/*            ) : (*/}
                    {/*                <Blank>-</Blank>*/}
                    {/*            )*/}
                    {/*        ) : null}*/}
                    {/*        <ClothesName>{item?.dressName ? item?.dressName : '-'}</ClothesName>*/}
                    {/*    </TypeBox>*/}
                    {/*))}*/}
                    {ClothesTypeEng.map((cloth, index) => (
                        <TypeBox key={index}>
                            <Clothes>{ClothesType[index]}</Clothes>
                            {post?.item.dressResponses.map(
                                (item: any, count: any) =>
                                    cloth === item.dressType && (
                                        <View key={count} style={{ flexDirection: 'row' }}>
                                            {item?.partialMood === 'null' ? null : (
                                                <Circle MoodColor={MoodColor[item?.partialMood]} />
                                            )}
                                            <ClothesName>{item?.dressName ? item?.dressName : '-'}</ClothesName>
                                        </View>
                                    )
                            )}
                        </TypeBox>
                    ))}
                </BottomContainer>
            )}
        </Container>
    );
};
export default Post;
