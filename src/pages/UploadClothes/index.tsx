import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { ScrollView, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import {
    ClothesViewBox,
    TotalWrap,
    CategoryListWrap,
    CategoryNameWrap,
    ClothesListWrap,
    PlusButton,
    ClothesList,
    TotalTextWrap,
    Total,
    TotalCount,
    CategoryWrap,
    CategoryName,
    ClothWrap,
    Cloth,
    ModalWrap,
    ModalBox,
    Edit,
    Line,
    Delete,
} from './styles';
import UploadLayout from 'layout/Upload';
import { Feather, Entypo } from '@expo/vector-icons';

type ClothesProps = {
    text: string;
};

const Clothes: React.FC<ClothesProps> = ({ text }) => {
    const [isPress, setIsPress] = useState(false);

    return (
        <ClothWrap isPress={isPress} onPress={() => setIsPress(!isPress)} underlayColor="#DDDDDD">
            <Cloth isPress={isPress}>{text}</Cloth>
        </ClothWrap>
    );
};

const Category = () => (
    <CategoryWrap>
        <CategoryName>아우터</CategoryName>
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
            <ClothesList>
                <Clothes text="코트" />
                <Clothes text="가디건" />
                <Clothes text="후드집업이지" />
            </ClothesList>
        </ClothesListWrap>
    </CategoryWrap>
);

const UploadClothes = () => {
    const [isEditDeleteModalVisible, setEditDeleteModalVisibl] = useState(false);

    const showEditDeleteModal = () => {
        setEditDeleteModalVisibl(!isEditDeleteModalVisible);
    };

    return (
        <UploadLayout
            titleContents1="오늘의 옷차림을"
            titleContents2="기록해볼까요?"
            subTitleContents="옷차림을 카테고리별로 기록해주세요."
            buttonText="다음"
        >
            <Modal isVisible={isEditDeleteModalVisible} animationIn="fadeIn" animationOut="fadeOut">
                <TouchableWithoutFeedback onPress={showEditDeleteModal}>
                    <ModalWrap>
                        <ModalBox>
                            <TouchableHighlight>
                                <Edit>수정하기</Edit>
                            </TouchableHighlight>
                            <Line />
                            <TouchableHighlight>
                                <Delete>삭제하기</Delete>
                            </TouchableHighlight>
                        </ModalBox>
                    </ModalWrap>
                </TouchableWithoutFeedback>
            </Modal>
            <ClothesViewBox>
                <TotalWrap>
                    <TotalTextWrap>
                        <Total>전체</Total>
                        <TotalCount>15</TotalCount>
                    </TotalTextWrap>

                    <Feather
                        name="more-horizontal"
                        size={24}
                        color="black"
                        iconStyle={{ left: 0 }}
                        onPress={() => {
                            showEditDeleteModal();
                        }}
                    />
                </TotalWrap>
                <CategoryListWrap>
                    <ScrollView>
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                    </ScrollView>
                </CategoryListWrap>
            </ClothesViewBox>
        </UploadLayout>
    );
};

export default UploadClothes;
