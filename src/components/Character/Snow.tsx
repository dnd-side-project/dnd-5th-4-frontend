import React from 'react';

import { Text, View } from 'react-native';
type CharacterProps = {
    currentWeather: number;
};

const Snow: React.FC<CharacterProps> = ({ currentWeather }) => {
    return (
        <View>
            <Text>Snow</Text>
        </View>
    );
};

export default Snow;
