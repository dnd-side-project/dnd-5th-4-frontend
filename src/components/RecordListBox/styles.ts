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
    padding: 0 18%;
`;
export const Title = styled.Text<{ color?: boolean }>`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: ${(props) => (!props.color ? '#A3A4AF' : '#000000')};
`;
