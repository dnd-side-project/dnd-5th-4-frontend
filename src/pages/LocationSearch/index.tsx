import React, { useEffect, useState } from 'react';

import { Text, TextInput, View } from 'react-native';
import { KoreaLocations } from '../../untils/Map';
import { TextFiled } from './stlyes';
import Environment from '../../secret/Environment';
import axios from 'axios';

const LocationSearch = () => {
    const [Locations, setLocations] = useState<any>([]);
    const [keyword, setKeyWord] = useState<string>('부산');
    const [locationWeather, setLocationWeather] = useState<any>([]);

    useEffect(() => {
        if (keyword.length < 2) {
            return;
        }
        setLocations(KoreaLocations.filter((element) => element.name.includes(keyword)));
    }, [keyword]);
    useEffect(() => {
        if (Locations.length === 0) {
            return;
        }
        // Locations.map((location: any) => {
        //     CurrentWeatherSearch(
        //         location.location[0],
        //         location.location[1],
        //         location?.name.replace(/광역시|특별시/gi, '')
        //     );
        // });
        CurrentWeatherSearch(35.225965, 126.896252, '부산');
    }, [Locations]);

    const CurrentWeatherSearch = (lat: number, lng: number, area: string) => {
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
                // let getArray = [];
                // getArray.push({ Area: area });
                // getArray.push({ temp: res?.data?.list[0].main.temp });
                // getArray.push({ description: res?.data?.list[0].weather[0].description });
                // getArray.push({ icon: res?.data?.list[0].weather[0].icon });
                //
                let Array = [
                    {
                        Area: area,
                        temp: res?.data?.list[0].main.temp,
                        description: res?.data?.list[0].weather[0].description,
                        icon: res?.data?.list[0].weather[0].icon,
                    },
                ];
                setLocationWeather(locationWeather.concat(Array));
                // let cad = Array.concat(Array);
                // console.log(cad);

                // setLocationWeather([...locationWeather, Array]);
            })
            .catch((err) => {
                console.log('캡치', err, 'err');
            });
    };
    //
    return (
        <View>
            <Text>LocationSearch</Text>
            <TextFiled
                onChangeText={setKeyWord}
                value={keyword}
                placeholder="useless placeholder"
                keyboardType="default"
            />
        </View>
    );
};

export default LocationSearch;
