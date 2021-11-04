import { IThemeSettings } from "../../models/ThemeSettings";

export default class ThemeSettingsStorageManager {
    static theme_settings_name = process.env.REACT_APP_THEME_SETTINGS_NAME ?? ''
    static set(data: IThemeSettings) {
        localStorage.setItem(this.theme_settings_name, JSON.stringify(data));
    }

    static get() {
        const result = localStorage.getItem(this.theme_settings_name)
        if (result !== null) {
            return JSON.parse(result)
        }
        return {} as IThemeSettings;
    }

    static clean() {
        localStorage.removeItem(this.theme_settings_name)
    }
}