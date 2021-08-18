import React, { useReducer } from 'react';
import { reducer } from './reducers';
import { MeasureAction } from './types';

const MeasuresContext = React.createContext({});
const DispatchContext = React.createContext<React.Dispatch<MeasureAction>>(() => {
    throw new Error();
});

export const MeasuresProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { measures: [] });

    return (
        <MeasuresContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </MeasuresContext.Provider>
    );
};

export const useMeasureState = () => {
    const state = React.useContext(MeasuresContext);
    return state;
};

export const useMeasureDispatch = () => {
    const dispatch = React.useContext(DispatchContext);
    return dispatch;
};
