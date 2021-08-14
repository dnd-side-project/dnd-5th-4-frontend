export type LoginAction = {
    type: 'LOGIN';
    payload: {
        user: object;
    };
};

export type AuthAction = LoginAction;

export type UpLoadDressAction = {
    type: 'UPLOAD_DRESS';
    payload: {
        dress: object;
    };
};

export type DressAction = UpLoadDressAction;
