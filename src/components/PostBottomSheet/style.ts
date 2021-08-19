import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.4);
`;
export const DateText = styled.Text`
    font-family: Pretendard500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    color: rgba(36, 38, 50, 0.4);
    margin-bottom: 6px;
`;
export const Area = styled.Text`
    font-family: PretendardBold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #000000;
`;
export const IsMoreButton = styled.Image`
    width: 24px;
    height: 24px;
`;
export const TopContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 27px;
`;
export const CommentContainer = styled.View`
    margin-top: 10px;
    border-width: 1px;
    border-color: #d6d6d7;
    height: 122px;
    border-radius: 4px;
    padding: 12px;
`;
export const Division = styled.Text`
    margin-left: 9px;
    margin-right: 9px;
    color: #e0e2eb;
`;
export const MoodEmoji = styled.Image`
    width: 47px;
    height: 47px;
    margin-right: 12px;
`;
export const Mood = styled.Text`
    font-family: PretendardBold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #000000;
`;
export const Temperature = styled.Text<{ color?: string }>`
    color: ${(props) => props.color};
    font-family: PretendardBold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.3px;
`;
export const TypeBox = styled.View`
    flex-direction: row;
`;
export const ClothesName = styled.Text`
    font-family: Pretendard500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    color: #000000;
    margin-left: 2px;
    margin-bottom: 10px;
`;
export const Circle = styled.View<{ MoodColor?: any }>`
    width: 10px;
    height: 10px;
    border-radius: 50px;
    margin-right: 4px;
    background-color: ${(props) => props.MoodColor};
`;

export const Title = styled.Text<{ color?: boolean }>`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: ${(props) => (!props.color ? '#A3A4AF' : '#000000')};
    font-family: ${(props) => (!props.color ? 'Pretendard400' : 'Pretendard500')};
`;
export const ModalWrap = styled.SafeAreaView`
    flex: 1;
`;

export const ModalBox = styled.View`
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    elevation: 1;
    bottom: 40%;
    right: 8%;
`;

export const EditButton = styled.TouchableHighlight``;
