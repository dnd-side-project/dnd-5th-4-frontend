import { MeasureAction, measureItem } from './types';

export const measure = (measures: measureItem[]): MeasureAction => ({
    type: 'MEASURE',
    payload: measures,
});

export const postMeasure = (measure: measureItem): MeasureAction => ({
    type: 'POST_MEASURE',
    payload: measure,
});

export const patchMeasure = (measure: measureItem): MeasureAction => ({
    type: 'PATCH_MEASURE',
    payload: measure,
});

export const deleteMeasure = (id: number): MeasureAction => ({
    type: 'DELETE_MEASURE',
    payload: id,
});
