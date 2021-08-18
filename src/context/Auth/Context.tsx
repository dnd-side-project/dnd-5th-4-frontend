import React from 'react';
import { reducer } from './reducers';
import { AuthAction } from './types';

const AuthContext = React.createContext({});
const DispatchContext = React.createContext<React.Dispatch<AuthAction>>(() => {
    throw new Error();
});

export const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, {});

    return (
        <AuthContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </AuthContext.Provider>
    );
};

export const useAuthState = () => {
    const state = React.useContext(AuthContext);
    return state;
};

export const useAuthDispatch = () => {
    const dispatch = React.useContext(DispatchContext);
    return dispatch;
};
