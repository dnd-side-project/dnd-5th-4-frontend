import { userInfo, AuthAction } from './types';

export const login = (user: userInfo): AuthAction => ({
    type: 'LOGIN',
    payload: user,
});
