import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

type ButtonProps = {
    children: string;
    onPress: () => void;
    color: boolean;
    disabled: boolean;
};

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <ButtonWrap onPress={props.onPress} disabled={props.disabled} color={props.color}>
            <Text style={styles.text}>{children}</Text>
        </ButtonWrap>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 23,
        letterSpacing: -0.3,
        fontFamily: 'Pretendard500',
        color: '#fff',
    },
});

const ButtonWrap = styled.TouchableOpacity<{ color?: boolean }>`
    align-items: center;
    background: ${(props) => (props.color ? '#CACCD6' : '#000000')};
    height: 44;
    justify-content: center;
    border-radius: 4px;
`;

export default Button;
