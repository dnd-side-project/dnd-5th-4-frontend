import React from 'react';
import type { AuthAction } from './types';

export const reducer: React.Reducer<{ user?: object }, AuthAction> = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.payload,
            };
    }
};
