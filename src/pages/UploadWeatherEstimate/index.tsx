import React, { useState } from 'react';
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

const EstimateBox = () => {
    // const [isMoodClicked, setIsMoodClicked] = useState(false);
    const [isVeryHotMoodClicked, setVeryHotMoodClicked] = useState(false);
    const [isHotMoodClicked, setHotMoodClicked] = useState(false);
    const [isGoodMoodClicked, setIsGoodMoodClicked] = useState(false);
    const [isColdMoodClicked, setIsColdMoodClicked] = useState(false);
    const [isVeryColdMoodClicked, setIsVeryColdMoodClicked] = useState(false);
    const onMoodClick = () => {
        setVeryHotMoodClicked(false);
        setHotMoodClicked(false);
        setIsGoodMoodClicked(false);
        setIsColdMoodClicked(false);
        setIsVeryColdMoodClicked(false);
    };

    let [fontsLoaded] = useFonts({
        'Noto-Sans-CJK-KR': require('Fonts/NotoSansCJKkr-Regular.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <EstimateComponent>
            <EstimateCategory>겉옷</EstimateCategory>
            <EstimateEmotionSelect>
                <Mood
                    onPress={() => {
                        onMoodClick();
                        setVeryHotMoodClicked(!isVeryHotMoodClicked);
                    }}
                >
                    <View>
                        <VeryHot
                            source={isVeryHotMoodClicked ? MoodImage['VERY HOT'] : MoodImageGray['VERY HOT']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isVeryHotMoodClicked ? '너무 \n더웠어요' : ' '}</MoodText>
                    </View>
                </Mood>
                <Mood
                    onPress={() => {
                        onMoodClick();
                        setHotMoodClicked(!isHotMoodClicked);
                    }}
                >
                    <View>
                        <Hot
                            source={isHotMoodClicked ? MoodImage['HOT'] : MoodImageGray['HOT']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isHotMoodClicked ? '더웠어요' : ' '}</MoodText>
                    </View>
                </Mood>
                <Mood
                    onPress={() => {
                        onMoodClick();
                        setIsGoodMoodClicked(!isGoodMoodClicked);
                    }}
                >
                    <View>
                        <Good
                            source={isGoodMoodClicked ? MoodImage['GOOD'] : MoodImageGray['GOOD']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isGoodMoodClicked ? '좋았어요' : ' '}</MoodText>
                    </View>
                </Mood>
                <Mood
                    onPress={() => {
                        onMoodClick();
                        setIsColdMoodClicked(!isColdMoodClicked);
                    }}
                >
                    <View>
                        <Cold
                            source={isColdMoodClicked ? MoodImage['COLD'] : MoodImageGray['COLD']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isColdMoodClicked ? '추웠어요' : ' '}</MoodText>
                    </View>
                </Mood>
                <Mood
                    onPress={() => {
                        onMoodClick();
                        setIsVeryColdMoodClicked(!isVeryColdMoodClicked);
                    }}
                >
                    <View>
                        <VeryCold
                            source={isVeryColdMoodClicked ? MoodImage['VERY COLD'] : MoodImageGray['VERY COLD']}
                            resizeMode={'contain'}
                        />
                        <MoodText>{isVeryColdMoodClicked ? '너무 \n 추웠어요' : ' '}</MoodText>
                    </View>
                </Mood>
            </EstimateEmotionSelect>
        </EstimateComponent>
    );
};

const UploadWeatherEstimate = () => {
    const [isShowEstimateList, setIsShowEstimateList] = useState(false);
    // const [isMoodClicked, setIsMoodClicked] = useState(false);
    const [isVeryHotMoodClicked, setVeryHotMoodClicked] = useState(false);
    const [isHotMoodClicked, setHotMoodClicked] = useState(false);
    const [isGoodMoodClicked, setIsGoodMoodClicked] = useState(false);
    const [isColdMoodClicked, setIsColdMoodClicked] = useState(false);
    const [isVeryColdMoodClicked, setIsVeryColdMoodClicked] = useState(false);
    const onMoodClick = () => {
        setVeryHotMoodClicked(false);
        setHotMoodClicked(false);
        setIsGoodMoodClicked(false);
        setIsColdMoodClicked(false);
        setIsVeryColdMoodClicked(false);
    };
    const [memo, setMemo] = useState<string>('');

    return (
        <UploadLayout
            titleContents1="오늘의 날씨를"
            titleContents2="평가해볼까요?"
            subTitleContents="오늘 하루 느낀 점을 평가해주세요."
            buttonText="완료"
        >
            <WeatherEstimateWrap>
                <EmotionSelectWrap>
                    <EmotionSelect>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodClick();
                                setVeryHotMoodClicked(!isVeryHotMoodClicked);
                            }}
                        >
                            <VeryHot
                                source={isVeryHotMoodClicked ? MoodImage['VERY HOT'] : MoodImageGray['VERY HOT']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodClick();
                                setHotMoodClicked(!isHotMoodClicked);
                            }}
                        >
                            <Hot
                                source={isHotMoodClicked ? MoodImage['HOT'] : MoodImageGray['HOT']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodClick();
                                setIsGoodMoodClicked(!isGoodMoodClicked);
                            }}
                        >
                            <Good
                                source={isGoodMoodClicked ? MoodImage['GOOD'] : MoodImageGray['GOOD']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodClick();
                                setIsColdMoodClicked(!isColdMoodClicked);
                            }}
                        >
                            <Cold
                                source={isColdMoodClicked ? MoodImage['COLD'] : MoodImageGray['COLD']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                onMoodClick();
                                setIsVeryColdMoodClicked(!isVeryColdMoodClicked);
                            }}
                        >
                            <VeryCold
                                source={isVeryColdMoodClicked ? MoodImage['VERY COLD'] : MoodImageGray['VERY COLD']}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                    </EmotionSelect>
                    <EmotionText> &quot; 오늘의 날씨는 &quot;</EmotionText>
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
                            <EstimateBox />
                            <EstimateBox />
                            <EstimateBox />
                            <EstimateBox />
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
