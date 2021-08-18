export type ChangeLocationAction = {
    type: 'LOCATION';
    payload: {
        location: object;
    };
};

export type LocationAction = ChangeLocationAction;
