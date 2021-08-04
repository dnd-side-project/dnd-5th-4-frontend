import React from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BottomContainer, Container, LogoImage, SocialBox, SocialImage, SocialText, TopContainer } from './stlyes';
import { useFonts } from 'expo-font';
const Login = () => {
    let [fontsLoaded] = useFonts({
        'Noto-Sans-CJK-KR': require('Fonts/NotoSansCJKkr-Regular.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <Container>
            <TopContainer>
                <LogoImage source={require('Images/Logo.png')} />
                <Image source={require('Images/LogoText.png')} />
            </TopContainer>
            <BottomContainer>
                <TouchableOpacity>
                    <SocialBox background="#FEE500">
                        <SocialImage
                            widthSize={'23px'}
                            heightSize={'21px'}
                            source={require('Images/KakaoLogo.png')}
                            resizeMode="contain"
                        />
                        <SocialText style={{ fontFamily: 'Noto-Sans-CJK-KR' }}>카카오 로그인</SocialText>
                    </SocialBox>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialBox background="#06BE34">
                        <SocialImage
                            source={require('Images/NaverLogo.png')}
                            resizeMode="contain"
                            widthSize={'20px'}
                            heightSize={'18px'}
                        />
                        <SocialText color="#fff" style={{ fontFamily: 'Noto-Sans-CJK-KR' }}>
                            네이버 로그인
                        </SocialText>
                    </SocialBox>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialBox background="#1977F3">
                        <SocialImage
                            source={require('Images/FaceBookLogo.png')}
                            resizeMode="contain"
                            widthSize={'22px'}
                            heightSize={'22px'}
                        />
                        <SocialText color="#fff" style={{ fontFamily: 'Noto-Sans-CJK-KR' }}>
                            페이스북 로그인
                        </SocialText>
                    </SocialBox>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialBox background="#fff">
                        <SocialImage
                            name={'google'}
                            source={require('Images/GoogleLogo.png')}
                            resizeMode="contain"
                            widthSize={'38px'}
                            heightSize={'38px'}
                        />
                        <SocialText style={{ fontFamily: 'Noto-Sans-CJK-KR' }}>구글 로그인</SocialText>
                    </SocialBox>
                </TouchableOpacity>
            </BottomContainer>
        </Container>
    );
};

export default Login;
