import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 32px 20px 20px 20px;
    justify-content: space-between;
`;
export const TopContainer = styled.View`
    height: 24px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const TitleContainer = styled.View``;
export const TitleText = styled.Text<{ color?: any }>`
    font-family: PretendardBold;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: #000;
`;

export const SubTitleText = styled.Text<{ color?: any }>`
    margin-top: 13px;
    font-size: 12px;
    padding-left: 5px;
    color: rgba(0, 0, 0, 0.4);
`;

export const Contents = styled.View`
    flex: 1;
`;
export const BottomContainer = styled.View`
    margin-top: 20px;
`;

export const StepBar = styled.View`
    width: 48px;
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
    width: 100%;
`;
export const Next = styled.Text`
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.3px;
    color: #ffffff;
    font-family: Pretendard500;
`;
