import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 32px 20px 20px 20px;
`;
export const TopContainer = styled.View`
    height: 24px;
    margin-bottom: 20px;
    /* background: gray; */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TitleContainer = styled.View`
    height: 117px;
    /* background-color: #bdbdbd; */
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleWraper = styled.View`
    height: 29px;
    margin-bottom: 14px;
    /* background-color: pink; */
`;

export const TitleText = styled.Text<{ color?: any }>`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28;
    text-align: left;
    letter-spacing: -0.3px;
    flex: 1;
    color: #000;
`;

export const SubTitleWraper = styled.View`
    /* background: orange; */
    flex: 1;
`;

export const SubTitleText = styled.Text<{ color?: any }>`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15;
    text-align: left;
    letter-spacing: -0.3px;
    flex: 1;
    color: #00000066;
`;

export const Contents = styled.View`
    flex: 1;
`;
export const BottomContainer = styled.TouchableHighlight`
    margin-top: 20px;
`;

export const StepBar = styled.View`
    /* background-color: black; */
    width: 48px;
`;
