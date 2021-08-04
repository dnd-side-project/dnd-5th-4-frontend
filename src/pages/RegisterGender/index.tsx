import RegisterLayout from 'layout/Register';
import React, { useState } from 'react';
import theme from 'styles/theme';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { Box } from './styles';

const topContents = () => {
    return (
        <>
            <Text>{'<-'}</Text>
            <Text>{'건너뛰기'}</Text>
        </>
    );
};

const titleContents = () => {
    return (
        <>
            <Text style={styles.title}>성별을 기입해주세요</Text>
            <Text style={styles.subTitle}>성별 정보는 옷 추천 기능에서 활용됩니다. </Text>
        </>
    );
};

const RegisterGender = () => {
    const [maleClicked, setMaleClicked] = useState(false);
    const [femaleClicked, setFemaleClicked] = useState(false);
    const onMaleClick = () => {
        setMaleClicked(!maleClicked);
        setFemaleClicked(!femaleClicked);
    };
    const onFemaleClick = () => {
        setMaleClicked(!maleClicked);
        setFemaleClicked(!femaleClicked);
    };

    return (
        <RegisterLayout topContents={topContents} titleContents={titleContents}>
            <TouchableOpacity>
                <Box clicked={maleClicked} onClick={onMaleClick}>
                    <Image source={require('Images/smile-blue.jpg')} />
                    <Text>남자</Text>
                </Box>
                <Box clicked={femaleClicked} onClick={onFemaleClick}>
                    <Image source={require('Images/smile-blue.jpg')} />
                    <Text>여자</Text>
                </Box>
            </TouchableOpacity>
        </RegisterLayout>
    );
};

const styles = StyleSheet.create({
    title: {
        color: theme.color.black,
    },
    subTitle: {
        color: theme.color.black,
    },
});

export default RegisterGender;
