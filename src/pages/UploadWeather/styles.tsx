import styled, { css } from 'styled-components/native';
import theme from 'styles/theme';

const activeStyle = css`
    border: 2px solid #000000;
    box-shadow: none;
`;

export const TextBox = styled.View<{ clicked: boolean; onClick: () => void }>`
    border-color: ${theme.mainColor.unactiveButton};
    border-radius: 4px;
    box-shadow: 0px 0px 4px #d6d6d7;
    padding: 10px 10px 10px 12px;
    flex-direction: row;
    background: #ffffff;
    justify-content: space-between;
    margin-bottom: 26;

    :hover {
        border: 2px solid #000000;
        box-shadow: none;
    }

    ${(props) => (props.clicked ? activeStyle : '')}
`;

export const LocationScrollView = styled.ScrollView`
    flex-direction: column;
    flex: 1;
    /* background: black; */
`;

export const LocationBox = styled.View<{ clicked: boolean; onClick: () => void }>`
    border-color: ${theme.mainColor.unactiveButton};
    border-radius: 4px;
    box-shadow: 0px 0px 4px #d6d6d7;
    padding: 10px 10px 10px 12px;
    flex-direction: row;
    background: #ffffff;
    align-items: center;
    margin-bottom: 12px;

    :hover {
        border: 2px solid #000000;
        box-shadow: none;
    }

    ${(props) => (props.clicked ? activeStyle : '')}
`;

export const TextView = styled.View`
    flex: 1;
    /* background: gray; */
    padding: 23px 0 23px 16px;
`;

export const TextLine1 = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 14;
    line-height: 17;
    text-align: left;
    letter-spacing: -0.3;
    flex: 1;
    color: #717171;
    margin-bottom: 10px;
`;

export const TextLine2 = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 20;
    line-height: 24;
    text-align: left;
    letter-spacing: -0.3;
    flex: 1;
    color: #000;
    margin-bottom: 13px;
`;

export const TextLine3 = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 14;
    line-height: 17;
    text-align: left;
    letter-spacing: -0.3;
    flex: 1;
    color: #ff4743;
`;
