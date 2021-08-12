import styled, { css } from 'styled-components/native';
import theme from 'styles/theme';

const activeStyle = css`
    border: 2px solid #000000;
    box-shadow: none;
`;

export const Box = styled.TouchableOpacity<{ clicked: boolean; onClick?: () => void }>`
    border-color: ${theme.mainColor.unactiveButton};
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 28px;
    box-shadow: 0px 0px 4px #d6d6d7;
    flex-direction: column;
    background: #ffffff;

    :hover {
        border: 2px solid #000000;
        box-shadow: none;
    }

    ${(props) => (props.clicked ? activeStyle : '')}
`;

export const Text = styled.Text`
    font-size: 12px;
`;
export const Jump = styled.Text`
    font-family: Pretendard500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: rgba(0, 0, 0, 0.4);
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
