import React from 'react';
import { reducer } from './reducers';
import { DressAction } from './types';

const DressContext = React.createContext({});
const DispatchContext = React.createContext<React.Dispatch<DressAction>>(() => {
    throw new Error();
});

export const DressProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, {});

    return (
        <DressContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </DressContext.Provider>
    );
};

export const useDressState = () => {
    const state = React.useContext(DressContext);
    return state;
};

export const useDressDispatch = () => {
    const dispatch = React.useContext(DispatchContext);
    return dispatch;
};
