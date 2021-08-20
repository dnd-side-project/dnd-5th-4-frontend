import React from 'react';
import { Text, View } from 'react-native';
import { StepBar, SubTitleText, SubTitleWraper, TitleText, TitleWraper, Container, TopContainer } from './styles';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import Button from '../../components/Button';
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
                <TopContainer></TopContainer>
                <View style={{ marginTop: 37 }}>
                    <Title>
                        <TitleText>{titleContents}</TitleText>
                    </Title>
                    <SubTitle>
                        <SubTitleText>{subTitleContents}</SubTitleText>
                    </SubTitle>
                    <StepBar source={MoodImage[Images]} resizeMode={'contain'} />
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
export const MoodImage: { [index: string]: any } = {
    First: require('Images/FirstBar.png'),
    Second: require('Images/SecondBar.png'),
    Third: require('Images/ThirdBar.png'),
};
