import React, { useEffect, useRef } from 'react';
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
} from 'react-native';
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
    TopContainer,
} from './style';
import { MoodColor, MoodDescription, MoodImage } from '../../untils/MoodWeather';
import { Circle, Clothes, ClothesName, TypeBox } from '../Post/styles';
type UserProps = {
    modalVisible: any;
    setModalVisible: any;
    detailPost: any;
};
const BottomSheet: React.FC<UserProps> = ({ modalVisible, setModalVisible, detailPost }) => {
    const screenHeight = Dimensions.get('screen').height;
    const panY = useRef(new Animated.Value(screenHeight)).current;
    const ClothesType = ['겉옷', '상의', '하의', '신발'];
    const ClothesTypeEng = ['OUTER', 'TOP', 'BOTTOM', 'SHOES'];
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

    let month = new Date(detailPost?.measures[0].date).getUTCMonth();
    let date = new Date(detailPost?.measures[0].date).getUTCDate();
    let days = new Date(detailPost?.measures[0].date).getUTCDay();
    let Day = ['일', '월', '화', '수', '목', '금', '토'];
    return (
        <Modal visible={modalVisible} animationType={'fade'} transparent statusBarTranslucent>
            <Container>
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{ ...styles.bottomSheetContainer, transform: [{ translateY: translateY }] }}
                    {...panResponders.panHandlers}
                >
                    <DateText>
                        {month + 1}월 {date} {Day[days]}
                    </DateText>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 24 }}>
                        <Area>{detailPost?.measures[0].area}</Area>
                        <TouchableOpacity>
                            <IsMoreButton source={require('Images/more.png')} resizeMode={'contain'} />
                        </TouchableOpacity>
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
