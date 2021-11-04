export default class AccessTokenStorageManager {
    static access_token_name = process.env.REACT_APP_ACCESS_TOKEN_NAME ?? '';
    static set(data: string) {
        localStorage.setItem(this.access_token_name, data);
    }

    static get(): string | null {
        const result = localStorage.getItem(this.access_token_name)
        if (result !== null) {
            return (result)
        }
        return null;
    }

    static clean() {
        localStorage.removeItem(this.access_token_name)
    }
}