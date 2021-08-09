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
import { Dimensions, View } from 'react-native';
import { WeatherImages } from '../../untils/WeatherImages';

const windowHeight = Dimensions.get('window').height;
type WeatherDetailProps = {
    hourlyWeather: any;
    dailyWeather: any;
};
const WeatherDetail: React.FC<WeatherDetailProps> = ({ hourlyWeather, dailyWeather }) => {
    const renderHourlyWeather = (item: any, index: number) => {
        const utc = item.dt * 1000;
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const kr_curr = new Date(utc + KR_TIME_DIFF);
        return (
            <View key={index} style={{ alignItems: 'center' }}>
                <TimeTitle color={index === 0}>{index !== 0 ? kr_curr.getUTCHours() + '시' : '지금'}</TimeTitle>
                <WeatherIcon source={WeatherImages[item?.weather[0].icon]} resizeMode={'contain'} />
                <PrecipitationPercent>{parseInt(String(item.pop * 100))}%</PrecipitationPercent>
                <Temperature>{parseInt(item.temp)}°</Temperature>
            </View>
        );
    };
    const renderDailyWeather = (item: any, index: number) => {
        let Day = ['일', '월', '화', '수', '목', '금', '토'];
        const utc = item.dt * 1000;
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const kr_curr = new Date(utc + KR_TIME_DIFF);
        return (
            <View style={{ alignItems: 'center' }} key={index}>
                <TimeTitle color={index === 0}>{index === 0 ? '오늘' : Day[kr_curr.getUTCDay()]}</TimeTitle>
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
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {hourlyWeather.map((item: any, index: number) => renderHourlyWeather(item, index))}
                </View>
            </View>

            <View>
                <Title>주간 날씨</Title>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {dailyWeather.map((item: any, index: number) => renderDailyWeather(item, index))}
                </View>
            </View>
        </Container>
    );
};
export default WeatherDetail;
