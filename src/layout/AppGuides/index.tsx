import React from 'react';
import { Image, Text, View } from 'react-native';
import { StepBar, SubTitleText, SubTitleWraper, TitleText, TitleWraper, Container, TopContainer } from './styles';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import Button from '../../components/Button';
import { MoodImage } from '../../untils/MoodWeather';
interface AppGuidesLayoutProps {
    children: React.ReactNode;
    topContents?: string | React.ReactNode;
    titleContents: string;
    subTitleContents: string;
    Images: string;
}
const Title: React.FC = ({ children }) => {
    return <TitleWraper>{children}</TitleWraper>;
};
const SubTitle: React.FC = ({ children }) => {
    return <SubTitleWraper>{children}</SubTitleWraper>;
};
const AppGuidesLayout = ({ children, titleContents, subTitleContents, Images }: AppGuidesLayoutProps) => {
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <TopContainer>
                    {MoodImageArray.map((Moods, index) => (
                        <Image
                            key={index}
                            source={MoodImage[Moods]}
                            style={{
                                position: 'absolute',
                                width: 100,
                                height: 100,
                                top: EmojiLocaion[index][0],
                                left: EmojiLocaion[index][1],
                                transform: [{ rotate: rotateArray[index] }],
                            }}
                        />
                    ))}
                </TopContainer>
                <View style={{ marginTop: 37 }}>
                    <Title>
                        <TitleText>{titleContents}</TitleText>
                    </Title>
                    <SubTitle>
                        <SubTitleText>{subTitleContents}</SubTitleText>
                    </SubTitle>
                    <StepBar source={StempArray[Images]} resizeMode={'contain'} />
                    <Button onPress={on} color={false} disabled={false}>
                        시작하기
                    </Button>
                </View>
            </ThemeProvider>
        </Container>
    );
};
const on = () => {
    console.log(1);
};
export default AppGuidesLayout;
export const StempArray: { [index: string]: any } = {
    First: require('Images/FirstBar.png'),
    Second: require('Images/SecondBar.png'),
    Third: require('Images/ThirdBar.png'),
};
const EmojiLocaion = [
    ['35%', '35%'],
    ['10%', '70%'],
    ['60%', '63%'],
    ['60%', '7%'],
    ['10%', '4%'],
];
const rotateArray = ['-24.17deg', '0deg', '23.57deg', '-17.47deg', '38.12deg'];
const MoodImageArray = ['VERYCOLD', 'COLD', 'VERYHOT', 'GOOD', 'HOT'];
