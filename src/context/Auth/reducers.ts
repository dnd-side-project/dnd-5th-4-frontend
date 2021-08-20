import React from 'react';
import type { AuthAction, userInfo } from './types';

export const reducer: React.Reducer<{ user?: userInfo }, AuthAction> = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.payload,
            };
    }
};
