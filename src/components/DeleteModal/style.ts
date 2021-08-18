import styled from 'styled-components/native';
export const Close = styled.Image`
    width: 24px;
    height: 24px;
    align-self: flex-end;
    margin-bottom: 5px;
`;
export const Container = styled.View`
    padding: 16px;
    flex: 1;
`;
export const Title = styled.Text<{ color?: string }>`
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.3px;
    color: ${(props) => props.color};
    font-family: PretendardBold;
`;
export const AddButton = styled.TouchableOpacity`
    width: 100%;
    background: #000000;
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
