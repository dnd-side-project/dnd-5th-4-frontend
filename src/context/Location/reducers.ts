import React from 'react';
import type { LocationAction } from './types';

export const reducer: React.Reducer<{ location?: object }, LocationAction> = (state, action) => {
    switch (action.type) {
        case 'LOCATION':
            return {
                ...state,
                ...action.payload,
            };
    }
};
