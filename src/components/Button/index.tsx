import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ButtonProps = {
    children: string;
};

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        // backgroundColor: ${(props) => props.background},
        backgroundColor: '#000',
        height: 44,
        justifyContent: 'center',
    },
    text: {
        // color: ${(props) => props.color};
        color: '#fff',
    },
});

export default Button;
