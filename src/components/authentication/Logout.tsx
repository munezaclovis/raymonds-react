import React, { FC, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { LoginRoute } from '../../data/RouteNames'
import Axios from '../../services/api/Axios'
import AccessTokenStorageManager from '../../services/localstorage/AccessTokenStorageManager'
import CurrentUserStorageManager from '../../services/localstorage/CurrentUserStorageManager'
import ThemeSettingsStorageManager from '../../services/localstorage/ThemeSettingsStorageManager'
import { resetCurrentUser } from '../../store/CurrentUser/Actions'
import { CurrentUserContext } from '../../store/CurrentUser/Context'

const Logout: FC = () => {
    const {setUser} = useContext(CurrentUserContext);

    useEffect(() => {
        Axios.get('logout').then(response => {
            return;
        }).catch(error => {
            throw error.response.data;
        });

        AccessTokenStorageManager.clean();
        ThemeSettingsStorageManager.clean();
        CurrentUserStorageManager.clean();

        setUser(resetCurrentUser());
    }, [setUser])

    return (
        <Redirect to={LoginRoute} />
    )
}

export default Logout
