export type LoginAction = {
    type: 'LOGIN';
    payload: {
        user: object;
    };
};

export type AuthAction = LoginAction;
