import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 32px 20px 20px 20px;
`;
export const TopContainer = styled.View`
    height: 64px;
    background: gray;
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleContainer = styled.View`
    height: 117px;
    background-color: #bdbdbd;
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleWraper = styled.View`
    height: 30px;
    margin-bottom: 14px;
    background-color: pink;
`;

export const SubTitleWraper = styled.View`
    background: orange;
`;

export const Contents = styled.View`
    flex: 1;
`;
export const BottomContainer = styled.TouchableHighlight`
    margin-top: 20px;
`;

export const StepBar = styled.View`
    background-color: black;
    width: 48px;
`;
