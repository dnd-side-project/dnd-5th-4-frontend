export type LoginAction = {
    type: 'LOGIN';
    payload: {
        userId: string;
    };
};

export type AuthAction = LoginAction;
