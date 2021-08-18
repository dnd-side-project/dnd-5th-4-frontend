import React from 'react';
import type { measureState, MeasureAction } from './types';

export const reducer = (state: measureState, action: MeasureAction): measureState => {
    switch (action.type) {
        case 'MEASURE':
            return {
                ...state,
                ...action.payload,
            };
        case 'POST_MEASURE':
            return {
                ...state,
                measures: [...state.measures, action.payload],
            };
        case 'PATCH_MEASURE':
            const updatedMeasure = action.payload;
            const updatedMeasures = state.measures?.map((measure) => {
                if (measure.measureId === updatedMeasure.measureId) {
                    return updatedMeasure;
                }
                return measure;
            });
            return {
                ...state,
                measures: updatedMeasures,
            };
        case 'DELETE_MEASURE':
            return {
                ...state,
                measures: state.measures.filter((measure) => measure.measureId !== action.payload),
            };

        default:
            return state;
    }
};
