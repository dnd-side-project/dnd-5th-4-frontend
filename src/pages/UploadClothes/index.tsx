import React, { useEffect, useState } from 'react';
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
import api from '../../settings/api';
import Category from '../../components/Category';

type ClothesProps = {
    categoryList: any;
    name: string;
};

const UploadClothes = () => {
    const [isEditDeleteModalVisible, setEditDeleteModalVisibl] = useState(false);
    const [category, setCategory] = useState({});
    const [totalNumber, setTotalNumber] = useState(0);
    const showEditDeleteModal = () => {
        setEditDeleteModalVisibl(!isEditDeleteModalVisible);
    };
    const Category: React.FC<ClothesProps> = ({ categoryList, name }) => (
        <CategoryWrap>
            <CategoryName>{name}</CategoryName>
            <ClothesListWrap>
                <PlusButton
                    key={name}
                    onPress={() => {
                        alert(name);
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
                    {categoryList &&
                        categoryList.map((category: any) => (
                            <ClothWrap
                                onPress={() => {
                                    console.log(category);
                                }}
                            >
                                <Cloth> {category?.name}</Cloth>
                            </ClothWrap>
                        ))}
                </ScrollView>
            </ClothesListWrap>
        </CategoryWrap>
    );

    useEffect(() => {
        fetchUserCloth();
    }, []);
    const fetchUserCloth = () => {
        let testuser1 = 'testuser1';
        api.get(`user/dresses?userId=${testuser1}`)
            .then((res) => {
                if (res.status !== 200) {
                    console.log('유저의 드레스를 가져오지못했습니다');
                    return;
                }

                //
                //
                //
                let data = res?.data?.dresses;
                let newCategorys = Object.assign({}, category);
                data.forEach((recycleInfo: any) => {
                    let category = recycleInfo.type;
                    if (!newCategorys.hasOwnProperty(category)) {
                        newCategorys[category] = [];
                    }
                    newCategorys[category].push(recycleInfo);
                });
                setCategory(newCategorys);
                //
                //
                //

                setTotalNumber(res?.data.dresses.length);
            })
            .catch((err) => {
                console.log('err', err);
            });
    };
    const TTTTTT = [{ 1: '아우터', 2: '상의', 3: '하의', 4: '신발', 5: '기타' }];
    return (
        <UploadLayout
            titleContents1="오늘의 옷차림을"
            titleContents2="기록해볼까요?"
            subTitleContents="옷차림을 카테고리별로 기록해주세요."
        >
            <Modal isVisible={isEditDeleteModalVisible} animationIn="fadeIn" animationOut="fadeOut">
                <TouchableWithoutFeedback onPress={() => showEditDeleteModal}>
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
                        <Total>전체 </Total>
                        <TotalCount>{totalNumber}</TotalCount>
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
                        <Category categoryList={category['OUTER']} name="아우터" />
                        <Category categoryList={category['TOP']} name="상의" />
                        <Category categoryList={category['BOTTOM']} name="하의" />
                        <Category categoryList={category['SHOES']} name="신발" />
                        <Category categoryList={category['OTHER']} name="기타" />
                    </ScrollView>
                </CategoryListWrap>
            </ClothesViewBox>
        </UploadLayout>
    );
};

export default UploadClothes;
