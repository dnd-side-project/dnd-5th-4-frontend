import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AreaName, Today, Container, RightContainer, IconImage } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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
    return (
        <Container>
            <View>
                <Today>
                    {month}월 {date}일 {week[day]}요일
                </Today>
                <AreaName>{LocationName?.replace(/광역시|특별시/gi, '')}</AreaName>
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
