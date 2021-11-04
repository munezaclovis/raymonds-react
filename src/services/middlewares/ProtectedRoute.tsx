import React, { FC } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import { LoginRoute } from '../../data/RouteNames';
import Auth from '../authentication/Auth';

const ProtectedRoute: FC<any> = ({ component: Component, ...rest }: any) => {
    const history = useHistory();
    return (
        <Route {...rest} render={
            (props: any) => {
                if (Auth.isLoggedIn()) {
                    return <Component {...rest} />
                }
                return <Redirect to=
                    {{
                        pathname: LoginRoute,
                        state: {
                            from: history.location
                        }
                    }}
                />
            }
        } />
    )
}

export default ProtectedRoute
