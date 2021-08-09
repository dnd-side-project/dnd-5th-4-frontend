import React, { useEffect, useState } from 'react';

import { Dimensions, Text, View } from 'react-native';
import { Container, Nav, Title } from './styles';
import { FlatList } from 'react-native-gesture-handler';
import Post from '../Post';
import { Dummy } from '../../untils/Dummy';

const RecordListBox = () => {
    const [isMyPost, setIsMyPost] = useState(true);
    const [posts, setPosts] = useState(Dummy);

    useEffect(() => {}, [isMyPost]);
    const renderPost = (item: any) => {
        return <Post post={item} />;
    };
    const { height } = Dimensions.get('window');
    return (
        <Container style={{ height: height - 200, marginTop: 50 }}>
            <Nav>
                <View style={{ flexDirection: 'row' }}>
                    <Title
                        color={isMyPost}
                        style={{ marginRight: 30 }}
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
                <Text>더운 순</Text>
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
