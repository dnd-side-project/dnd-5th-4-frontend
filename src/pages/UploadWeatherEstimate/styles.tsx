import styled from 'styled-components/native';

export const WeatherEstimateWrap = styled.View`
    /* background-color: pink; */
    flex: 1;
    flex-direction: column;
`;

export const EmotionSelectWrap = styled.View`
    flex-direction: column;
    margin-bottom: 31px;
    /* background-color: #9c9c9c; */
`;

export const EmotionSelect = styled.View`
    flex-direction: row;
    height: 54px;
    margin-bottom: 22px;
    justify-content: space-between;
`;
export const EmotionText = styled.Text`
    text-align: center;
    font-family: PretendardBold;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: -0.3px;
`;

export const Mood = styled.TouchableWithoutFeedback`
    /* background: #666; */
`;

export const VeryHot = styled.Image``;
export const Hot = styled.Image``;
export const Good = styled.Image``;
export const Cold = styled.Image``;
export const VeryCold = styled.Image``;

export const EstimateButton = styled.View`
    background: #fff;
    border-radius: 4px;
    border-color: #d6d6d7;
    border-width: 1px;
    padding: 10px 100px;
    flex-direction: row;
    align-items: center;
`;

export const SelectButton = styled.View`
    background: #e7e8ee;
    padding: 2px 7px;
    border-radius: 10.5px;
`;

export const SelectText = styled.Text`
    color: #a4a9b3;
    font-family: Pretendard400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.3px;
`;

export const Memo = styled.View`
    padding: 11px 14px;
    flex: 1;
    border-radius: 4px;
    border-color: #d6d6d7;
    border-width: 1px;
    min-height: 122px;
    background: #fff;
`;

export const EstimateComponent = styled.View`
    flex-direction: column;
`;
export const EstimateCategory = styled.Text`
    /* font-family: 'Noto-Sans-CJK-KR'; */
    font-family: PretendardBold;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.3px;
    margin-bottom: 8px;
`;
export const EstimateEmotionSelect = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const MoodText = styled.Text`
    margin-top: 8px;
    font-family: PretendardBold;
    text-align: center;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.3px;
    min-height: 22px;
`;
