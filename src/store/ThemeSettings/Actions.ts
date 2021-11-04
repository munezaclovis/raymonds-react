import { IAction } from "../../shared/Types"

export const toggleMegamenu = (e: any): IAction => {
    return ({
        type: 'TOGGLE_MEGA_MENU',
        payload: e
    })
}

export const setMiniHover = (e: any): IAction => {
    return ({
        type: 'SET_MINI_HOVER',
        payload: e
    })
}

export const setMiniSidebarMenuOn = (e: any): IAction => {
    return ({
        type: 'SET_MINI_SIDE_MENU_ON',
        payload: e
    })
}

export const toggleSearchBar = (e: any): IAction => {
    return ({
        type: 'TOGGLE_SEARCH_BAR',
        payload: e
    })
}

export const toggleNotificationBar = (e: any): IAction => {
    return ({
        type: 'TOGGLE_NOTIFICATION_BAR',
        payload: e
    })
}

export const setMiniSidebar = (e: any): IAction => {
    return ({
        type: 'SET_MENU_SIDEBAR',
        payload: e
    })
}

export const setThemeColor = (e: any): IAction => {
    return ({
        type: 'SET_THEME_COLOR',
        payload: e
    })
}

export const setFontStyle = (e: any): IAction => {
    return ({
        type: 'SET_FONT_STYLE',
        payload: e
    })
}

export const setLightTheme = (e: any): IAction => {
    return ({
        type: 'SET_LIGHT_THEME',
        payload: e
    })
}

export const setOffcanvas = (e: any): IAction => {
    return ({
        type: 'SET_OFF_CANVAS',
        payload: e
    })
}

export const setThemeSettings = (e: any): IAction => {
    return ({
        type: 'SET_THEME_SETTINGS',
        payload: e
    });
}

// export const openLeftSidebarAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_LEFT_SIDEBAR',
// 		payload: e
// 	})
// }

// export const openRightSidebarAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_RIGHT_SIDEBAR',
// 		payload: e
// 	})
// }

// export const openSettingbarAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_SETTING_BAR',
// 		payload: e
// 	})
// }

// export const changeThemeColorAction = (e: any):IAction => {
// 	return ({
// 		type: 'THEME_COLOR_CHANGE',
// 		payload: e
// 	})
// }

// export const darkModeAction = (e: any):IAction => {
// 	return ({
// 		type: 'CHANGE_DARK_MODE',
// 		payload: e
// 	})
// }

// export const darkHeaderAction = (e: any):IAction => {
// 	return ({
// 		type: 'CHANGE_DARK_HEADER',
// 		payload: e
// 	})
// }
// export const fixNavbarAction = (e: any):IAction => {
// 	return ({
// 		type: 'FIX_NAVBAR_HEADER',
// 		payload: e
// 	})
// }
// export const darkMinSidebarAction = (e: any):IAction => {
// 	return ({
// 		type: 'DARK_MIN_SIDEBAR',
// 		payload: e
// 	})
// }
// export const darkSidebarAction = (e: any):IAction => {
// 	return ({
// 		type: 'DARK_SIDEBAR',
// 		payload: e
// 	})
// }
// export const iconColorAction = (e: any):IAction => {
// 	return ({
// 		type: 'CHANGE_ICON_COLOR',
// 		payload: e
// 	})
// }
// export const gradientColorAction = (e: any):IAction => {
// 	return ({
// 		type: 'CHANGE_GRADIENT_COLOR',
// 		payload: e
// 	})
// }

// export const boxShadowAction = (e: any):IAction => {
// 	return ({
// 		type: 'CHANGE_BOX_SHADOW',
// 		payload: e
// 	})
// }

// export const boxLayoutAction = (e: any):IAction => {
// 	return ({
// 		type: 'CHANGE_BOX_LAYOUT',
// 		payload: e
// 	})
// }
// export const rtlAction = (e: any):IAction => {
// 	return ({
// 		type: 'IS_RTL',
// 		payload: e
// 	})
// }
// export const fontAction = (e: any):IAction => {
// 	return ({
// 		type: 'CHANGE_FONT',
// 		payload: e
// 	})
// }
// export const menuGridAction = (e: any):IAction => {
// 	return ({
// 		type: 'MENU_LAYOUT_GRID',
// 		payload: e
// 	})
// }
// export const authMenuAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_AUTH_MENU',
// 		payload: e
// 	})
// }
// export const languageMenuAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_LANGUAGE_MENU',
// 		payload: e
// 	})
// }
// export const notificationMenuAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_NOTIFICATION_MENU',
// 		payload: e
// 	})
// }
// export const pagesMenuAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_PAGE_MENU',
// 		payload: e
// 	})
// }
// export const mailMenuAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_MAIL_MENU',
// 		payload: e
// 	})
// }
// export const profileMenuAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_PROFILE_MENU',
// 		payload: e
// 	})
// }
// export const toggle3DotMenuAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_3DOT_MENU',
// 		payload: e
// 	})
// }
// export const dropDownMenuAction = (e: any):IAction => {
// 	return ({
// 		type: 'TOGGLE_DROPDOWN_MENU',
// 		payload: e
// 	})
// }