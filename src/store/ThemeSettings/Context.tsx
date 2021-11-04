import React, { useReducer, createContext, FC } from 'react'
import { initialState, Reducer } from './Reducers';
import { IAction } from '../../shared/Types';

export const ThemeSettingsContext = createContext({ settings: initialState, setSettings: (e: IAction): any => { } });

const ThemeSettingsProvider: FC = ({ children }) => {
    const [settings, setSettings] = useReducer(Reducer, initialState)

    return (
        <ThemeSettingsContext.Provider value={{ settings: settings, setSettings }}>
            {children}
        </ThemeSettingsContext.Provider>
    );
}

export default ThemeSettingsProvider;