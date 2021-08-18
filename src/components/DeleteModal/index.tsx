import React, { useEffect, useRef } from 'react';
import { Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import { useState } from 'react';
import { Close, Container, AddButton, TextField, AddText, Title } from './style';
import { useNavigation } from '@react-navigation/native';
import api from '../../settings/api';
import { useAuthState } from '../../context';
type UserProps = {
    isOpenAddModal: boolean;
    setIsOpenAddModal: any;
    postId: number;
};
const DeleteModal: React.FC<UserProps> = ({ isOpenAddModal, setIsOpenAddModal, postId }) => {
    const authState = useAuthState();
    const user = authState?.user;
    let screen = Dimensions.get('window');
    const show = useRef();
    const navigation = useNavigation();
    const onDeleteHandler = () => {
        //    삭제하기 버튼 눌렀을 경우
        //    postId
        // console.log(postId);
    };
    return (
        <Modal
            style={{
                width: screen.width - 80,
                height: 172,
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
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'space-between',
                    }}
                >
                    <Title color={'#000'}>
                        정말 <Title color={'#FF4743'}>삭제</Title>하시겠습니까?
                    </Title>
                    <AddButton onPress={onDeleteHandler}>
                        <AddText>삭제</AddText>
                    </AddButton>
                </View>
            </Container>
        </Modal>
    );
};

export default DeleteModal;
