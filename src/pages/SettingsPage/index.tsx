import React from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    TopContainer,
    BackButton,
    Back,
    Title,
    CloseButton,
    Close,
    ListBox,
    ListElement,
    NicknameChange,
    AlertSetting,
    PrivacyStatement,
    Question,
    LogOut,
} from './styles';
import { useAuthDispatch, useAuthState } from '../../context/Auth';
import { Alert } from 'react-native';
import { useLocationDispatch } from '../../context/Location';

const SettingsPage = () => {
    const authDispatch = useAuthDispatch();
    const locationDispatch = useLocationDispatch();
    const navigation = useNavigation();
    const OnPressListElement = (pageName: string) => {
        navigation.navigate(pageName);
    };
    const openPrivacyStatementSite = () => {
        Linking.openURL('https://www.termsfeed.com/live/6d9cde38-abd2-4d97-90dc-31734ba700a5');
    };

    const mailTo = () => {
        Linking.openURL(`mailto:jeonghye9808@naver.com`);
    };
    const Logout = () => {
        // 로그아웃
        authDispatch({ type: 'LOGIN', payload: { user: null } });
        locationDispatch({ type: 'LOCATION', payload: { location: null } });
        Alert.alert('로그아웃 성공');
        navigation.navigate('Login');
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
                <Title>설정</Title>
                <CloseButton
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Close source={require('Images/Close.png')} resizeMode={'contain'} />
                </CloseButton>
            </TopContainer>
            <ListBox>
                <ListElement onPress={() => OnPressListElement('NicknameChangePage')}>
                    <NicknameChange>닉네임 변경</NicknameChange>
                </ListElement>
                <ListElement onPress={() => OnPressListElement('AlertSettingPage')}>
                    <AlertSetting>알림 설정</AlertSetting>
                </ListElement>
                <ListElement onPress={() => openPrivacyStatementSite()}>
                    <PrivacyStatement>개인정보 취급방침</PrivacyStatement>
                </ListElement>
                <ListElement onPress={() => mailTo()}>
                    <Question>문의하기</Question>
                </ListElement>
                <ListElement onPress={() => Logout()}>
                    <LogOut>로그아웃</LogOut>
                </ListElement>
            </ListBox>
        </Container>
    );
};

export default SettingsPage;
