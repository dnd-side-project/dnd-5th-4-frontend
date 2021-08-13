import React from 'react';

import { Text, View } from 'react-native';
type CharacterProps = {
    currentWeather: number;
};
const LittleCloud: React.FC<CharacterProps> = ({ currentWeather }) => {
    return (
        <View>
            <Text>LittleCloud</Text>
        </View>
    );
};

export default LittleCloud;
