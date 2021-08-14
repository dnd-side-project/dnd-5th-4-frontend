import Button from 'components/Button';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
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

interface RegisterLayoutProps {
    children: React.ReactNode;
    titleContents1: string;
    titleContents2: string;
    subTitleContents: string;
    buttonText: string;
    OnPressButton: () => void;
}

const Title: React.FC = ({ children }) => {
    return <TitleWraper>{children}</TitleWraper>;
};
const SubTitle: React.FC = ({ children }) => {
    return <SubTitleWraper>{children}</SubTitleWraper>;
};

const UploadLayout = ({
    children,
    titleContents1,
    titleContents2,
    subTitleContents,
    buttonText,
    OnPressButton,
}: RegisterLayoutProps) => {
    let [fontsLoaded] = useFonts({
        'Noto-Sans-CJK-KR': require('Fonts/NotoSansCJKkr-Regular.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <Container>
            <ThemeProvider theme={theme}>
                <TopContainer>
                    {/* {topContents} */}
                    <TouchableOpacity
                        onPress={() => {
                            alert('back button clicked');
                            // this.props.navigation.goBack();
                        }}
                    >
                        <AntDesign name="left" size={24} color="black" iconStyle={{ left: 0 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            alert('건너뛰기 button clicked');
                        }}
                    >
                        <AntDesign name="close" size={24} color="black" iconStyle={{ left: 0 }} />
                    </TouchableOpacity>
                </TopContainer>
                <TitleContainer>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Title>
                            <TitleText>{titleContents1}</TitleText>
                            <TitleText>{titleContents2}</TitleText>
                        </Title>
                        <SubTitle>
                            <SubTitleText>{subTitleContents}</SubTitleText>
                        </SubTitle>
                    </View>
                    <StepBar />
                </TitleContainer>

                <Contents>{children}</Contents>
                <BottomContainer>
                    <Button onPress={OnPressButton}>{buttonText}</Button>
                </BottomContainer>
            </ThemeProvider>
        </Container>
    );
};

export default UploadLayout;
