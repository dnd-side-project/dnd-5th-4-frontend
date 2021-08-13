import React from 'react';

import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Container, Description, IconImages, LeftContainer, LocationName, RightContainer, Touch } from './styles';
import { WeatherDescription, WeatherImages } from '../../untils/WeatherImages';
type LocationPostProps = {
    post: any;
};
const LocationPost: React.FC<LocationPostProps> = ({ post }) => {
    return (
        <Container>
            <LeftContainer>
                <Description>{WeatherDescription[post?.icon]}</Description>
                <LocationName>
                    {parseInt(post?.temp)}° &nbsp;{post?.Area}
                </LocationName>
            </LeftContainer>
            <RightContainer>
                <IconImages source={WeatherImages[post?.icon]} resizeMode={'contain'} />
            </RightContainer>
        </Container>
    );
};

export default LocationPost;
