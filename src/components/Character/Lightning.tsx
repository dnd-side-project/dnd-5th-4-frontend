import React from 'react';

import { Text, View } from 'react-native';
type CharacterProps = {
    currentWeather: number;
};
const Lightning: React.FC<CharacterProps> = ({ currentWeather }) => {
    return (
        <View>
            <Text>Lightning</Text>
        </View>
    );
};

export default Lightning;
