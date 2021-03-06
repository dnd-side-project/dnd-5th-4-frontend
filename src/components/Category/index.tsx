import React from 'react';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { CategoryName, CategoryWrap, Cloth, ClothesListWrap, ClothWrap, PlusButton } from 'pages/UploadClothes/styles';

const Category = (categoryList: any, name?: string) => {
    console.log('categoryList', categoryList);

    return (
        <CategoryWrap>
            <CategoryName>{name}</CategoryName>
            <ClothesListWrap>
                <PlusButton
                    onPress={() => {
                        alert('plus button clicked!');
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
                            <ClothWrap>
                                <Cloth> {category?.name}</Cloth>
                            </ClothWrap>
                        ))}
                </ScrollView>
            </ClothesListWrap>
        </CategoryWrap>
    );
};
export default Category;
