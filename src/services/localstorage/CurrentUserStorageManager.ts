import { IUser } from "../../models/User";

export default class CurrentUserStorageManager {
    static current_user_name = process.env.REACT_APP_CURRENT_USER_NAME ?? ''
    static set(data: any) {
        localStorage.setItem(this.current_user_name, JSON.stringify(data));
    }

    static get(): IUser {
        const result = localStorage.getItem(this.current_user_name)
        if (result !== null) {
            return JSON.parse(result)
        }
        return {} as IUser;
    }

    static clean() {
        localStorage.removeItem(this.current_user_name)
    }
}