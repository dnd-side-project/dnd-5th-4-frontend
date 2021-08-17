import styled, { css } from 'styled-components/native';

export const Emoji = styled.Image`
    margin-top: 8px;
    width: 24px;
    height: 24px;
    margin-bottom: 1px;
`;
export const TemperatureHigh = styled.Text`
    font-family: Pretendard400;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #ff4743;
    text-align: left;
`;
export const TemperatureLow = styled(TemperatureHigh)`
    color: #4068b0;
    text-align: right;
`;
export const Division = styled.View`
    border-width: 0.8px;
    transform: rotate(129.29deg);
    width: 16px;
    border-color: #e0e2eb;
    margin: 2px;
`;
