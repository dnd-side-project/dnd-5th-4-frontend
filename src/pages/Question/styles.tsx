import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 32px 20px 20px 20px;
`;

// NOTE: Header
export const TopContainer = styled.View`
    height: 24px;
    margin-bottom: 26px;
    /* background: gray; */
    flex-direction: row;
    justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;
export const Back = styled.Image``;
export const Title = styled.Text`
    font-family: PretendardBold;
    font-size: 24px;
    line-height: 32.52px;
    letter-spacing: -0.3px;
    color: #000000;
`;
export const CloseButton = styled.TouchableOpacity``;
export const Close = styled.Image``;

// NOTE: List
export const ListBox = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    padding-bottom: 300px;
    overflow: scroll;
`;

export const ListElement = styled.View`
    margin-bottom: 24px;
`;
export const ListElementType = styled.Text`
    margin-bottom: 12px;
    font-size: 12px;
    font-family: Pretendard400;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: #a5a7af;
`;

export const ContactNumberInputWrap = styled.View`
    border-radius: 4px;
    border-color: #e0e2eb;
    border-width: 1px;
    height: 44px;
    margin-bottom: 12px;
    padding: 10px;
`;
export const ContactNumberInput = styled.TextInput`
    height: 100%;
    font-size: 14px;
    font-family: Pretendard400;
    line-height: 17px;
    letter-spacing: -0.3px;
`;

export const QuestionContentsInputWrap = styled.View`
    border-radius: 4px;
    border-color: #e0e2eb;
    border-width: 1px;
    height: 122px;
    text-align: left;
    margin-bottom: 12px;
    padding: 10px;
`;
export const QuestionContentsInput = styled.TextInput`
    /* height: 100%; */
    /* background: black; */
    font-size: 14px;
    font-family: Pretendard400;
    line-height: 17px;
    letter-spacing: -0.3px;
    /* vertical-align: baseline; */
`;

// NOTE: Button
export const BottomContainer = styled.TouchableHighlight`
    margin-top: 20px;
`;
