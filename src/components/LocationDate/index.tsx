import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AreaName, Today, Container, RightContainer, IconImage } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LocationGps } from '../../untils/GpsFunction';
import { useLocationDispatch } from '../../context';
import * as Locations from 'expo-location';

type LocationDateProps = {
    Location: Array<string>;
    setLocation: React.ReactNode;
};
const LocationDate: React.FC<LocationDateProps> = ({ Location, setLocation }) => {
    let LocationName = Location.length > 1 ? Location[0] + ' ' + Location[1] : Location[0];
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDay(); // 요일
    let week = ['일', '월', '화', '수', '목', '금', '토'];
    const navigation = useNavigation();
    const HandleGPS = () => {
        (async () => {
            let { status } = await Locations.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('GPS 좌표를 알아오지 못했습니다.');
                return;
            }

            let locationq = await Locations.getCurrentPositionAsync({});
            let keys = {
                latitude: Math.abs(locationq.coords.latitude),
                longitude: Math.abs(locationq.coords.longitude),
            };
            // console.log(location);
            locationDispatch({ type: 'LOCATION', payload: { location: keys } });
        })();
        // authDispatch({ type: 'LOGIN', payload: { userId } });
    };
    return (
        <Container>
            <View>
                <Today>
                    {month}월 {date}일 {week[day]}요일
                </Today>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AreaName>{LocationName?.replace(/광역시|특별시/gi, '')}</AreaName>
                    <TouchableOpacity
                        onPress={() => {
                            HandleGPS();
                            // let test = LocationGps();
                            // console.log('qwe', test);
                            // locationDispatch({ type: 'LOCATION', payload: { location: test } });
                        }}
                    >
                        <IconImage
                            source={require('Images/location.png')}
                            resizeMode={'contain'}
                            style={{ width: 15, height: 15, marginLeft: 6 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <RightContainer>
                <TouchableOpacity onPress={() => navigation.navigate('LocationSearch')}>
                    <IconImage
                        source={require('Images/search.png')}
                        style={{ marginRight: 16 }}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconImage source={require('Images/setting.png')} resizeMode={'contain'} />
                </TouchableOpacity>
            </RightContainer>
        </Container>
    );
};

export default LocationDate;
