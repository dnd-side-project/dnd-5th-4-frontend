import React from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BottomContainer, Container, LogoImage, SocialBox, SocialImage, SocialText, TopContainer } from './stlyes';

const Login = () => {
    return (
        <Container>
            <TopContainer>
                <LogoImage source={require('../../../assets/Image/Logo.png')} />
                <Image source={require('../../../assets/Image/LogoText.png')} />
            </TopContainer>
            <BottomContainer>
                <TouchableOpacity>
                    <SocialBox background="#FEE500">
                        <SocialImage source={require('../../../assets/Image/KakaoLogo.png')} />
                        <SocialText>카카오 로그인</SocialText>
                    </SocialBox>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialBox background="#06BE34">
                        <SocialImage source={require('../../../assets/Image/NaverLogo.png')} />
                        <SocialText color="#fff">네이버 로그인</SocialText>
                    </SocialBox>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialBox background="#1977F3">
                        <SocialImage source={require('../../../assets/Image/FaceBookLogo.png')} />
                        <SocialText color="#fff">페이스북 로그인</SocialText>
                    </SocialBox>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialBox background="#fff">
                        <SocialImage source={require('../../../assets/Image/GoogleLogo.png')} />
                        <SocialText>구글 로그인</SocialText>
                    </SocialBox>
                </TouchableOpacity>
            </BottomContainer>
        </Container>
    );
};

export default Login;
