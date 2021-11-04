import { IThemeSettings } from "../../models/ThemeSettings"
import { IAction } from "../../shared/Types"

export const initialState: IThemeSettings = {
    isMegaMenu: false,
    isSearchbar: false,
    isNotificationbar: false,
    themeColor: 'theme-cyan',
    fontStyle: 'font-ubuntu',
    lightVersion: false,
    offcanvas: false,
    miniSidebar: false,
    miniHover: false,
    miniSideMenuOn: false,
}

export const Reducer = (state: IThemeSettings, action: IAction): IThemeSettings => {
    switch (action.type) {
        case 'TOGGLE_MEGA_MENU':
            return {
                ...state,
                isMegaMenu: action.payload
            }
        case 'SET_MINI_SIDE_MENU_ON':
            return {
                ...state,
                miniSideMenuOn: action.payload
            }
        case 'SET_MINI_HOVER':
            return {
                ...state,
                miniHover: action.payload
            }
        case 'SET_MENU_SIDEBAR':
            return {
                ...state,
                miniSidebar: action.payload
            }
        case 'TOGGLE_SEARCH_BAR':
            return {
                ...state,
                isSearchbar: action.payload
            }
        case 'TOGGLE_NOTIFICATION_BAR':
            return {
                ...state,
                isNotificationbar: action.payload
            }
        case 'SET_THEME_COLOR':
            return {
                ...state,
                themeColor: action.payload
            }
        case 'SET_FONT_STYLE':
            return {
                ...state,
                fontStyle: action.payload
            }
        case 'SET_LIGHT_THEME':
            return {
                ...state,
                lightVersion: action.payload
            }
        case 'SET_OFF_CANVAS':
            return {
                ...state,
                offcanvas: action.payload
            }

        case 'SET_THEME_SETTINGS':
            return {
                ...state,
                isMegaMenu: action?.payload?.isMegaMenu ?? state.isMegaMenu,
                isSearchbar: action?.payload?.isSearchbar ?? state.isSearchbar,
                isNotificationbar: action?.payload?.isNotificationbar ?? state.isNotificationbar,
                themeColor: action?.payload?.themeColor ?? state.themeColor,
                fontStyle: action?.payload?.fontStyle ?? state.fontStyle,
                lightVersion: action?.payload?.lightVersion ?? state.lightVersion,
                offcanvas: action?.payload?.offcanvas ?? state.offcanvas,
                miniSidebar: action?.payload?.miniSidebar ?? state.miniSidebar,
                miniHover: action?.payload?.miniHover ?? state.miniHover,
                miniSideMenuOn: action?.payload?.miniSideMenuOn ?? state.miniSideMenuOn,
            }
        default:
            return state
    }
}