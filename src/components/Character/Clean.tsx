import React from 'react';

import { Text, View } from 'react-native';
type CharacterProps = {
    currentWeather: number;
};
const Clean: React.FC<CharacterProps> = ({ currentWeather }) => {
    return (
        <View>
            <Text>Clean</Text>
        </View>
    );
};

export default Clean;
