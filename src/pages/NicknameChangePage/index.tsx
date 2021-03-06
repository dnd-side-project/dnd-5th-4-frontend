import React, { useState } from 'react';
import { Alert, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from 'components/Button';
import {
    Container,
    TopContainer,
    BackButton,
    Back,
    Title,
    CloseButton,
    Close,
    ListBox,
    Nickname,
    NicknameInput,
    NicknameInputWrap,
    NicknameDescribe,
    BottomContainer,
} from './styles';
import api from '../../settings/api';
import { useAuthDispatch, useAuthState } from '../../context/Auth';

const NicknameChangePage = () => {
    const authState = useAuthState();
    const user = authState?.user;
    const [nickname, setNickname] = useState('');
    const navigation = useNavigation();
    const authDispatch = useAuthDispatch();
    console.log(user);
    const OnPressButton = () => {
        api.patch(`user/${user?.id}`, { name: nickname })
            .then((res) => {
                if (res.status !== 200 && res.status !== 400) {
                    console.log('로그인변경에 실패하였습니다');
                    return;
                }
                if (res.status === 400) {
                    Alert.alert('해당 닉네임이 이미 존재합니다.');
                    return;
                }
                authDispatch({ type: 'LOGIN', payload: { user: res?.data?.userResponse } });
                Alert.alert('닉네임을 성공적으로 변경하였습니다');
                navigation.goBack();
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    Alert.alert('해당 닉네임이 이미 존재합니다.');
                    return;
                }
                console.log('로그인 변경 에러', err.response);
            });
    };

    return (
        <Container>
            <TopContainer>
                <BackButton
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Back
                        source={require('Images/Back.png')}
                        resizeMode={'contain'}
                        style={{ width: 24, height: 24 }}
                    />
                </BackButton>
                <Title>닉네임변경</Title>
                <CloseButton
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Close source={require('Images/Close.png')} resizeMode={'contain'} />
                </CloseButton>
            </TopContainer>
            <ListBox>
                <Nickname>닉네임</Nickname>
                <NicknameInputWrap>
                    <NicknameInput
                        value={nickname}
                        placeholder="한글/영어/숫자를 사용할 수 있어요. (2~12자)"
                        keyboardType="default"
                        onChange={(e) => {
                            setNickname(e.nativeEvent.text);
                        }}
                        placeholderTextColor="#A5A7AF"
                    />
                </NicknameInputWrap>

                <NicknameDescribe>불쾌감을 줄 수 있는 닉네임은 임의로 변경될 수 있습니다.</NicknameDescribe>
            </ListBox>
            <BottomContainer>
                <Button onPress={OnPressButton} disabled={nickname.length === 0} color={nickname.length === 0}>
                    변경하기
                </Button>
            </BottomContainer>
        </Container>
    );
};

export default NicknameChangePage;
