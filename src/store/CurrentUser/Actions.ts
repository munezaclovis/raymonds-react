import { IAction } from "../../shared/Types"

export const setCurrentUser = (e: any): IAction => {
    return ({
        type: 'SET_CURRENT_USER',
        payload: e
    })
}

export const resetCurrentUser = (): IAction => {
    return ({
        type: 'RESET_CURRENT_USER',
        payload: null
    })
}