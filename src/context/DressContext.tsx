import { DressAction } from 'context';
import React from 'react';
import { dressReducer } from './reducers';

const DressContext = React.createContext({});
const DispatchContext = React.createContext<React.Dispatch<DressAction>>(() => {
    throw new Error();
});

export const DressProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(dressReducer, {});

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
