import React from 'react';

import { Text, View } from 'react-native';
type CharacterProps = {
    currentWeather: number;
};

const Rain: React.FC<CharacterProps> = ({ currentWeather }) => {
    return (
        <View>
            <Text>Rain</Text>
        </View>
    );
};

export default Rain;
