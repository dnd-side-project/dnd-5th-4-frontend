export type UpLoadDressAction = {
    type: 'UPLOAD_DRESS';
    payload: {
        dress: object;
    };
};

export type DressAction = UpLoadDressAction;
