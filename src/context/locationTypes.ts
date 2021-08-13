export type LocationAction = {
    type: 'LOCATION';
    payload: {
        location: object;
    };
};

export type ChangeLocationAction = LocationAction;
