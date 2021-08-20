export type LoginAction = {
    type: 'LOGIN';
    payload: userInfo;
};

export type userInfo = {
    userId: string;
    name: string;
    gender: string;
    age?: number;
    constitution: string | undefined;
};

export type AuthAction = LoginAction;
