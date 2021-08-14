import styled from 'styled-components/native';

export const TextFiled = styled.TextInput`
    width: 100%;
    height: 44px;
    padding-vertical: 10px;
    padding-horizontal: 12px;
    border-radius: 4px;
    border-color: #d6d6d7;
    border-width: 2px;
    elevation: 1;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;
`;
export const Close = styled.Image`
    width: 24px;
    height: 24px;
`;
export const CloseTouch = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    top: 0;
`;
export const Touch = styled.TouchableOpacity`
    height: 88px;
    flex: 1;
    border-radius: 4px;
    border-width: 1px;
    border-color: #d6d6d7;
    elevation: 1;
    margin-top: 14px;
`;
export const Container = styled.View`
    padding-top: 32px;
    padding-bottom: 20px;
    padding-horizontal: 20px;
    flex: 1;
`;
export const Title = styled.Text`
    font-family: PretendardBold;
    font-size: 24px;
    line-height: 32.52px;
    letter-spacing: -0.3px;
    color: #000000;
    margin-bottom: 14px;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: rgba(36, 38, 50, 0.4);
    margin-bottom: 29px;
`;
export const Button = styled.TouchableOpacity<{ color?: boolean }>`
    height: 44px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.3px;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.color ? '#C9C9C9' : '#000000')};
    position: absolute;
    bottom: 0;
    width: 100%;
`;
