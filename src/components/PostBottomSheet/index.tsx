import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Modal,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
    PanResponder,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
} from 'react-native';

import { MoodColor, MoodDescription, MoodImage } from 'untils/MoodWeather';
import { useAuthState } from 'context/Auth';
import DeleteModal from 'components/DeleteModal';
import EditModal from 'components/EditModal';
import { Circle, Clothes, ClothesName, TypeBox } from 'components/Post/styles';
import { Delete, Edit, Line } from 'pages/UploadClothes/styles';
import {
    Area,
    CommentContainer,
    Container,
    DateText,
    Division,
    IsMoreButton,
    Mood,
    MoodEmoji,
    Temperature,
    ModalWrap,
    ModalBox,
    TopContainer,
    EditButton,
} from './style';
type UserProps = {
    modalVisible: boolean;
    setModalVisible: any;
    detailPost: any;
};
const BottomSheet: React.FC<UserProps> = ({ modalVisible, setModalVisible, detailPost }) => {
    const [isEditDeleteModalVisible, setEditDeleteModalVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 삭제 모달
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const authState = useAuthState();
    const user = authState?.user;

    const ClothesType = ['겉옷', '상의', '하의', '신발'];
    const ClothesTypeEng = ['OUTER', 'TOP', 'BOTTOM', 'SHOES'];

    let month = new Date(detailPost?.measures[0].date).getUTCMonth();
    let date = new Date(detailPost?.measures[0].date).getUTCDate();
    let days = new Date(detailPost?.measures[0].date).getUTCDay();
    let Day = ['일', '월', '화', '수', '목', '금', '토'];

    // NOTE: 수정 삭제 모달창
    const showEditDeleteModal = () => {
        setEditDeleteModalVisible(!isEditDeleteModalVisible);
    };
    useEffect(() => {
        if (modalVisible) {
            resetBottomSheet.start();
        }
    }, [modalVisible]);

    const closeModal = () => {
        closeBottomSheet.start(() => {
            setModalVisible(false);
        });
    };

    // NOTE: BottomSheet
    const screenHeight = Dimensions.get('screen').height;
    const panY = useRef(new Animated.Value(screenHeight)).current;
    const translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    });
    const resetBottomSheet = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    });
    const closeBottomSheet = Animated.timing(panY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
    });
    const panResponders = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => false,
            onPanResponderMove: (event, gestureState) => {
                panY.setValue(gestureState.dy);
            },
            onPanResponderRelease: (event, gestureState) => {
                if (gestureState.dy > 0 && gestureState.vy > 1.5) {
                    closeModal();
                } else {
                    resetBottomSheet.start();
                }
            },
        })
    ).current;

    return (
        <Modal visible={modalVisible} animationType={'fade'} transparent statusBarTranslucent>
            <Container>
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>
                <DeleteModal
                    isOpenAddModal={isModalOpen}
                    setIsOpenAddModal={setIsModalOpen}
                    postId={detailPost?.measures[0].measureId}
                />
                <EditModal
                    isOpenAddModal={isEditModalOpen}
                    setIsOpenAddModal={setIsEditModalOpen}
                    measureId={detailPost?.measures[0].measureId}
                />
                <Animated.View
                    style={{ ...styles.bottomSheetContainer, transform: [{ translateY: translateY }] }}
                    {...panResponders.panHandlers}
                >
                    <DateText>
                        {month + 1}월 {date} {Day[days]}
                    </DateText>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 24 }}>
                        <Area>{detailPost?.measures[0].area}</Area>
                        <TouchableOpacity
                            onPress={() => {
                                showEditDeleteModal();
                            }}
                        >
                            <IsMoreButton source={require('Images/more.png')} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Modal transparent={true} visible={isEditDeleteModalVisible} animationType={'fade'}>
                            <TouchableWithoutFeedback
                                onPress={() => setEditDeleteModalVisible(!isEditDeleteModalVisible)}
                            >
                                <ModalWrap>
                                    <ModalBox>
                                        <EditButton
                                            onPress={() => {
                                                setIsEditModalOpen(!isEditModalOpen);
                                                setEditDeleteModalVisible(false);
                                            }}
                                        >
                                            <Edit>수정하기</Edit>
                                        </EditButton>
                                        <Line />
                                        <TouchableHighlight
                                            onPress={() => {
                                                setIsModalOpen(!isModalOpen);
                                                setEditDeleteModalVisible(false);
                                            }}
                                        >
                                            <Delete>삭제하기</Delete>
                                        </TouchableHighlight>
                                    </ModalBox>
                                </ModalWrap>
                            </TouchableWithoutFeedback>
                        </Modal>
                    </View>
                    <TopContainer>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MoodEmoji source={MoodImage[detailPost?.measures[0].mood]} />
                            <Mood>{MoodDescription[detailPost?.measures[0].mood]}</Mood>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Temperature color={'#FF4743'}>
                                {parseInt(detailPost?.measures[0].temperatureHigh)}°
                            </Temperature>
                            <Division>/</Division>
                            <Temperature color={'#4068B0'}>
                                {parseInt(detailPost?.measures[0].temperatureLow)}°
                            </Temperature>
                        </View>
                    </TopContainer>
                    {ClothesTypeEng.map((cloth, index) => (
                        <TypeBox key={index}>
                            <Clothes>{ClothesType[index]}</Clothes>
                            {detailPost?.measures[0].dressResponses.map(
                                (item: any, count: any) =>
                                    cloth === item.dressType && (
                                        <View key={count} style={{ flexDirection: 'row' }}>
                                            <Circle MoodColor={MoodColor[item?.partialMood]} />
                                            <ClothesName>{item?.dressName ? item?.dressName : '-'}</ClothesName>
                                        </View>
                                    )
                            )}
                        </TypeBox>
                    ))}
                    <CommentContainer>
                        <Text>{detailPost?.measures[0].comment}</Text>
                    </CommentContainer>
                </Animated.View>
            </Container>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    background: {
        flex: 1,
    },
    bottomSheetContainer: {
        height: 430,
        paddingHorizontal: 20,
        paddingVertical: 36,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});

export default BottomSheet;
