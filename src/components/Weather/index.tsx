import React, { useState } from 'react';

import { Image, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { BoxContainer, Container, Division, MaxTemperature, MinTemperature, Temperature, WeatherImage } from './styles';

type WeatherProps = {
    currentWeather: any;
    hourlyWeather: Array<string>;
    weeklyWeather: any;
};
// 현재 날씨 currentWeather.weather[0].description
// 현재 아이콘 currentWeather.weather[0].icon
// 최고온도
// 최저온도
// 현재온도 currentWeather.main.temp

// 현재 습도 currentWeather.main.humidity
// 현재 강수량
// 미세먼지
// 체감온도
const Weather: React.FC<WeatherProps> = ({ currentWeather, hourlyWeather, weeklyWeather }) => {
    const [weatherMoreShow, setWeatherMoreShow] = useState(false);
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
    if (currentWeather.length === 0 || weeklyWeather.length === 0 || hourlyWeather.length === 0) {
        return null;
    }
    return (
        <Container>
            {console.log(currentWeather)}
            <BoxContainer>
                <WeatherImage
                    source={WeatherImages[currentWeather?.weather[0].icon]}
                    resizeMode={'contain'}
                    style={{ width: 38, height: 26 }}
                />
                <Temperature>{parseInt(currentWeather?.main.temp)}°</Temperature>
                <Text>{currentWeather?.weather[0].description}</Text>
            </BoxContainer>
            <BoxContainer>
                <MaxTemperature>{parseInt(weeklyWeather[0].temp.max)}°</MaxTemperature>
                <Division>/</Division>
                <MinTemperature>{parseInt(weeklyWeather[0].temp.min)}°</MinTemperature>
                <Entypo
                    name="chevron-up"
                    size={24}
                    color="#828282"
                    style={{ transform: [{ rotate: weatherMoreShow ? '0deg' : '180deg' }] }}
                    onPress={() => {
                        setWeatherMoreShow(!weatherMoreShow);
                    }}
                />
            </BoxContainer>
        </Container>
    );
};

export default Weather;
