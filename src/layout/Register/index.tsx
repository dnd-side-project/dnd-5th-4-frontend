import Button from 'components/Button';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { Container, TopContainer, TitleWraper, Contents, BottomContainer } from './styles';

interface RegisterLayoutProps {
    children: React.ReactNode;
    topContents: React.ReactNode;
    titleContents: React.ReactNode;
}

const Title: React.FC = ({ children }) => {
    return <TitleWraper>{children}</TitleWraper>;
};

const RegisterLayout = ({ children, topContents, titleContents }: RegisterLayoutProps) => {
    const onClick = () => {};

    return (
        <Container>
            <ThemeProvider theme={theme}>
                <TopContainer>{topContents}</TopContainer>
                <Title>{titleContents}</Title>
                <Contents>{children}</Contents>
                <BottomContainer>
                    <Button>{buttonText}</Button>
                </BottomContainer>
            </ThemeProvider>
        </Container>
    );
};

export default RegisterLayout;
