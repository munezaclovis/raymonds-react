import { IUser } from "../../models/User";
import { IAction } from "../../shared/Types";

export const initialState: IUser = {
    id: undefined,
    name: undefined,
    email: undefined,
    role: { name: undefined },
    created_at: undefined,
    updated_at: undefined,
};


export const Reducer = (state: IUser, action: IAction): IUser => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.payload
        case 'RESET_CURRENT_USER':
            return {} as IUser
        default:
            return {} as IUser
    }
}