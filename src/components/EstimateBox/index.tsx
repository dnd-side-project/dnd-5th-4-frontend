import React, { useEffect, useState } from 'react';
import {
    Cold,
    EstimateCategory,
    EstimateComponent,
    EstimateEmotionSelect,
    Good,
    Hot,
    Mood,
    MoodText,
    VeryCold,
    VeryHot,
} from '../../pages/UploadWeatherEstimate/styles';
import { View } from 'react-native';
import { MoodImage, MoodImageGray } from '../../untils/MoodWeather';
type EstimateBoxProps = {
    name: any;
    selectCategory: any;
};
const EstimateBox: React.FC<EstimateBoxProps> = ({ name, selectCategory }) => {
    const [isCategoryMood, setIsCategoryMood] = useState('');
    let categorysItems = {
        OUTER: '아우터',
        TOP: '상의',
        BOTTOM: '하의',
        SHOES: '신발',
        OTHERS: '기타',
    };
    const onCategoryMoodHandler = (mood: string, name: string) => {
        if (mood === isCategoryMood) {
            setIsCategoryMood('');
            selectCategory.map((category: any) => {
                if (category.type === name) {
                    delete category.partialMood;
                }
            });
        } else {
            setIsCategoryMood(mood);
            selectCategory.map((category: any, index: any) => {
                if (category.type === name) {
                    selectCategory[index].partialMood = mood;
                }
            });
        }
    };

    return (
        <EstimateComponent>
            <EstimateCategory>{categorysItems[name]}</EstimateCategory>
            <EstimateEmotionSelect>
                <Mood
                    onPress={() => {
                        onCategoryMoodHandler('VERYHOT', name);
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
                        onCategoryMoodHandler('HOT', name);
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
                        onCategoryMoodHandler('GOOD', name);
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
                        onCategoryMoodHandler('COLD', name);
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
                        onCategoryMoodHandler('VERYCOLD', name);
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
export default EstimateBox;
