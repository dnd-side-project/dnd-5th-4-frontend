import React, { useState } from 'react';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StepBar, SubTitleText, Container, Next, TopContainer, TitleText, Button } from './styles';

const RegisterNickName = () => {
    const [nickName, setNickName] = useState('');
    return (
        <Container>
            <View>
                <TopContainer>
                    <TouchableOpacity
                        onPress={() => {
                            alert('back button clicked');
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
            <Button>
                <Next>다음</Next>
            </Button>
        </Container>
    );
};

export default RegisterNickName;
