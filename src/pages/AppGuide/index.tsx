import React from 'react';

import { Text, View } from 'react-native';
import AppGuidesLayout from '../../layout/AppGuides';

const AppGuide = () => {
    return (
        <AppGuidesLayout
            titleContents={`체감 온도를 평가해서\n나만의 날씨를 기록해보세요`}
            subTitleContents={`체감 온도는 덥고 추움을 기준으로\n다섯 가지로 평가할 수 있어요`}
            Images={'First'}
        >
            <Text>AppGuide</Text>
        </AppGuidesLayout>
    );
};

export default AppGuide;
