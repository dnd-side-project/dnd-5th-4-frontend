import { Animated } from 'react-native';

export const CloudLeftMove = (RightMove: any, Left: any) => {
    Animated.loop(
        Animated.sequence([
            Animated.timing(RightMove, {
                toValue: Left,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(RightMove, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
        ])
    ).start();
};
export const CloudRightMove = (LeftMove: any, Right: any) => {
    Animated.loop(
        Animated.sequence([
            Animated.timing(LeftMove, {
                toValue: Right,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(LeftMove, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
        ])
    ).start();
};
export const ArrowDownMove = (ArrowMove: any) => {
    Animated.loop(
        Animated.timing(ArrowMove, {
            toValue: 10,
            duration: 1000,
            useNativeDriver: true,
        }),
        { iterations: 1000 }
    ).start();
};
export const sunAnimation = (anim: any) => {
    //회전
    //스케일
    Animated.loop(
        Animated.timing(anim, {
            toValue: 100,
            duration: 20000,
            useNativeDriver: true,
        }),
        { iterations: 1000 }
    ).start();
};
export const sunScaleAnimation = (anim: any) => {
    //스케일
    Animated.loop(
        Animated.sequence([
            // increase size
            Animated.timing(anim.current, {
                toValue: 1.2,
                duration: 2000,
                useNativeDriver: false,
            }),
            // decrease size
            Animated.timing(anim.current, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false,
            }),
        ])
    ).start();
};
export const getWeatherImage = (currentWeather: any) => {
    if (currentWeather >= 31) return require('WeatherMainImage/veryHot.png');
    else if (currentWeather >= 26) return require('WeatherMainImage/hot.png');
    else if (currentWeather >= 18) return require('WeatherMainImage/good.png');
    else if (currentWeather > 10) return require('WeatherMainImage/cold.png');
    else if (currentWeather > -999) return require('WeatherMainImage/veryCold.png');
};
