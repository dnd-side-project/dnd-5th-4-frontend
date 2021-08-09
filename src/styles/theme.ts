import { Platform } from 'react-native';

const theme = {
    mainColor: {
        activeButton: '#000000',
        unactiveButton: '#C9C9C9',
    },
    color: {
        white: '#ffffff',
        black: '#000000',
        red: '#FF4743',
        yellow: '#FDC62E',
        green: '#2EE788',
        skyblue: '#48CFFA',
        deepblue: '#4068B0',
    },
    font: {
        // expo google font
        Pretendard400: {},
        Pretendard500: {},
        PretendardBold: {},
        Roboto400: {},
        Roboto500: {},
        RobotoBold: {},
        regular: { fontFamily: 'NotoSans-Regular', fontWeight: '' },
        medium: { fontFamily: 'NotoSans-Medium', fontWeight: '' },
        semiBold: { fontFamily: 'NotoSans-SemiBold', fontWeight: '' },
        extraBold: { fontFamily: 'NotoSans-ExtraBold', fontWeight: Platform.select({ ios: '', android: '' }) },
    },
};

export default theme;
