import React, { useRef } from 'react';
import { Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modalbox';

import { useAuthState } from 'context/Auth';

import { Close, Container, AddButton, TextField, AddText, Title } from './styles';

type UserProps = {
    isOpenAddModal: boolean;
    setIsOpenAddModal: any;
    measureId: number;
};
const EditModal: React.FC<UserProps> = ({ isOpenAddModal, setIsOpenAddModal, measureId }) => {
    const authState = useAuthState();
    let screen = Dimensions.get('window');
    const show = useRef();
    const navigation = useNavigation();
    const onEditHandler = () => {
        // 수정 버튼 눌렀을 때
        console.log('수정버튼 clicked!');
        console.log('measureId', measureId);
        setIsOpenAddModal(false);
        navigation.navigate('UploadWeather', { measureId, uploadType: 'PATCH' });
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
                    <Title color={'#000'}>정말 수정하시겠습니까?</Title>
                    <AddButton onPress={onEditHandler}>
                        <AddText>수정</AddText>
                    </AddButton>
                </View>
            </Container>
        </Modal>
    );
};

export default EditModal;
