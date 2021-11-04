import React, { FC, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Layout from "./components/template/Layout";
import CurrentUserStorageManager from "./services/localstorage/CurrentUserStorageManager";
import ThemeSettingsStorageManager from "./services/localstorage/ThemeSettingsStorageManager";
import ProtectedRoute from "./services/middlewares/ProtectedRoute";
import { setCurrentUser } from "./store/CurrentUser/Actions";
import { CurrentUserContext } from "./store/CurrentUser/Context";
import { setThemeSettings } from "./store/ThemeSettings/Actions";
import { ThemeSettingsContext } from "./store/ThemeSettings/Context";

const App: FC = () => {
    const { settings, setSettings } = useContext(ThemeSettingsContext);
    const { setUser } = useContext(CurrentUserContext);

    useEffect(() => {
        setSettings(setThemeSettings(ThemeSettingsStorageManager.get()));
        setUser(setCurrentUser(CurrentUserStorageManager.get()));
    }, [setSettings, setUser]);

    document.getElementsByTagName("body")[0].className = `${
        settings.themeColor
    } ${settings.fontStyle}${settings.lightVersion ? " light_version" : ""}${
        settings.offcanvas ? " offcanvas-active" : ""
    }${settings.miniSidebar ? " mini_sidebar" : ""}${
        settings.miniHover ? " mini_hover" : ""
    }`;
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact={true} component={Login} />
                <Route path='/register' exact={true} component={Register} />
                <ProtectedRoute path='/' component={Layout} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
