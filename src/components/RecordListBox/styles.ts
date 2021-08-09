import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 20px;
    flex: 1;
`;
export const Nav = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    position: relative;
`;
export const Title = styled.Text<{ color?: boolean }>`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: ${(props) => (!props.color ? '#717171' : '#000000')};
`;
