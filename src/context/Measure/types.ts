export type MeasureAction =
    | {
          type: 'MEASURE';
          payload: measureItem[];
      }
    | {
          type: 'POST_MEASURE';
          payload: measureItem;
      }
    | {
          type: 'PATCH_MEASURE';
          payload: measureItem;
      }
    | {
          type: 'DELETE_MEASURE';
          payload: number;
      };

export type measureItem = {
    measureId: number;
    userId: string;
    userName: string;
    userConstitution: string;
    date: string;
    tempInfo: string;
    temperatureHigh: number;
    temperatureLow: number;
    humidity: number;
    area: string;
    mood: string;
    comment: string;
    dressResponses: object[];
};

export type measureState = {
    measures: measureItem[];
};
