import React, { useState } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { MoodImage } from '../../untils/MoodWeather';
import { Emoji, TemperatureHigh, TemperatureLow, Division } from './styles';
import api from '../../settings/api';
import BottomSheet from '../PostBottomSheet';
interface CalendarEmojiProps {
    post: any;
}

const CalendarEmoji: React.FC<CalendarEmojiProps> = ({ post }) => {
    const [detailPost, setDetailPost] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const postTouchHandler = () => {
        api.get(`measure/${post.measureId}`)
            .then((res) => {
                if (res.status !== 200) {
                    console.log('포스트 정보를 받아오지 못했습니다');
                    return;
                }
                setDetailPost(res?.data);
                setModalVisible(true);
            })
            .catch((err) => {
                console.log('err', err);
            });
    };
    return (
        <>
            <TouchableOpacity onPress={() => postTouchHandler()}>
                <View>
                    <Emoji source={MoodImage[post?.mood]} resizeMode={'contain'} />
                    <View>
                        <TemperatureHigh>{parseInt(post?.temperatureHigh)}°</TemperatureHigh>
                        <Division />
                        <TemperatureLow>{parseInt(post?.temperatureLow)}°</TemperatureLow>
                    </View>
                    {modalVisible && (
                        <BottomSheet
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
                            detailPost={detailPost}
                        />
                    )}
                </View>
            </TouchableOpacity>
        </>
    );
};

export default CalendarEmoji;
