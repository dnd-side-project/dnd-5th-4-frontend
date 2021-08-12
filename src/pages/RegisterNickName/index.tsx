import React, { useState } from 'react';

import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StepBar, SubTitleText, Container, Next, TopContainer, TitleText, Button } from './styles';
import api from '../../settings/api';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

type UserProps = {
    route: any;
};
const RegisterNickName: React.FC<UserProps> = ({ route }) => {
    const [nickName, setNickName] = useState<string>('');
    const { userId } = route.params;
    const navigation = useNavigation();
    const CheckNickName = () => {
        let params = {
            name: 'testId',
        };

        axios
            .get('http://13.124.179.186:8080/name', { data: { params } })
            .then((res) => {
                if (res?.status !== 200) {
                    console.log('!err');
                    return;
                }
            })
            .catch((err) => {
                console.log('err', err.response.data);
            });
    };
    return (
        <Container>
            <View>
                <TopContainer>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>
                </TopContainer>
                <TitleText>닉네임을 입력해주세요</TitleText>

                <TextInput
                    style={{
                        height: 44,
                        width: '100%',
                        borderWidth: 1,
                        paddingVertical: 12,
                        paddingHorizontal: 10,
                        borderColor: '#D6D6D7',
                        borderRadius: 4,
                        fontFamily: 'Pretendard400',
                        marginTop: 20,
                    }}
                    placeholder="한글/영어/숫자를 사용할 수 있어요. (2~12자)"
                    onChangeText={(text) => setNickName(text)}
                    maxLength={14}
                />

                <SubTitleText>불쾌감을 줄 수 있는 닉네임은 임의로 변경될 수 있습니다</SubTitleText>
            </View>
            <Button onPress={() => CheckNickName()}>
                <Next>다음</Next>
            </Button>
        </Container>
    );
};

export default RegisterNickName;
