import React, { useEffect, useState } from 'react';
import { View, Text, Button, Platform, Image, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import { useAuthState } from 'context/Auth';

import calendarEmoji from 'components/calendarEmoji';
import CalendarEmoji from 'components/calendarEmoji';
import api from 'settings/api';
import { Container, CalendarRow, DatesContainer, DateContainer, Days, EmojiBox, SelectText, DateNumber } from './style';
import { useIsFocused } from '@react-navigation/native';
const MyPage = () => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [selectDate, setSelectDate] = useState(new Date());
    const today = moment(selectDate);
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const [posts, setPosts] = useState([]);
    const authState = useAuthState();
    const user = authState?.user;
    useEffect(() => {
        fetchUserPosts();
        console.log('1');
    }, [selectDate, navigation, isFocused]);
    const fetchUserPosts = () => {
        let params = {
            userId: user?.id,
            year: selectDate.getFullYear(),
            month: selectDate.getMonth() + 1,
        };
        api.get('measure/calendar', { params })
            .then((res) => {
                if (res.status !== 200) {
                    console.log('게시글을 얻지못했습니다.');
                    return;
                }
                setPosts(res?.data?.measures);
                // console.log(res.data.measures);
            })
            .catch((err) => {
                console.log('Mypage Err', err);
            });
    };
    const calendarArr = (posts: any) => {
        let result: any[] = [];
        let week = firstWeek;
        for (week; week <= lastWeek; week++) {
            result = result.concat(
                <CalendarRow key={week}>
                    {Array(7)
                        .fill(0)
                        .map((data, index) => {
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
                            if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                                return (
                                    <DatesContainer key={index}>
                                        <View
                                            style={{
                                                backgroundColor: '#000',
                                                borderRadius: 50,
                                                width: 20,
                                                height: 20,
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <DateNumber color={'#FFFFFF'}>{days.format('D')}</DateNumber>
                                        </View>

                                        <EmojiBox>
                                            {/*{posts.map((post, index) =>*/}
                                            {/*    moment(post.dateTime).format('YYYYMMDD') === days.format('YYYYMMDD') ? (*/}
                                            {/*        <CalendarEmoji post={post} key={index} />*/}
                                            {/*    ) : null*/}
                                            {/*)}*/}
                                            {posts.filter(
                                                (el: any) =>
                                                    moment(el.dateTime).format('YYYYMMDD') === days.format('YYYYMMDD')
                                            ).length === 0 ? null : (
                                                <CalendarEmoji
                                                    post={
                                                        posts[
                                                            posts.filter(
                                                                (el: any) =>
                                                                    moment(el.dateTime).format('YYYYMMDD') ===
                                                                    days.format('YYYYMMDD')
                                                            ).length
                                                        ]
                                                    }
                                                    key={index}
                                                />
                                            )}
                                        </EmojiBox>
                                    </DatesContainer>
                                );
                            } else if (days.format('MM') !== today.format('MM')) {
                                return (
                                    <DatesContainer key={index}>
                                        <DateNumber color={'#CACCD6'}>{days.format('D')}</DateNumber>
                                        <EmojiBox />
                                    </DatesContainer>
                                );
                            } else {
                                return (
                                    <DatesContainer key={index}>
                                        <DateNumber color={'#000000'}>{days.format('D')}</DateNumber>
                                        <EmojiBox>
                                            {/*{posts.map((post, index) =>*/}
                                            {/*    moment(post.dateTime).format('YYYYMMDD') === days.format('YYYYMMDD') ? (*/}
                                            {/*        <CalendarEmoji post={post} key={index} />*/}
                                            {/*    ) : null*/}
                                            {/*)}*/}
                                            {posts
                                                .filter(
                                                    (el: any) =>
                                                        moment(el.dateTime).format('YYYYMMDD') ===
                                                        days.format('YYYYMMDD')
                                                )
                                                .map((post: any, index: number) =>
                                                    index === 0 ? <CalendarEmoji post={post} key={index} /> : null
                                                )}
                                        </EmojiBox>
                                    </DatesContainer>
                                );
                            }
                        })}
                </CalendarRow>
            );
        }
        return result;
    };
    let Dates = ['일', '월', '화', '수', '목', '금', '토'];
    const onChange = (event, Date) => {
        const currentDate = Date || selectDate;
        setShow(Platform.OS === 'ios');
        setSelectDate(currentDate);
        setShow(!show);
        // console.log(currentDate);
    };
    return (
        <Container>
            <View style={{ marginBottom: 12, flexDirection: 'row' }}>
                <SelectText>
                    {selectDate.getUTCFullYear() + '월 ' + parseInt(String(selectDate.getMonth() + 1)) + '월'}
                </SelectText>
                <TouchableOpacity onPress={() => onChange()}>
                    <Image
                        source={require('Images/isMore.png')}
                        resizeMode={'contain'}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={selectDate}
                    mode={'date'}
                    is24Hour={true}
                    display="spinner"
                    onChange={onChange}
                />
            )}
            <DateContainer>
                {Dates.map((date, index) => (
                    <Days key={index}>{date}</Days>
                ))}
            </DateContainer>
            <View>
                <View>{calendarArr(posts)}</View>
            </View>
        </Container>
    );
};
export default MyPage;
// const posts = [
//     {
//         measureId: 5,
//         userId: 'testuser1',
//         dateTime: '2021-08-17T05:28:42',
//         temperatureHigh: 31.5,
//         temperatureLow: 24.3,
//         humidity: 15.0,
//         mood: 'COLD',
//     },
//     {
//         measureId: 5,
//         userId: 'testuser1',
//         dateTime: '2021-08-13T05:28:42',
//         temperatureHigh: 31.5,
//         temperatureLow: 24.3,
//         humidity: 15.0,
//         mood: 'COLD',
//     },
//     {
//         measureId: 14,
//         userId: 'testuser1',
//         dateTime: '2021-08-05T05:28:42',
//         temperatureHigh: 31.5,
//         temperatureLow: 26.3,
//         humidity: 60.0,
//         mood: 'GOOD',
//     },
//     {
//         measureId: 22,
//         userId: 'testuser1',
//         dateTime: '2021-08-27T05:28:42',
//         temperatureHigh: 37.0,
//         temperatureLow: 24.4,
//         humidity: 70.0,
//         mood: 'HOT',
//     },
// ];
