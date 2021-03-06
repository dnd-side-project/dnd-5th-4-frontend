import React, { useEffect, useState } from 'react';

import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KoreaLocations } from '../../untils/Map';
import { Close, CloseTouch, Container, SubTitle, TextFiled, TextFiledContainer, Title, Touch } from './stlyes';
import Environment from '../../secret/Environment';
import axios from 'axios';
import { Button, Next } from '../RegisterNickName/styles';
import Post from '../../components/Post';
import LocationPost from 'components/LocationPost';
import { useNavigation } from '@react-navigation/native';
import { useLocationDispatch } from '../../context/Location';
let LocationWeatherArray: any = [];
const LocationSearch = () => {
    const navigation = useNavigation();
    const locationDispatch = useLocationDispatch();
    const [Locations, setLocations] = useState<any>([]);
    const [keyword, setKeyWord] = useState<string>('');
    const [locationWeather, setLocationWeather] = useState<any>([]);
    const [isClicked, setIsClicked] = useState('');
    const [isLocation, setIsLocation] = useState([]); // 클릭 한 위치에 정보
    const [borderColor, setBorderColor] = useState('#d6d6d7');
    const onFucus = () => {
        setBorderColor('#000000');
    };
    const onBlur = () => {
        setBorderColor('#d6d6d7');
    };
    useEffect(() => {
        KeyWordChange(keyword);
    }, [keyword]);
    const KeyWordChange = async (TEXT: any) => {
        if (TEXT.length < 2) {
            setLocationWeather([]);
            setLocations([]);
            return;
        }
        let newLocationWeather: { Area: any; temp: any; description: any; icon: any }[] = [];
        let NewLocations = KoreaLocations.filter((element) => element.name.includes(TEXT));
        await setLocations(NewLocations);

        // let newLocationWeather = []; //하나씩 넣을거얌
        // console.log(Locations);
        NewLocations.map((location: any) => {
            // CurrentWeatherSearch(location.location[0], location.location[1], location.name);
            let params = {
                lat: location.location[0],
                lon: location.location[1],
                appid: Environment.Weather_API,
                units: 'metric',
                lang: 'kr',
                cnt: 1,
            };

            axios
                .get('https://api.openweathermap.org/data/2.5/find?', { params })
                .then(async (res) => {
                    if (res.status !== 200) {
                        console.log('날씨 정보를 받아오지 못했습니다');
                        return;
                    }
                    //
                    let Array = {
                        lat: location.location[0],
                        lon: location.location[1],
                        Area: location.name,
                        temp: res?.data?.list[0].main.temp,
                        description: res?.data?.list[0].weather[0].description,
                        icon: res?.data?.list[0].weather[0].icon,
                    };
                    newLocationWeather.push(Array);
                    // await setLocationWeather((locationWeather: any) => locationWeather.concat(Array));
                })
                .catch((err) => {
                    console.log('캡치', err, 'err');
                });
        });
        await setLocationWeather(newLocationWeather);
        // await setLocationWeather((locationWeather: any) => locationWeather.concat(LocationWeatherArray));
    };
    // const CurrentWeatherSearch = (lat: number, lng: number, area: string) => {
    //     let params = {
    //         lat: lat,
    //         lon: lng,
    //         appid: Environment.Weather_API,
    //         units: 'metric',
    //         lang: 'kr',
    //         cnt: 1,
    //     };
    //     axios
    //         .get('https://api.openweathermap.org/data/2.5/find?', { params })
    //         .then((res) => {
    //             if (res.status !== 200) {
    //                 console.log('날씨 정보를 받아오지 못했습니다');
    //                 return;
    //             }
    //             //
    //             let Array = {
    //                 Area: area,
    //                 temp: res?.data?.list[0].main.temp,
    //                 description: res?.data?.list[0].weather[0].description,
    //                 icon: res?.data?.list[0].weather[0].icon,
    //             };
    //             LocationWeatherArray.push(Array);
    //             setLocationWeather(LocationWeatherArray);
    //         })
    //         .catch((err) => {
    //             console.log('캡치', err, 'err');
    //         });
    // };
    const CheckLocation = () => {
        let keys = {
            latitude: Math.abs(isLocation?.lat),
            longitude: Math.abs(isLocation?.lon),
        };
        locationDispatch({ type: 'LOCATION', payload: { location: keys } });
        navigation.goBack();
    };
    return (
        <Container>
            <View style={{ flex: 1 }}>
                <Title>원하는 지역을 {'\n'}검색해주세요</Title>
                <SubTitle>현재 날씨와 위치정보를 확인해주세요</SubTitle>
                <CloseTouch onPress={() => navigation.goBack()}>
                    <Close source={require('Images/Close.png')} resizeMode={'contain'} />
                </CloseTouch>
                <TextFiledContainer style={{ borderColor: borderColor }}>
                    <Image
                        source={require('Images/BlackSearch.png')}
                        resizeMode={'contain'}
                        style={{ width: 18, height: 18 }}
                    />
                    <TextFiled
                        // onChangeText={setKeyWord}
                        value={keyword}
                        placeholder="예) 강남구, 진주시"
                        keyboardType="default"
                        onChange={(e) => {
                            setKeyWord(e.nativeEvent.text);
                            // KeyWordChange(e.nativeEvent.text);
                        }}
                        onFocus={onFucus}
                        onBlur={onBlur}
                        style={{
                            flex: 1,
                        }}
                        placeholderTextColor="#717171"
                    />
                    <TouchableOpacity onPress={() => setKeyWord('')}>
                        <Image
                            source={require('Images/GrayClose.png')}
                            resizeMode={'contain'}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                </TextFiledContainer>

                <ScrollView style={{ flex: 1, marginBottom: 28 }}>
                    {locationWeather?.map((locationWeathers: any, index: any) => (
                        <Touch
                            key={index}
                            onPress={(e) => {
                                if (isClicked === index) {
                                    setIsClicked('');
                                    setIsLocation([]);
                                } else {
                                    setIsClicked(index);
                                    setIsLocation(locationWeathers);
                                }
                            }}
                            style={{
                                borderWidth: index !== isClicked ? 1 : 2,
                                borderColor: index !== isClicked ? '#d6d6d7' : '#000',
                            }}
                        >
                            <LocationPost post={locationWeathers} />
                        </Touch>
                    ))}
                </ScrollView>

                <Button
                    color={isLocation.length === 0}
                    onPress={() => CheckLocation()}
                    disabled={isLocation.length === 0}
                >
                    <Next>다음</Next>
                </Button>
            </View>
        </Container>
    );
};
const Array = [
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
    {
        Area: '부산광역시 영도구',
        description: '온흐림',
        icon: '04n',
        temp: 23.09,
    },
];
export default LocationSearch;
