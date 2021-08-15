import styled, { css } from 'styled-components/native';

export const CategoryListWrap = styled.View`
    /* background: #bebebe; */
    flex: 1;
`;

export const CategoryWrap = styled.View`
    /* background: #dab8b8; */
    margin-bottom: 24px;
    flex-direction: column;
`;

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

export const ClothWrap = styled.TouchableHighlight`
    padding: 3px 10px;
    border-radius: 16.5px;
    border-color: #a4a4aa;
    border-width: 1px;
    margin-right: 8px;
`;

export const Cloth = styled.Text`
    font-family: 'Pretendard400';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: #a4a4aa;
`;
