import React, { useEffect, useState } from 'react';

import { Text, View } from 'react-native';
import axios from 'axios';
import Environment from '../../secret/Environment';
import LocationDate from 'components/LocationDate';
import { Container } from './stlyes';

const lat = 37.541; //위도
const lon = 126.934086; //경도

const Main = () => {
    const [currentWeather, setCurrentWeather] = useState([]); // 현재날씨
    const [hourlyWeather, setHourlyWeather] = useState([]); // 시간대별 날씨
    const [weeklyWeather, setWeeklyWeather] = useState([]); // 주간 날씨
    const [Location, setLocation] = useState([]);
    useEffect(() => {
        KakaoLocation(lat, lon);
        WeatherSearch(lat, lon);
    }, []);
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
            exclude: 'minutely,alerts',
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
                setCurrentWeather(res.data?.current);
                setHourlyWeather(res.data?.hourly.slice(0, 7));
                setWeeklyWeather(res.data?.daily);
            })
            .catch((err) => {
                console.log('err', err);
            });
    };
    return (
        <Container>
            <LocationDate Location={Location} setLocation={setLocation} />
        </Container>
    );
};

export default Main;
