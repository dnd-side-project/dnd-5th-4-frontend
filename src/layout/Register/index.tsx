import Button from 'components/Button';
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import {
    Container,
    TopContainer,
    TitleContainer,
    TitleWraper,
    Contents,
    BottomContainer,
    SubTitleWraper,
    StepBar,
    TitleText,
    SubTitleText,
} from './styles';
import { useNavigation } from '@react-navigation/native';

interface RegisterLayoutProps {
    children: React.ReactNode;
    topContents?: string | React.ReactNode;
    titleContents: string;
    subTitleContents: string;
    buttonText?: string | any;
}

const Title: React.FC = ({ children }) => {
    return <TitleWraper>{children}</TitleWraper>;
};
const SubTitle: React.FC = ({ children }) => {
    return <SubTitleWraper>{children}</SubTitleWraper>;
};
const RegisterLayout = ({
    children,
    topContents,
    titleContents,
    subTitleContents,
    buttonText,
}: RegisterLayoutProps) => {
    let [fontsLoaded] = useFonts({
        'Noto-Sans-CJK-KR': require('Fonts/NotoSansCJKkr-Regular.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    const navigation = useNavigation();
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <TopContainer>
                    {/* {topContents} */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                            // alert('back button clicked');
                            // this.props.navigation.goBack();
                        }}
                    >
                        <Image
                            source={require('Images/Back.png')}
                            resizeMode={'contain'}
                            style={{ width: 24, height: 24 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            alert('건너뛰기 button clicked');
                        }}
                    >
                        <Text style={{ fontFamily: 'Noto-Sans-CJK-KR' }}>{topContents}</Text>
                    </TouchableOpacity>
                </TopContainer>
                <TitleContainer>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Title>
                            <TitleText>{titleContents}</TitleText>
                        </Title>
                        <SubTitle>
                            <SubTitleText>{subTitleContents}</SubTitleText>
                        </SubTitle>
                    </View>
                    <StepBar />
                </TitleContainer>

                <Contents>{children}</Contents>
                {buttonText && (
                    <BottomContainer>
                        <Button>{buttonText}</Button>
                    </BottomContainer>
                )}
            </ThemeProvider>
        </Container>
    );
};

export default RegisterLayout;
