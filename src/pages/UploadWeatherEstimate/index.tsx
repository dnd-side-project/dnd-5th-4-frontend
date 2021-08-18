import React, { useEffect, useState } from 'react';
// import Modal from 'react-native-modal';
import { ScrollView, Text, TextInput, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { MoodImageGray, MoodImage } from 'untils/MoodWeather';
import { Button, Next } from 'pages/RegisterNickName/styles';
import EstimateBox from 'components/EstimateBox';
import api from 'settings/api';
import Environment from 'secret/Environment';
import UploadLayout from 'layout/Upload';

import {
    WeatherEstimateWrap,
    EmotionSelectWrap,
    EmotionSelect,
    VeryHot,
    Hot,
    Good,
    Cold,
    VeryCold,
    EmotionText,
    EstimateButton,
    Memo,
    SelectText,
    SelectButton,
} from './styles';

type UploadWeatherEstimateProps = {
    route: any;
};
const UploadWeatherEstimate: React.FC<UploadWeatherEstimateProps> = ({ route }) => {
    const { selectCategory, types, location } = route.params;

    const [isShowEstimateList, setIsShowEstimateList] = useState(false);
    const [isMainMood, setIsMainMood] = useState('');
    const [memo, setMemo] = useState<string>('');
    const [isDaily, setIsDaily] = useState([]);
    const navigation = useNavigation();

    const onMoodHandler = (mood: string) => {
        if (mood === isMainMood) {
            setIsMainMood('');
        } else {
            setIsMainMood(mood);
        }
    };
    useEffect(() => {
        WeatherSearch();
    }, []);
    const WeatherSearch = () => {
        let params = {
            lat: location.latitude,
            lon: location.longitude,
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
                setIsDaily(res?.data?.daily[0]?.temp);
                // console.log(res.data.daily[0].temp);
            })
            .catch((err) => {
                console.log('err', err);
            });
    };

    const onSubmitHandler = () => {
        let params = {
            userId: user?.id,
            date: new Date(+new Date() + 3240 * 10000).toISOString().replace('T', ' ').replace(/\..*/, ''),
            temperatureHigh: isDaily?.max,
            temperatureLow: isDaily?.min,
            humidity: location.humidity,
            area: location.Area,
            tempInfo: location.description,
            dresses: selectCategory,
            mood: isMainMood,
            comment: memo,
        };
        console.log(params);
        api.post('measure/', params)
            .then((res) => {
                if (res.status !== 200) {
                    console.log('게시글 업로드 실패');
                    return;
                }
                Alert.alert('날씨를 업로드했습니다');
                navigation.navigate('Main');
            })
            .catch((err) => {
                console.log('err', err);
            });
    };

    return (
        <UploadLayout
            titleContents1="오늘의 날씨를"
            titleContents2="평가해볼까요?"
            subTitleContents="오늘 하루 느낀 점을 평가해주세요."
        >
            <WeatherEstimateWrap>
                <EmotionSelectWrap>
                    <EmotionSelect>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodHandler('VERYHOT');
                            }}
                        >
                            <VeryHot
                                source={isMainMood === 'VERYHOT' ? MoodImage['VERYHOT'] : MoodImageGray['VERY HOT']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodHandler('HOT');
                            }}
                        >
                            <Hot
                                source={isMainMood === 'HOT' ? MoodImage['HOT'] : MoodImageGray['HOT']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodHandler('GOOD');
                            }}
                        >
                            <Good
                                source={isMainMood === 'GOOD' ? MoodImage['GOOD'] : MoodImageGray['GOOD']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodHandler('COLD');
                            }}
                        >
                            <Cold
                                source={isMainMood === 'COLD' ? MoodImage['COLD'] : MoodImageGray['COLD']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodHandler('VERYCOLD');
                            }}
                        >
                            <VeryCold
                                source={isMainMood === 'VERYCOLD' ? MoodImage['VERYCOLD'] : MoodImageGray['VERY COLD']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                    </EmotionSelect>
                    {/*<EmotionText> {isMainMood === '' ? { &quot; 오늘의 날씨는 &quot;}: 'red'}</EmotionText>*/}
                    <EmotionText style={{ color: !isMainMood ? '#B1B5BC' : MoodColorArray[isMainMood] }}>
                        &quot; {!isMainMood ? '오늘의 날씨는' : MoodArray[isMainMood]}&quot;
                    </EmotionText>
                </EmotionSelectWrap>
                <TouchableWithoutFeedback onPress={() => setIsShowEstimateList(!isShowEstimateList)}>
                    <EstimateButton>
                        <AntDesign name="down" size={24} color="black" iconStyle={{}} />
                        <Text style={{ marginLeft: 5, marginRight: 9 }}>개별 평가하기</Text>
                        <SelectButton>
                            <SelectText>선택</SelectText>
                        </SelectButton>
                    </EstimateButton>
                </TouchableWithoutFeedback>
                <ScrollView style={{ marginTop: 22 }}>
                    {!isShowEstimateList && (
                        <View>
                            {types.map((type: any, index: number) => (
                                <EstimateBox name={type} selectCategory={selectCategory} key={index} />
                            ))}
                        </View>
                    )}
                    <Memo>
                        <TextInput
                            onChangeText={setMemo}
                            value={memo}
                            placeholder="추가 메모(선택)"
                            keyboardType="default"
                        />
                    </Memo>
                </ScrollView>
            </WeatherEstimateWrap>

            <Button
                color={isMainMood.length === 0}
                onPress={() => onSubmitHandler()}
                disabled={isMainMood.length === 0}
            >
                <Next>완료</Next>
            </Button>
        </UploadLayout>
    );
};

export default UploadWeatherEstimate;
let categorysItems = {
    OUTER: '아우터',
    TOP: '상의',
    BOTTOM: '하의',
    SHOES: '신발',
    OTHERS: '기타',
};
let MoodArray = {
    VERYHOT: '너무 더웠어요',
    HOT: '더웠어요',
    GOOD: '좋았어요',
    COLD: '추웠어요',
    VERYCOLD: '너무 추웠어요',
};
let MoodColorArray = {
    VERYHOT: '#FF4743',
    HOT: '#FFD000',
    GOOD: '#2EE788',
    COLD: '#48CFFA',
    VERYCOLD: '#4068B0',
    '': 'B1B5BC',
};
const TYPE = ['OUTER', 'TOP', 'BOTTOM'];
