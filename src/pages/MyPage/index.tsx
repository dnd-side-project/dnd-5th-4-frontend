import React from 'react';

import { useState } from 'react';
import moment from 'moment';
import { View, Text, Button, Platform, Image, TouchableOpacity } from 'react-native';
import { Container, CalendarRow, DatesContainer, DateContainer, Days, EmojiBox, SelectText, DateNumber } from './style';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyPage = () => {
    const [show, setShow] = useState(false);
    const [selectDate, setSelectDate] = useState(new Date());
    const today = moment(selectDate);
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const calendarArr = () => {
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
                                        <EmojiBox></EmojiBox>
                                    </DatesContainer>
                                );
                            } else if (days.format('MM') !== today.format('MM')) {
                                return (
                                    <DatesContainer key={index}>
                                        <DateNumber color={'#CACCD6'}>{days.format('D')}</DateNumber>
                                        <EmojiBox></EmojiBox>
                                    </DatesContainer>
                                );
                            } else {
                                return (
                                    <DatesContainer key={index}>
                                        <DateNumber color={'#000000'}>{days.format('D')}</DateNumber>
                                        <EmojiBox></EmojiBox>
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
        console.log(currentDate);
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
                <View>{calendarArr()}</View>
            </View>
        </Container>
    );
};
export default MyPage;
