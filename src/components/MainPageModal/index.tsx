import React, { useRef, useState } from 'react';
import { Area, Container, DateFont, Division, Mood, MoodEmoji, TemperatureHigh, TemperatureLow } from './styles';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modalbox';
import { MoodColor, MoodDescription, MoodImage } from '../../untils/MoodWeather';
import moment from 'moment';
import { Circle, Clothes, ClothesName, TypeBox } from '../Post/styles';
type MainPageModalProps = {
    isOpenAddModal: boolean;
    setIsOpenAddModal: any;
    post: object;
};
const MainPageModal: React.FC<MainPageModalProps> = ({ isOpenAddModal, setIsOpenAddModal, post }) => {
    let screen = Dimensions.get('window');
    const show = useRef();
    const ClothesType = ['겉옷', '상의', '하의', '신발'];
    const ClothesTypeEng = ['OUTER', 'TOP', 'BOTTOM', 'SHOES'];
    const PostDay = moment(post?.date);
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState(0);
    return (
        <Modal
            style={{
                zIndex: 100000,
                width: screen.width - 80,
                height: 200,
                backgroundColor: '#fff',
            }}
            position="center"
            coverScreen={true}
            backdrop={true}
            ref={show}
            isOpen={isOpenAddModal}
            onClosed={() => {
                setIsOpenAddModal(false);
            }}
        >
            <Container>
                <View style={{ flexDirection: 'row', marginBottom: 28 }}>
                    <MoodEmoji source={MoodImage[post?.mood]} />
                    <View style={{ justifyContent: 'space-between' }}>
                        <DateFont>{PostDay?.format('YYYY년 MM월 DD일')}</DateFont>
                        <Mood>{MoodDescription[post?.mood]}</Mood>
                        <Area>{post?.area}</Area>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
                        <TemperatureHigh>{parseInt(post?.temperatureHigh)}°</TemperatureHigh>
                        <Division />
                        <TemperatureLow>{parseInt(post?.temperatureLow)}°</TemperatureLow>
                    </View>
                </View>
                {ClothesTypeEng.map((cloth, index) => (
                    <TypeBox key={index}>
                        <Clothes>{ClothesType[index]}</Clothes>
                        {post?.dressResponses.map(
                            (item: any, count: any) =>
                                cloth === item.dressType && (
                                    <View key={count} style={{ flexDirection: 'row' }}>
                                        {/*<Circle MoodColor={MoodColor[item?.partialMood]} />*/}
                                        {item?.partialMood === 'null' ? null : (
                                            <Circle MoodColor={MoodColor[item?.partialMood]} />
                                        )}
                                        <ClothesName>{item?.dressName ? item?.dressName : '-'}</ClothesName>
                                    </View>
                                )
                        )}
                    </TypeBox>
                ))}
            </Container>
        </Modal>
    );
};

export default MainPageModal;
