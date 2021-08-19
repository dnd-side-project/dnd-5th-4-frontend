import styled, { css } from 'styled-components/native';
export const Container = styled.View`
    padding-vertical: 16px;
    padding-horizontal: 14px;
`;
export const MoodEmoji = styled.Image`
    width: 54px;
    height: 54px;
    margin-right: 18px;
`;
export const DateFont = styled.Text`
    font-family: Pretendard500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    color: #a5a5b4;
`;
export const Area = styled.Text`
    font-family: Pretendard500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    color: #41404e;
`;
export const Mood = styled.Text`
    font-family: PretendardBold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #000000;
`;
export const TemperatureHigh = styled.Text`
    font-family: PretendardBold;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    text-align: center;
    letter-spacing: -0.3px;
    color: #ff4743;
`;
export const TemperatureLow = styled(TemperatureHigh)`
    color: #4068b0;
    text-align: right;
`;
export const Division = styled.View`
    border-width: 0.8px;
    transform: rotate(119.29deg);
    width: 16px;
    border-color: #e0e2eb;
    margin: 2px;
`;
