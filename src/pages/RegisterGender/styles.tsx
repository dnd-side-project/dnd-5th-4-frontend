import styled, { css } from 'styled-components/native';
import theme from 'styles/theme';

const activeStyle = css`
    border-color: ${theme.mainColor.activeButton};
`;
const unActiveStyle = css`
    border-color: ${theme.mainColor.unactiveButton};
`;

export const Box = styled.View<{ clicked: boolean; onClick: () => void }>`
    border-color: ${theme.mainColor.unactiveButton};
    :hover {
        border-color: ${theme.mainColor.activeButton};
    }

    ${(props) => (props.clicked ? activeStyle : unActiveStyle)}
`;

export const Image = styled.Image<{ widthSize?: string; heightSize?: string; name?: string }>`
`;
