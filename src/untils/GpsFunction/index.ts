import * as Location from 'expo-location';
import { useAuthDispatch, useLocationDispatch } from '../../context';
export const LocationGps = () => {
    // const locationDispatch = useLocationDispatch();
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('GPS 좌표를 알아오지 못했습니다.');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        let keys = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };
        // authDispatch({ type: 'LOGIN', payload: { userId } });
        // locationDispatch({ type: 'LOCATION', payload: { location: keys } });
        // console.log( keys);
        return keys;
    })();
};
