import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
    children: string;
};

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#000',
        height: 44,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 23,
        letterSpacing: -0.3,
        fontFamily: 'Pretendard500',
        color: '#fff',
    },
});

export default Button;
