import React from 'react';

import { Text, View } from 'react-native';
type CharacterProps = {
    currentWeather: number;
};

const Smog: React.FC<CharacterProps> = ({ currentWeather }) => {
    return (
        <View>
            <Text>Smog</Text>
        </View>
    );
};

export default Smog;
