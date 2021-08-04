import React from 'react';
import styled from 'styled-components/native';
import theme from 'styles/theme';

interface ButtonProps {
    children: string;
    background: string;
    onClick: () => void;
    color: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <ButtonBox background={props.background} onClick={props.onClick}>
            <ButtonText color={props.color}>{children}</ButtonText>
        </ButtonBox>
    );
};

const ButtonBox = styled.TouchableOpacity<{ background: string; onClick: () => void }>`
    background-color: ${(props) => props.background};
`;

const ButtonText = styled.Text<{ color?: string }>`
    color: ${(props) => props.color};
`;

export default Button;
