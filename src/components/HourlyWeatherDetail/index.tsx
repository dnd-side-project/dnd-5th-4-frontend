import React from 'react';
import {
    Container,
    TimeTitle,
    PrecipitationPercent,
    Temperature,
    Title,
    WeatherIcon,
    MaxMinTemperature,
    Bar,
} from './styles';
import { FlatList, Image, Text, View } from 'react-native';

type HourlyWeatherDetailProps = {
    hourlyWeather: any;
    dailyWeather: any;
};
interface WeatherItem {
    item: any;
    index: number;
}
const HourlyWeatherDetail: React.FC<HourlyWeatherDetailProps> = ({ hourlyWeather, dailyWeather }) => {
    let numCloumns = 7;

    const renderHourlyWeather = ({ item, index }: WeatherItem) => {
        const utc = item.dt * 1000;
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const kr_curr = new Date(utc + KR_TIME_DIFF);
        return (
            <View key={index} style={{ alignItems: 'center' }}>
                <TimeTitle color={index === 0}>{index !== 0 ? kr_curr.getHours() + '시' : '지금'}</TimeTitle>
                <WeatherIcon source={WeatherImages[item?.weather[0].icon]} resizeMode={'contain'} />
                <PrecipitationPercent>{parseInt(String(item.pop * 100))}%</PrecipitationPercent>
                <Temperature>{parseInt(item.temp)}°</Temperature>
            </View>
        );
    };
    const renderDailyWeather = ({ item, index }: WeatherItem) => {
        let Day = ['일', '월', '화', '수', '목', '금', '토'];
        const utc = item.dt * 1000;
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const kr_curr = new Date(utc + KR_TIME_DIFF);
        return (
            <View style={{ alignItems: 'center' }}>
                <TimeTitle color={index === 0}>{index === 0 ? '오늘' : Day[kr_curr.getDay()]}</TimeTitle>
                <MaxMinTemperature>{parseInt(item.temp.max)}°</MaxMinTemperature>
                <Bar />
                <MaxMinTemperature color={true}>{parseInt(item.temp.min)}°</MaxMinTemperature>
                <WeatherIcon
                    source={WeatherImages[item?.weather[0].icon]}
                    resizeMode={'contain'}
                    style={{ marginTop: 10 }}
                />
                <PrecipitationPercent>{parseInt(String(item.pop * 100))}%</PrecipitationPercent>
            </View>
        );
    };
    return (
        <Container>
            <View>
                <Title>시간대별 날씨</Title>
                <FlatList
                    scrollEnabled={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={numCloumns}
                    data={hourlyWeather}
                    renderItem={renderHourlyWeather}
                    keyExtractor={(item, index) => 'key' + index}
                />
            </View>
            <View>
                <Title>주간 날씨</Title>
                <FlatList
                    scrollEnabled={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={7}
                    data={dailyWeather}
                    renderItem={renderDailyWeather}
                    keyExtractor={(item, index) => 'key' + index}
                />
            </View>
        </Container>
    );
};
const WeatherImages: { [index: string]: any } = {
    '01d': require('../../../assets/WeatherImage/02n.png'),
    '02d': require('../../../assets/WeatherImage/02n.png'),
    '03d': require('../../../assets/WeatherImage/02n.png'),
    '04d': require('../../../assets/WeatherImage/02n.png'),
    '09d': require('../../../assets/WeatherImage/02n.png'),
    '10d': require('../../../assets/WeatherImage/02n.png'),
    '11d': require('../../../assets/WeatherImage/02n.png'),
    '13d': require('../../../assets/WeatherImage/02n.png'),
    '01n': require('../../../assets/WeatherImage/02n.png'),
    '02n': require('../../../assets/WeatherImage/02n.png'),
    '03n': require('../../../assets/WeatherImage/02n.png'),
    '04n': require('../../../assets/WeatherImage/02n.png'),
    '09n': require('../../../assets/WeatherImage/02n.png'),
    '10n': require('../../../assets/WeatherImage/02n.png'),
    '11n': require('../../../assets/WeatherImage/02n.png'),
    '13n': require('../../../assets/WeatherImage/02n.png'),
};
export default HourlyWeatherDetail;
