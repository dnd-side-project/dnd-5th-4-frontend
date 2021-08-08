import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Environment from '../../secret/Environment';
import LocationDate from 'components/LocationDate';
import { Container, WeatherContainer } from './stlyes';
import Weather from 'components/Weather';
import WeatherDetail from 'components/WeatherDetail';
import { Dimensions, ScrollView, View, Text } from 'react-native';

const Main = () => {
    const [currentWeather, setCurrentWeather] = useState([]); // 현재날씨
    const [hourlyWeather, setHourlyWeather] = useState([]); // 시간대별 날씨
    const [dailyWeather, setDailyWeather] = useState([]); // 주간 날씨
    const [Location, setLocation] = useState([]);
    const [weatherMoreShow, setWeatherMoreShow] = useState(true);
    const [airPollution, setAirPollution] = useState('');
    const windowHeight = Dimensions.get('window').height;
    const lat = 37.541; //위도
    const lon = 126.934086; //경도
    useEffect(() => {
        KakaoLocation(lat, lon);
        WeatherSearch(lat, lon);
        CurrentWeatherSearch(lat, lon);
        airPollutionSearch(lat, lon);
    }, [lat, lon]);
    const airPollutionSearch = (lat: number, lng: number) => {
        let params = {
            lat: lat,
            lon: lng,
            appid: Environment.Weather_API,
        };
        axios
            .get('https://api.openweathermap.org/data/2.5/air_pollution?', { params })
            .then((res) => {
                if (res.status !== 200) {
                    console.log('날씨 정보를 받아오지 못했습니다');
                    return;
                }
                setAirPollution(res?.data?.list[0].main.aqi);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const CurrentWeatherSearch = (lat: number, lng: number) => {
        let params = {
            lat: lat,
            lon: lng,
            appid: Environment.Weather_API,
            units: 'metric',
            lang: 'kr',
            cnt: 1,
        };
        axios
            .get('https://api.openweathermap.org/data/2.5/find?', { params })
            .then((res) => {
                if (res.status !== 200) {
                    console.log('날씨 정보를 받아오지 못했습니다');
                    return;
                }
                setCurrentWeather(res?.data?.list[0]);
            })
            .catch((err) => {
                console.log('err');
            });
    };
    const KakaoLocation = (lat: number, lng: number) => {
        axios
            .get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lng}8&y=${lat}`, {
                headers: {
                    Authorization: `KakaoAK ${Environment.Kakao_API}`,
                },
            })
            .then((res) => {
                if (res.status !== 200) {
                    console.log('지역명을 받아오지 못했습니다');
                    return;
                }
                const LocationName = res.data?.documents[0].address_name.split(' ');
                setLocation(LocationName);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const WeatherSearch = (lat: number, lng: number) => {
        let params = {
            lat: lat,
            lon: lng,
            exclude: 'minutely,alerts,current',
            appid: Environment.Weather_API,
            units: 'metric',
            lang: 'kr',
        };
        axios
            .get('https://api.openweathermap.org/data/2.5/onecall?', { params })
            .then((res) => {
                if (res.status !== 200) {
                    console.log('날씨 정보를 받아오지 못했습니다');
                    return;
                }
                setHourlyWeather(res.data?.hourly.slice(0, 7));
                setDailyWeather(res.data?.daily.slice(0, 7));
            })
            .catch((err) => {
                console.log('err', err);
            });
    };

    return (
        <Container contentContainerStyle={{ flex: 1 }}>
            <LocationDate Location={Location} setLocation={setLocation} />
            <Weather
                currentWeather={currentWeather}
                airPollution={airPollution}
                dailyWeather={dailyWeather}
                weatherMoreShow={weatherMoreShow}
                setWeatherMoreShow={setWeatherMoreShow}
            />

            <View style={{ flex: 1 }}>
                {weatherMoreShow && <WeatherDetail hourlyWeather={hourlyWeather} dailyWeather={dailyWeather} />}
            </View>
        </Container>
    );
};

export default Main;
