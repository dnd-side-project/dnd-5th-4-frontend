import React, { useState } from 'react';
import theme from 'styles/theme';
import { StyleSheet, TouchableOpacity, View, FlatList, Image } from 'react-native';
import RegisterLayout from 'layout/Register';
import { Box, Text } from './styles';

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
        <RegisterLayout
            topContents="건너뛰기"
            titleContents="성별을 기입해주세요"
            subTitleContents="성별 정보는 옷 추천 기능에서 활용됩니다."
            buttonText="다음"
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box clicked={maleClicked} onClick={onMaleClick}>
                    <Image style={styles.Logo} resizeMode="contain" source={require('Images/smile-blue.jpg')} />
                    <Text>남자</Text>
                </Box>
                <Box clicked={femaleClicked} onClick={onFemaleClick}>
                    <Image style={styles.Logo} resizeMode="contain" source={require('Images/smile-blue.jpg')} />
                    <Text>여자</Text>
                </Box>
            </View>
        </RegisterLayout>
    );
};

const styles = StyleSheet.create({
    // title: {
    //     color: theme.color.black,
    // },
    // subTitle: {
    //     color: theme.color.black,
    // },
    Logo: {
        marginBottom: 16,
        width: 94,
    },
});

export default RegisterGender;
