import React, { useState } from 'react';
import theme from 'styles/theme';
import { StyleSheet, TouchableOpacity, View, FlatList, Image } from 'react-native';
import RegisterLayout from 'layout/Register';
import { Box, Text } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Button, Next } from '../RegisterNickName/styles';
type UserProps = {
    route: any;
};
const RegisterGender: React.FC<UserProps> = ({ route }) => {
    const navigation = useNavigation();

    const { userId, nickName } = route.params;
    const [maleClicked, setMaleClicked] = useState(false);
    const [femaleClicked, setFemaleClicked] = useState(false);
    const onMaleClick = () => {
        setMaleClicked(!maleClicked);
        setFemaleClicked(false);
    };
    const onFemaleClick = () => {
        setMaleClicked(false);
        setFemaleClicked(!femaleClicked);
    };

    // navigation.navigate('RegisterGender', { userId: userId, name: nickName });
    const CheckNickGender = () => {
        let gender = '';
        if (maleClicked) {
            gender = 'M';
            console.log('M');
        } else {
            gender = 'W';
        }
        navigation.navigate('RegisterConstitution', { userId: userId, name: nickName, gender: gender });
    };
    return (
        <RegisterLayout titleContents="성별을 기입해주세요" subTitleContents="성별 정보는 옷 추천 기능에서 활용됩니다.">
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box clicked={maleClicked} onPress={() => onMaleClick()}>
                    <Image style={styles.Logo} resizeMode="contain" source={require('Images/smile-blue.jpg')} />
                    <Text>남자</Text>
                </Box>
                <Box clicked={femaleClicked} onPress={() => onFemaleClick()}>
                    <Image style={styles.Logo} resizeMode="contain" source={require('Images/smile-blue.jpg')} />
                    <Text>여자</Text>
                </Box>
            </View>
            <Button
                color={!maleClicked && !femaleClicked}
                onPress={() => CheckNickGender()}
                disabled={!maleClicked && !femaleClicked}
            >
                <Next>다음</Next>
            </Button>
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
