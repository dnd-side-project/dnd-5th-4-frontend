import React from 'react';
import type { AuthAction, DressAction } from './types';
import type { LocationAction } from './locationTypes';

export const reducer: React.Reducer<{ userId?: string }, AuthAction> = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.payload,
            };
    }
};
export const locationReducer: React.Reducer<{ location?: object }, LocationAction> = (state, action) => {
    switch (action.type) {
        case 'LOCATION':
            return {
                ...state,
                ...action.payload,
            };
    }
};

export const dressReducer: React.Reducer<{ dress?: object }, DressAction> = (state, action) => {
    switch (action.type) {
        case 'UPLOAD_DRESS':
            return {
                ...state,
                ...action.payload,
            };
    }
};
