import React from 'react';
import { reducer } from './reducers';
import { LocationAction } from './types';

const LocationContext = React.createContext({});
const DispatchContext = React.createContext<React.Dispatch<LocationAction>>(() => {
    throw new Error();
});

export const LocationProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, {});

    return (
        <LocationContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </LocationContext.Provider>
    );
};

export const useLocationState = () => {
    const state = React.useContext(LocationContext);
    return state;
};

export const useLocationDispatch = () => {
    const dispatch = React.useContext(DispatchContext);
    return dispatch;
};
