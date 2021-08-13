import styled from 'styled-components/native';
export const Touch = styled.TouchableOpacity`
    height: 88px;
    flex: 1;
`;
export const Container = styled.View`
    height: 88px;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding-vertical: 18px;
    padding-horizontal: 16px;
`;
export const LeftContainer = styled.View`
    justify-content: space-between;
`;
export const RightContainer = styled.View`
    justify-content: center;
`;
export const IconImages = styled.Image`
    width: 68px;
    height: 68px;
`;
export const Description = styled.Text`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: #717171;
`;
export const LocationName = styled.Text`
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.3px;
    color: #000000;
    font-family: PretendardBold;
`;
