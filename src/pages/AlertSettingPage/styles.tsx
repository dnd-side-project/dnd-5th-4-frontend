import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 32px 20px 20px 20px;
`;

// NOTE: Header
export const TopContainer = styled.View`
    height: 28px;
    margin-bottom: 26px;
    /* background: gray; */
    flex-direction: row;
    justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;
export const Back = styled.Image``;
export const Title = styled.Text`
    font-family: PretendardBold;
    font-size: 24px;
    line-height: 32.52px;
    letter-spacing: -0.3px;
    color: #000000;
`;
export const CloseButton = styled.TouchableOpacity``;
export const Close = styled.Image``;

// NOTE: SettingList
export const ListBox = styled.View`
    flex: 1;
    flex-direction: column;
    margin-top: 20px;
`;

export const ListElement = styled.TouchableOpacity`
    height: 50px;
    margin-bottom: 1px;
    justify-content: space-between;
    flex-direction: row;
`;
export const PushAlert = styled.Text`
    font-family: Pretendard500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #000000;
`;
export const Distrub = styled.Text`
    font-family: Pretendard500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #000000;
`;
