import React, { useState } from 'react';

import { ScrollView, Text, View } from 'react-native';
import {
    CategoryName,
    CategoryWrap,
    Cloth,
    ClothesListWrap,
    ClothWrap,
    PlusButton,
} from '../../pages/UploadClothes/styles';
import { Entypo } from '@expo/vector-icons';

type ClothesProps = {
    categoryList: Array<string>;
    name: string;
};

const Category: React.FC<ClothesProps> = (categoryList, name) => {
    return (
        <CategoryWrap>
            <CategoryName>{name}</CategoryName>
            <ClothesListWrap>
                <PlusButton
                    key={name}
                    onPress={() => {
                        alert(categoryList);
                    }}
                    underlayColor="#DDDDDD"
                    activeOpacity={0.6}
                >
                    <Entypo name="plus" size={9} color="black" iconStyle={{ left: 0 }} />
                </PlusButton>
                <ScrollView
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {categoryList?.categoryList &&
                        categoryList.categoryList.map((category: any) => (
                            <ClothWrap isPress={false}>
                                <Cloth isPress={false}> {category?.name}</Cloth>
                            </ClothWrap>
                        ))}
                </ScrollView>
            </ClothesListWrap>
        </CategoryWrap>
    );
};

export default Category;
