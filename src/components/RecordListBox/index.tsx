import React, { useEffect, useState } from 'react';

import { Dimensions, Text, View } from 'react-native';
import { Container, Nav, Title } from './styles';
import { FlatList } from 'react-native-gesture-handler';
import Post from '../Post';
import { Dummy } from '../../untils/Dummy';
import api from '../../settings/api';
import EmptyPost from '../EmptyPost';

import { useAuthState } from 'context/Auth';
import { useIsFocused } from '@react-navigation/native';

type ScrollHeightProps = {
    scrollHeight: number;
    dailyWeather: any;
};
const RecordListBox: React.FC<ScrollHeightProps> = ({ scrollHeight, dailyWeather }) => {
    const [isMyPost, setIsMyPost] = useState(true);
    const isFocused = useIsFocused();
    const [lastMeasuerId, setLastMeansureId] = useState(Number.MAX_SAFE_INTEGER);
    const [posts, setPosts] = useState([]);
    const authState = useAuthState();
    const user = authState?.user;

    useEffect(() => {
        fetchPost(isMyPost);
    }, [dailyWeather, isMyPost, isFocused]);
    const renderPost = (item: any) => {
        return <Post post={item} isMyPost={isMyPost} />;
    };
    const fetchPost = (isMyPost: boolean) => {
        let humid = dailyWeather[0]?.humidity;
        let maxTemp = dailyWeather[0]?.temp.max;
        let minTemp = dailyWeather[0]?.temp.min;
        let pageSize = 7;
        let measureType = isMyPost ? 'user' : 'others';
        setPosts([]);
        let params = {
            userId: user?.id,
            tempHigh: maxTemp,
            tempLow: minTemp,
            humid: humid,
            lastMeasureId: Number.MAX_SAFE_INTEGER,
            size: pageSize,
            measureType: measureType,
        };

        api.get('measure?', { params })
            .then((res) => {
                if (res.status !== 200) {
                    console.log('포스트 정보를 받아오지 못했습니다');
                    return;
                }

                setPosts(res?.data.measures);
                setLastMeansureId(res?.data?.measures?.measureId);
            })
            .catch((err) => {
                console.log('get', err);
            });
    };
    return (
        <Container style={{ height: scrollHeight }}>
            <Nav>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                    <Title
                        color={isMyPost}
                        onPress={(e) => {
                            e.preventDefault();
                            if (!isMyPost) {
                                setIsMyPost(true);
                                // fetchPost(isMyPost);
                            }
                        }}
                    >
                        내 기록
                    </Title>

                    <Title
                        color={!isMyPost}
                        onPress={(e) => {
                            e.preventDefault();
                            if (isMyPost) {
                                setIsMyPost(false);
                                // fetchPost(isMyPost);
                            }
                        }}
                    >
                        다른 유저 기록
                    </Title>
                </View>
            </Nav>
            {posts?.length === 0 ? (
                <EmptyPost />
            ) : (
                <FlatList
                    // ListHeaderComponent={HeaderComponent}
                    nestedScrollEnabled
                    data={posts}
                    renderItem={renderPost}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </Container>
    );
};

export default RecordListBox;
