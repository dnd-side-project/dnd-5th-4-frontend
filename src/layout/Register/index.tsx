import Button from 'components/Button';
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { AntDesign } from '@expo/vector-icons';
import {
    Container,
    TopContainer,
    TitleContainer,
    TitleWraper,
    Contents,
    BottomContainer,
    SubTitleWraper,
    StepBar,
} from './styles';

interface RegisterLayoutProps {
    children: React.ReactNode;
    topContents: React.ReactNode;
    titleContents: React.FC;
    subTitleContents: React.FC;
    buttonText: string;
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
                        <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            alert('건너뛰기 button clicked');
                        }}
                    >
                        <Text style={{ color: '' }}>건너뛰기</Text>
                    </TouchableOpacity>
                </TopContainer>
                <TitleContainer>
                    <View style={{ flexDirection: 'column', flex: 1, backgroundColor: 'yellow' }}>
                        <Title>
                            {titleContents}
                            <Text>체질을 기입해주세요</Text>
                        </Title>
                        <SubTitle>
                            {subTitleContents}
                            <Text>
                                체질 정보는 옷 추천 기능에서 활용됩니다.
                                {'\n'}
                                해당되지 않는다면 건너뛰기를 눌러주세요.
                            </Text>
                        </SubTitle>
                    </View>
                    <StepBar />
                </TitleContainer>

                <Contents>{children}</Contents>
                <BottomContainer>
                    <Button>{buttonText}</Button>
                </BottomContainer>
            </ThemeProvider>
        </Container>
    );
};

export default RegisterLayout;
