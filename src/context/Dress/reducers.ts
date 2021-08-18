import React from 'react';
import type { DressAction } from './types';

export const reducer: React.Reducer<{ dress?: object }, DressAction> = (state, action) => {
    switch (action.type) {
        case 'UPLOAD_DRESS':
            return {
                ...state,
                ...action.payload,
            };
    }
};
