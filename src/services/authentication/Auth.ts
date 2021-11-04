import AccessTokenStorageManager from "../localstorage/AccessTokenStorageManager";

export default class Auth {
    static tokenIsValid(token: string): boolean {
        return (JSON.parse(atob(token.split('.')[1])).exp > (Date.now() / 1000))
    }

    static isLoggedIn() {
        const token = AccessTokenStorageManager.get();
        if (token === null) {
            return false
        } else if (!this.tokenIsValid(token)) {
            return false;
        }
        return true;
    }
}