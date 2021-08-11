import React, { useState } from 'react';
import theme from 'styles/theme';
import { StyleSheet, TouchableOpacity, View, FlatList, Image } from 'react-native';
import RegisterLayout from 'layout/Register';
import { Box, Text } from './styles';

const RegisterConstitution = () => {
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
            titleContents="체질을 기입해주세요"
            subTitleContents="체질 정보는 옷 추천 기능에서 활용됩니다. \n 해당되지 않는다면 건너뛰기를 눌러주세요."
            buttonText="시작하기"
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box clicked={maleClicked} onClick={onMaleClick}>
                    <Image style={styles.Logo} resizeMode="contain" source={require('Images/smile-blue.jpg')} />
                    <Text>더위 많이 타는 편</Text>
                </Box>
                <Box clicked={femaleClicked} onClick={onFemaleClick}>
                    <Image style={styles.Logo} resizeMode="contain" source={require('Images/smile-blue.jpg')} />
                    <Text>추위 많이 타는 편</Text>
                </Box>
            </View>
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
    Logo: {
        marginBottom: 16,
        width: 94,
    },
});

export default RegisterConstitution;
