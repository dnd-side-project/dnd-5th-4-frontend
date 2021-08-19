import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native';

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
    PushAlert,
    Distrub,
} from './styles';

const AlertSettingPage = () => {
    const navigation = useNavigation();
    const [isPushAlertEnabled, setIsPushAlertEnabled] = useState(false);
    const [isDistrubEnabled, setIsDistrubEnabled] = useState(false);
    const togglePushAlertSwitch = () => setIsPushAlertEnabled((previousState) => !previousState);
    const toggleDistrubSwitch = () => setIsDistrubEnabled((previousState) => !previousState);

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
                <Title>알림설정</Title>
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
                    <PushAlert>푸쉬알림</PushAlert>
                    <Switch
                        trackColor={{ false: '#CACCD6', true: '#000' }}
                        thumbColor="#fff"
                        ios_backgroundColor="#CACCD6"
                        onValueChange={togglePushAlertSwitch}
                        value={isPushAlertEnabled}
                    />
                </ListElement>
                <ListElement>
                    <Distrub>방해금지</Distrub>
                    <Switch
                        trackColor={{ false: '#CACCD6', true: '#000' }}
                        thumbColor="#fff"
                        ios_backgroundColor="#CACCD6"
                        onValueChange={toggleDistrubSwitch}
                        value={isDistrubEnabled}
                    />
                </ListElement>
            </ListBox>
        </Container>
    );
};

export default AlertSettingPage;
