import styled from 'styled-components/native';
export const Touch = styled.TouchableOpacity`
    height: 88px;
    flex: 1;
`;
export const Close = styled.Image`
    width: 24px;
    height: 24px;
    align-self: flex-end;
    margin-bottom: 5px;
`;
export const Container = styled.View`
    padding: 16px;
`;
export const Title = styled.Text`
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #000000;
    font-family: PretendardBold;
`;
export const TextField = styled.TextInput`
    margin-top: 28px;
    margin-bottom: 11px;
    padding: 13px;

    height: 43px;
    border-color: #000000;
    border-width: 2px;
    border-radius: 4px;
`;
export const AddButton = styled.TouchableOpacity<{ color?: boolean }>`
    width: 100%;
    background: ${(props) => (props.color ? '#BABABA' : '#000000')};
    border-radius: 4px;
    height: 44px;
    justify-content: center;
    align-items: center;
`;
export const AddText = styled.Text`
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.3px;
    color: #ffffff;
    font-family: Pretendard500;
`;
