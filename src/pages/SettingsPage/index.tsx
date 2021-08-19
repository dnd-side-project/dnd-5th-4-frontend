import React from 'react';
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

const SettingsPage = () => {
    const navigation = useNavigation();
    const OnPressListElement = (pageName: string) => {
        navigation.navigate(pageName);
    };
    const Logout = () => {
        // 로그아웃
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
                <ListElement onPress={() => OnPressListElement('PrivacyStatement')}>
                    <PrivacyStatement>개인정보 취급방침</PrivacyStatement>
                </ListElement>
                <ListElement onPress={() => OnPressListElement('Question')}>
                    <Question>문의하기</Question>
                </ListElement>
                <ListElement onPress={() => Logout}>
                    <LogOut>로그아웃</LogOut>
                </ListElement>
            </ListBox>
        </Container>
    );
};

export default SettingsPage;
