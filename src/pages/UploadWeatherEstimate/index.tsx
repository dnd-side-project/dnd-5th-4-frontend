import React, { useEffect, useState } from 'react';
// import Modal from 'react-native-modal';
import { ScrollView, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import {
    WeatherEstimateWrap,
    EmotionSelectWrap,
    EmotionSelect,
    Mood,
    VeryHot,
    Hot,
    Good,
    Cold,
    VeryCold,
    EmotionText,
    EstimateButton,
    Memo,
    MoodText,
    EstimateComponent,
    EstimateCategory,
    EstimateEmotionSelect,
    SelectText,
    SelectButton,
} from './styles';
import UploadLayout from 'layout/Upload';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { MoodImageGray, MoodImage, MoodColor } from '../../untils/MoodWeather';

const EstimateBox = ({ name }) => {
    const [isCategoryMood, setIsCategoryMood] = useState('');
    const [selectMood, setSelectMood] = useState([]);
    const onCategoryMoodHandler = (mood: string) => {
        if (mood === isCategoryMood) {
            setIsCategoryMood('');
        } else {
            setIsCategoryMood(mood);
        }
    };
    useEffect(() => {
        console.log(Array.filter((ele) => ele.type));
    }, []);

    return (
        <EstimateComponent>
            <EstimateCategory>{name}</EstimateCategory>
            <EstimateEmotionSelect>
                <Mood
                    onPress={() => {
                        onCategoryMoodHandler('VERYHOT');
                    }}
                >
                    <View>
                        <VeryHot
                            source={isCategoryMood === 'VERYHOT' ? MoodImage['VERYHOT'] : MoodImageGray['VERY HOT']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isCategoryMood === 'VERYHOT' ? '너무 \n더웠어요' : ' '}</MoodText>
                    </View>
                </Mood>
                <Mood
                    onPress={() => {
                        onCategoryMoodHandler('HOT');
                    }}
                >
                    <View>
                        <Hot
                            source={isCategoryMood === 'HOT' ? MoodImage['HOT'] : MoodImageGray['HOT']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isCategoryMood === 'HOT' ? '더웠어요' : ' '}</MoodText>
                    </View>
                </Mood>
                <Mood
                    onPress={() => {
                        onCategoryMoodHandler('GOOD');
                    }}
                >
                    <View>
                        <Good
                            source={isCategoryMood === 'GOOD' ? MoodImage['GOOD'] : MoodImageGray['GOOD']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isCategoryMood === 'GOOD' ? '좋았어요' : ' '}</MoodText>
                    </View>
                </Mood>
                <Mood
                    onPress={() => {
                        onCategoryMoodHandler('COLD');
                    }}
                >
                    <View>
                        <Cold
                            source={isCategoryMood === 'COLD' ? MoodImage['COLD'] : MoodImageGray['COLD']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isCategoryMood === 'COLD' ? '추웠어요' : ' '}</MoodText>
                    </View>
                </Mood>
                <Mood
                    onPress={() => {
                        onCategoryMoodHandler('VERYCOLD');
                    }}
                >
                    <View>
                        <VeryCold
                            source={isCategoryMood === 'VERYCOLD' ? MoodImage['VERYCOLD'] : MoodImageGray['VERY COLD']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isCategoryMood === 'VERYCOLD' ? '너무 \n 추웠어요' : ' '}</MoodText>
                    </View>
                </Mood>
            </EstimateEmotionSelect>
        </EstimateComponent>
    );
};

const UploadWeatherEstimate = () => {
    const [isShowEstimateList, setIsShowEstimateList] = useState(false);
    const [isMainMood, setIsMainMood] = useState('');
    const onMoodHandler = (mood: string) => {
        if (mood === isMainMood) {
            setIsMainMood('');
        } else {
            setIsMainMood(mood);
        }
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
    const [memo, setMemo] = useState<string>('');

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
                            <EstimateBox name={'겉옷'} />
                            <EstimateBox name={'상의'} />
                            <EstimateBox name={'하의'} />
                            <EstimateBox name={'신발'} />
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
        </UploadLayout>
    );
};

export default UploadWeatherEstimate;

const Array = [
    {
        id: 32,
        name: '연청바지',
        type: 'BOTTOM',
        userId: 'testuser1',
    },
    {
        id: 32,
        name: '연청바지',
        type: 'BOTTOM',
        userId: 'testuser1',
    },
    {
        id: 746,
        name: '빨간 반팔',
        type: 'TOP',
        userId: 'testuser1',
    },
    {
        id: 751,
        name: '노랑 반팔',
        type: 'TOP',
        userId: 'testuser1',
    },
    {
        id: 804,
        name: '패딩이쁜거',
        type: 'OUTER',
        userId: 'testuser1',
    },
    {
        id: 802,
        name: '빈폴패딩',
        type: 'OUTER',
        userId: 'testuser1',
    },
];
