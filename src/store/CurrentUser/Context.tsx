import React, { useReducer, createContext, FC } from 'react'
import { IAction } from '../../shared/Types';
import { initialState, Reducer } from './Reducers';

export const CurrentUserContext = createContext({ user: initialState, setUser: (e: IAction): any => { } });

const CurrentUserProvider: FC = ({ children }) => {
    const [user, setUser] = useReducer(Reducer, initialState)

    return (
        <CurrentUserContext.Provider value={{ user, setUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export default CurrentUserProvider;