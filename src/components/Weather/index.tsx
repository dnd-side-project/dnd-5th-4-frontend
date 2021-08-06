import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {
    BoxContainer,
    TopContainer,
    DetailWeatherContainer,
    Division,
    MaxTemperature,
    MinTemperature,
    Temperature,
    WeatherImage,
    Container,
    Title,
    Box,
    Information,
} from './styles';
type WeatherProps = {
    currentWeather: any;
    dailyWeather: any;
    weatherMoreShow: any;
    setWeatherMoreShow: any;
    airPollution: any;
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
const airPollutionArray = ['매우좋음', '좋음', '보통', '나쁨', '매우나쁨'];
const Weather: React.FC<WeatherProps> = ({
    currentWeather,
    dailyWeather,
    weatherMoreShow,
    setWeatherMoreShow,
    airPollution,
}) => {
    if (currentWeather.length === 0 || dailyWeather.length === 0) {
        return null;
    }
    let rainfall = currentWeather.rain === null ? 0 : currentWeather.rain['1h'];
    return (
        <Container>
            <TopContainer>
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
                    <MaxTemperature>{parseInt(dailyWeather[0].temp.max)}°</MaxTemperature>
                    <Division>/</Division>
                    <MinTemperature>{parseInt(dailyWeather[0].temp.min)}°</MinTemperature>
                    <Entypo
                        name="chevron-up"
                        size={24}
                        color="#828282"
                        style={{
                            transform: [{ rotate: weatherMoreShow ? '0deg' : '180deg' }],
                        }}
                        onPress={(e) => {
                            setWeatherMoreShow(!weatherMoreShow);
                        }}
                    />
                </BoxContainer>
            </TopContainer>
            {weatherMoreShow && (
                <DetailWeatherContainer>
                    <Box>
                        <Title>습도</Title>
                        <Information>{currentWeather?.main.humidity}%</Information>
                    </Box>
                    <Box>
                        <Title>강수량</Title>
                        <Information>{parseInt(rainfall)}mm</Information>
                    </Box>
                    <Box>
                        <Title>미세</Title>
                        <Information color={'#4068B0'}>{airPollutionArray[airPollution - 1]}</Information>
                    </Box>
                    <Box>
                        <Title>체감온도</Title>
                        <Information color={'#FF4743'}>{parseInt(currentWeather?.main.feels_like)}°</Information>
                    </Box>
                </DetailWeatherContainer>
            )}
        </Container>
    );
};

export default Weather;
