import styled, { css } from 'styled-components/native';
import theme from 'styles/theme';

export const ClothesViewBox = styled.View`
    flex: 1;
`;

// Total
export const TotalWrap = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 12px;
    border-bottom-color: #e7e7e7;
    border-bottom-width: 1px;
    margin-bottom: 24px;
`;

export const Total = styled.Text`
    font-family: PretendardBold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #000000;
    margin-right: 3px;
`;

export const TotalCount = styled.Text`
    font-family: Pretendard400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #9399af;
`;

export const TotalTextWrap = styled.View`
    flex-direction: row;
`;

// Category List Wrap
export const CategoryListWrap = styled.View`
    /* background: #bebebe; */
    flex: 1;
`;

export const CategoryWrap = styled.View`
    /* background: #dab8b8; */
    margin-bottom: 24px;
    flex-direction: column;
`;

export const CategoryNameWrap = styled.View``;

export const CategoryName = styled.Text`
    font-family: PretendardBold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    margin-bottom: 12px;
`;

export const ClothesListWrap = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const PlusButton = styled.TouchableHighlight`
    padding: 7px;
    border-radius: 16.5px;
    border-color: #a4a4aa;
    border-width: 1px;
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

export const ClothesList = styled.View`
    flex-direction: row;
`;

export const ClothWrap = styled.TouchableHighlight<{ isPress: boolean }>`
    padding: 3px 10px;
    border-radius: 16.5px;
    border-color: ${(props) => (props.isPress ? '#000' : '#a4a4aa')};
    border-width: 1px;
    margin-right: 8px;
`;

export const Cloth = styled.Text<{ isPress: boolean }>`
    font-family: Pretendard400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: ${(props) => (props.isPress ? '#000' : '#a4a4aa')};
`;
