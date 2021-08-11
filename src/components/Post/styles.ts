import styled from 'styled-components/native';
export const TopContainer = styled.View`
    height: 88px;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    padding-vertical: 16px;
`;
export const Container = styled.View`
    margin-bottom: 11px;
    padding-horizontal: 15px;
    background-color: #fff;
    box-shadow: 0px 0px 4px #d6d6d7;
`;
export const Expression = styled.Image`
    width: 54px;
    height: 54px;
    margin-right: 12px;
`;
export const Temperature = styled.Text<{ color?: String }>`
    font-family: PretendardBold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.3px;
    color: ${(props) => (props.color !== 'Low' ? '#FF4743' : '#4068B0')};
`;
export const Division = styled.Text`
    color: #e7e7e7;
    margin-right: 8px;
    margin-left: 3px;
`;
export const UserType = styled.Text`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    color: #41404e;
`;
export const UserName = styled.Text`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    color: #a5a5b4;
`;
export const Mood = styled.Text`
    font-family: PretendardBold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #000000;
`;
export const BottomContainer = styled.View`
    margin-top: 12px;
    padding-bottom: 8px;
`;
export const TypeBox = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
`;
export const ClothesName = styled.Text`
    font-family: Pretendard500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    color: #000000;
`;
export const Clothes = styled.Text`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;

    color: #8a8d97;
    margin-right: 17px;
`;
