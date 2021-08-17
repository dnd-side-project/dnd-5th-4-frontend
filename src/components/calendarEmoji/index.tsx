import React from 'react';

import { Image, Text, View } from 'react-native';
import { MoodImage } from '../../untils/MoodWeather';
import { Emoji, TemperatureHigh, TemperatureLow, Division } from './styles';
interface CalendarEmojiProps {
    post: any;
}
const CalendarEmoji: React.FC<CalendarEmojiProps> = ({ post }) => {
    // "humidity": 70,
    //     "measureId": 22,
    //     "mood": "HOT",
    //     "temperatureHigh": 37,
    //     "temperatureLow": 24.4,
    //     "userId": "testuser1",
    return (
        <View>
            <Emoji source={MoodImage[post?.mood]} resizeMode={'contain'} />
            <View>
                <TemperatureHigh>{parseInt(post?.temperatureHigh)}°</TemperatureHigh>
                <Division />
                <TemperatureLow>{parseInt(post?.temperatureLow)}°</TemperatureLow>
            </View>
        </View>
    );
};

export default CalendarEmoji;
