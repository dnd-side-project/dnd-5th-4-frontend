import styled from 'styled-components/native';
export const Container = styled.View`
    background: #ffffff;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    padding-horizontal: 14px;
    padding-top: 16px;
    padding-bottom: 12px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
`;
export const BoxContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const WeatherImage = styled.Image`
    width: 38px;
    height: 26px;
    margin-right: 8px;
`;
export const Temperature = styled.Text`
    margin-right: 9px;
`;
export const Description = styled.Text``;
export const Division = styled.Text`
    color: #e7e7e7;
    font-size: 16px;
    margin-left: 4px;
    margin-right: 6px;
`;

export const MaxTemperature = styled.Text`
    color: #ff4743;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.3px;
`;
export const MinTemperature = styled(MaxTemperature)`
    color: #4068b0;
    margin-right: 3px;
`;
