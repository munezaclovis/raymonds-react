import { IThemeSettings } from "./ThemeSettings"
import { IUser } from "./User"

export type IAuthCredentials = {
    name?: string | null | undefined,
    email: string | null | undefined,
    password: string | null | undefined,
    password_confirmation?: string | null | undefined,
}

export type IAuthErrors = {
    message : string | null | undefined,
    name?: string[] | null | undefined,
    email: string[] | null | undefined,
    password: string[] | null | undefined,
    password_confirmation?: string[] | null | undefined,
}

export type IAuthResponse = {
    access_token: string,
    user: IUser,
    themeSettings: IThemeSettings,
}