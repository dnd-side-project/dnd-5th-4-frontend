import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import { TextBox, LocationScrollView, LocationBox, TextView, TextLine1, TextLine2, TextLine3 } from './styles';
import UploadLayout from 'layout/Upload';
import { AntDesign } from '@expo/vector-icons';

const UploadWeather = () => {
    const initialLocation = '예) 강남구, 진주시';
    const [location, setLocation] = useState(initialLocation);
    const [textBox, setTextBox] = useState(false);
    const [locationBox, setLocationBox] = useState(false);
    const onLocationClick = () => {
        setLocationBox(!locationBox);
    };

    const onTextBoxClick = () => {
        setTextBox(!textBox);
    };

    return (
        <UploadLayout
            titleContents1="오늘의 날씨를"
            titleContents2="기록해볼까요?"
            subTitleContents="현재 날씨와 위치정보를 확인해주세요."
            buttonText="다음"
        >
            <View style={styles.contents}>
                <TextBox clicked={textBox} onClick={onTextBoxClick}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(location) => setLocation(location)}
                        value={location}
                    />
                    <AntDesign name="search1" size={24} color="black" />
                </TextBox>

                <LocationScrollView keyboardDismissMode="interactive">
                    <LocationBox clicked={locationBox} onClick={onLocationClick}>
                        <TextView>
                            <TextLine1>구름 많음</TextLine1>
                            <TextLine2>31° 서울 서초구 </TextLine2>
                            <TextLine3>35° / 35°</TextLine3>
                        </TextView>
                        <Image
                            style={styles.weatherLogo}
                            resizeMode="contain"
                            source={require('Images/smile-blue.jpg')}
                        />
                    </LocationBox>
                    <LocationBox clicked={locationBox} onClick={onLocationClick}>
                        <TextView>
                            <TextLine1>구름 많음</TextLine1>
                            <TextLine2>31° 서울 서초구 </TextLine2>
                            <TextLine3>35° / 35°</TextLine3>
                        </TextView>
                        <Image
                            style={styles.weatherLogo}
                            resizeMode="contain"
                            source={require('Images/smile-blue.jpg')}
                        />
                    </LocationBox>
                    <LocationBox clicked={locationBox} onClick={onLocationClick}>
                        <TextView>
                            <TextLine1>구름 많음</TextLine1>
                            <TextLine2>31° 서울 서초구 </TextLine2>
                            <TextLine3>35° / 35°</TextLine3>
                        </TextView>
                        <Image
                            style={styles.weatherLogo}
                            resizeMode="contain"
                            source={require('Images/smile-blue.jpg')}
                        />
                    </LocationBox>
                    <LocationBox clicked={locationBox} onClick={onLocationClick}>
                        <TextView>
                            <TextLine1>구름 많음</TextLine1>
                            <TextLine2>31° 서울 서초구 </TextLine2>
                            <TextLine3>35° / 35°</TextLine3>
                        </TextView>
                        <Image
                            style={styles.weatherLogo}
                            resizeMode="contain"
                            source={require('Images/smile-blue.jpg')}
                        />
                    </LocationBox>
                </LocationScrollView>
            </View>
        </UploadLayout>
    );
};

const styles = StyleSheet.create({
    contents: {
        flex: 1,
        flexDirection: 'column',
    },
    textInput: {
        fontSize: 14,
        flex: 1,
    },
    weatherLogo: {
        width: 142,
        // backgroundColor: '#223',
    },
});

export default UploadWeather;
