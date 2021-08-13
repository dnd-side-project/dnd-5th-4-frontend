import React from 'react';

import { Text, View } from 'react-native';
type CharacterProps = {
    currentWeather: number;
};
const Cloud: React.FC<CharacterProps> = ({ currentWeather }) => {
    return (
        <View>
            <Text>Cloud</Text>
        </View>
    );
};

export default Cloud;
