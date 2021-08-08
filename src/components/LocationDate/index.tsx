import React from 'react';
import { View } from 'react-native';
import { AreaName, Today, Container, RightContainer } from './styles';
import { Ionicons } from '@expo/vector-icons';
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

    return (
        <Container>
            <View>
                <Today>
                    {month}.{date}.{week[day]}
                </Today>
                <AreaName>{LocationName?.replace(/광역시|특별시/gi, '')}</AreaName>
            </View>
            <RightContainer>
                <Ionicons name="search" size={24} style={{ marginRight: 19 }} />
                <Ionicons name="settings-sharp" size={24} color="black" />
            </RightContainer>
        </Container>
    );
};

export default LocationDate;
