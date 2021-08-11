import React, { useEffect, useState } from 'react';

import { Dimensions, Text, View } from 'react-native';
import { Container, Nav, Title } from './styles';
import { FlatList } from 'react-native-gesture-handler';
import Post from '../Post';
import { Dummy } from '../../untils/Dummy';
type ScrollHeightProps = {
    scrollHeight: number;
};
const RecordListBox: React.FC<ScrollHeightProps> = ({ scrollHeight }) => {
    const [isMyPost, setIsMyPost] = useState(true);
    const [posts, setPosts] = useState(Dummy);

    useEffect(() => {}, [isMyPost]);
    const renderPost = (item: any) => {
        return <Post post={item} />;
    };
    const { height } = Dimensions.get('screen');
    return (
        <Container style={{ height: scrollHeight }}>
            <Nav>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                    <Title
                        color={isMyPost}
                        onPress={() => {
                            setIsMyPost(true);
                        }}
                    >
                        내 기록
                    </Title>

                    <Title
                        color={!isMyPost}
                        onPress={() => {
                            setIsMyPost(false);
                        }}
                    >
                        다른 유저들의 기록
                    </Title>
                </View>
            </Nav>
            <FlatList
                // ListHeaderComponent={HeaderComponent}
                nestedScrollEnabled
                data={posts}
                renderItem={renderPost}
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    );
};

export default RecordListBox;
