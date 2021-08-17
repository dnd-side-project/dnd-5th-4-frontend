import styled from 'styled-components/native';
export const Container = styled.View`
    padding-vertical: 38px;
    padding-horizontal: 20px;
`;
export const CalendarRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;
export const DatesContainer = styled.View`
    height: 78px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 27px;
    margin-bottom: 8px;
`;
export const SelectText = styled.Text`
    font-family: PretendardBold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
`;
export const DateContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 12px;
`;
export const Days = styled.Text`
    font-size: 12px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.12px;
    color: #17171b;
    font-family: RobotoBold;
`;
export const EmojiBox = styled.View`
    height: 51px;
`;
export const DateNumber = styled.Text<{ color?: string }>`
    font-size: 12px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.3px;
    color: ${(props) => props.color};
    font-family: Pretendard500;
`;
