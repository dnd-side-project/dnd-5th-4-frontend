import styled from 'styled-components/native';
export const Container = styled.View`
    align-items: center;
    justify-content: space-around;
    margin-top: 25px;
    margin-bottom: 45px;
`;
export const Title = styled.Text<{ boldFont?: boolean }>`
    font-size: 24px;
    text-align: center;
    letter-spacing: -0.3px;
    font-family: ${(props) => (props.boldFont ? 'PretendardBold' : 'Pretendard400')};
`;
