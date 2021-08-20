import React, { useRef } from 'react';
import { View, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modalbox';

import { useAuthState } from 'context/Auth';
import { useMeasureDispatch, useMeasureState } from 'context/Measure';

import api from 'settings/api';
import { Close, Container, AddButton, AddText, Title } from './style';

type UserProps = {
    isOpenAddModal: boolean;
    setIsOpenAddModal: any;
    measureId: number;
};

const DeleteModal: React.FC<UserProps> = ({ isOpenAddModal, setIsOpenAddModal, measureId }) => {
    const navigation = useNavigation();
    const authState = useAuthState();
    const measureDispatch = useMeasureDispatch();
    const measureState = useMeasureState();
    const user = authState?.user;

    let screen = Dimensions.get('window');
    const show = useRef();

    const onDeleteHandler = () => {
        measureDelete();
        setIsOpenAddModal(false);
    };

    const measureDelete = () => {
        const params = { userId: user?.id };
        api.delete(`measure/${measureId}`, { data: params })
            .then((res) => {
                if (res.status !== 200) {
                    console.log('평가 삭제 실패');
                    return;
                }
                Alert.alert('평가 삭제 완료');
                navigation.navigate('Main');
            })
            .catch((err) => {
                console.log('err', err);
            });
        measureDispatch({
            type: 'DELETE_MEASURE',
            payload: measureId,
        });
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
