import React, { useEffect, useRef } from 'react';
import { Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import { useState } from 'react';
import { Close, Container, AddButton, TextField, AddText, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../settings/api';
import { useAuthState } from '../../context';
type UserProps = {
    isOpenAddModal: boolean;
    clickCategory: any;
    setIsOpenAddModal: any;
    setIsRe: any;
    isRe: any;
};
const TextModal: React.FC<UserProps> = ({ isOpenAddModal, clickCategory, setIsOpenAddModal, setIsRe, isRe }) => {
    let screen = Dimensions.get('window');
    const show = useRef();
    const navigation = useNavigation();
    const [borderColor, setBorderColor] = useState('#d6d6d7');
    const [keyword, setKeyword] = useState('');
    const authState = useAuthState();
    const user = authState?.user;
    useEffect(() => {
        setKeyword('');
    }, []);
    const onFucus = () => {
        setBorderColor('#000000');
    };
    const onBlur = () => {
        setBorderColor('#d6d6d7');
    };
    const CategoryArray = {
        아우터: 'OUTER',
        상의: '상의',
        하의: 'BOTTOM',
        신발: 'SHOES',
        기타: 'OTHERS',
    };

    const onSubmitMyCloth = () => {
        let params = {
            userId: user.id,
            dressName: keyword,
            dressType: CategoryArray[clickCategory],
        };
        console.log(params);
        api.post('dress/', params)
            .then((res) => {
                if (res.status !== 200) {
                    console.log('옷등록에 실패했습니다');
                    return;
                }
                setIsRe(!isRe);
                setIsOpenAddModal(false);
                // console.log(res?.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Modal
            style={{
                width: screen.width - 80,
                height: 206,
                backgroundColor: '#FFFFFF',
            }}
            position="center"
            backdrop={true}
            ref={show}
            isOpen={isOpenAddModal}
            onClosed={() => {
                setIsOpenAddModal(false);
            }}
        >
            <Container>
                <TouchableOpacity onPress={() => setIsOpenAddModal(false)}>
                    <Close source={require('Images/Close.png')} resizeMode={'contain'} />
                </TouchableOpacity>
                <Title>{clickCategory} 추가하기</Title>
                <TextField
                    placeholder="옷 이름을 입력하세요"
                    onFocus={onFucus}
                    onBlur={onBlur}
                    style={{ borderColor: borderColor }}
                    onChangeText={setKeyword}
                    value={keyword}
                    keyboardType="default"
                />
                <AddButton onPress={() => onSubmitMyCloth()} disabled={keyword.length < 3} color={keyword.length < 3}>
                    <AddText>추가</AddText>
                </AddButton>
            </Container>
        </Modal>
    );
};

export default TextModal;
