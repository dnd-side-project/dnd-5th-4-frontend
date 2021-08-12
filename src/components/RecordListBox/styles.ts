import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 20px;
    flex: 1;
    padding-bottom: 10px;
`;
export const Nav = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    position: relative;
    padding: 0 22%;
`;
export const Title = styled.Text<{ color?: boolean }>`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: ${(props) => (!props.color ? '#A3A4AF' : '#000000')};
    font-family: ${(props) => (!props.color ? 'Pretendard400' : 'Pretendard500')};
`;
