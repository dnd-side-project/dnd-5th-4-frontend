import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import Button from 'components/Button';
import {
    Container,
    TopContainer,
    BackButton,
    Back,
    Title,
    CloseButton,
    Close,
    ListBox,
    ListElement,
    ListElementType,
    ContactNumberInputWrap,
    ContactNumberInput,
    QuestionContentsInputWrap,
    QuestionContentsInput,
    BottomContainer,
} from './styles';

const Question = () => {
    const [questionType, setQuestionType] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [questionContents, setQuestionContents] = useState('');
    const navigation = useNavigation();
    const OnPressButton = () => {};

    return (
        <Container>
            <TopContainer>
                <BackButton
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Back
                        source={require('Images/Back.png')}
                        resizeMode={'contain'}
                        style={{ width: 24, height: 24 }}
                    />
                </BackButton>
                <Title>문의하기</Title>
                <CloseButton
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Close source={require('Images/Close.png')} resizeMode={'contain'} />
                </CloseButton>
            </TopContainer>
            <ListBox>
                <ListElement>
                    <ListElementType>문의유형</ListElementType>
                    <Picker
                        // ref={pickerRef}
                        selectedValue={questionType}
                        onValueChange={(itemValue) => setQuestionType(itemValue)}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        <Picker.Item label="오류" value="오류" />
                        <Picker.Item label="환경설정" value="환경설정" />
                        <Picker.Item label="접속장애" value="접속장애" />
                        <Picker.Item label="기타문의 및 제안의견" value="기타문의 및 제안의견" />
                    </Picker>
                </ListElement>
                <ListElement>
                    <ListElementType>연락처</ListElementType>
                    <ContactNumberInputWrap>
                        <ContactNumberInput
                            value={contactNumber}
                            placeholder="답변 받을 연락처를 입력해주세요"
                            keyboardType="default"
                            onChange={(e) => {
                                setContactNumber(e.nativeEvent.text);
                            }}
                            placeholderTextColor="#A5A7AF"
                        />
                    </ContactNumberInputWrap>
                </ListElement>
                <ListElement>
                    <ListElementType>문의내용</ListElementType>
                    <QuestionContentsInputWrap>
                        <QuestionContentsInput
                            value={questionContents}
                            placeholder="문의할 내용을 입력해 주세요(최대 200자)"
                            keyboardType="default"
                            onChange={(e) => {
                                setQuestionContents(e.nativeEvent.text);
                            }}
                            placeholderTextColor="#A5A7AF"
                        />
                    </QuestionContentsInputWrap>
                </ListElement>
                {/* <ListElement>
                    <ListElementType>정보 수집/ 이용 동의 *</ListElementType>
                    <consent>
                        수집 주체: 클로더(CLOTHER) / 수집 목적: 프로젝트 문의에 대해 보다 정확한 답변을 위함. / 수집
                        항목: 필수(연락처, 문의내용)/ 보유기간: 수집 및 이용목적 달성 후 즉시 파기 됨.
                    </consent>
                    <CheckBoxWrap>
                        <CheckBox />
                        <CheckBoxLabel>개인정보보호정책에 동의합니다.</CheckBoxLabel>
                    </CheckBoxWrap>
                </ListElement> */}
            </ListBox>
            <BottomContainer>
                <Button
                    onPress={OnPressButton}
                    disabled={questionType.length === 0 || contactNumber.length === 0 || questionContents.length === 0}
                    color={questionType.length === 0 || contactNumber.length === 0 || questionContents.length === 0}
                >
                    변경하기
                </Button>
            </BottomContainer>
        </Container>
    );
};

const styles = StyleSheet.create({
    picker: {
        borderColor: '#E0E2EB',
        borderWidth: 1,
        marginBottom: 12,
        padding: 10,
    },
    pickerItem: {
        color: '#000',
    },
});

export default Question;
