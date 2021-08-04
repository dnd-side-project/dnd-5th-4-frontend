import styled from 'styled-components/native';
import theme from 'styles/theme';

const Button = ({ ...props }) => {
    return (
        <ButtonBox background={props.background} onClick={props.onClick}>
            <ButtonText color={props.color}>{props.text}</ButtonText>
        </ButtonBox>
    );
};

const ButtonBox = styled.TouchableOpacity<{ background: string; onClick: () => void }>`
    background-color: ${(props) => props.background};
`;

const ButtonText = styled.Text<{ color?: string }>`
    color: ${(props) => props.color};
`;

export default Button;
