import React, { FC, useContext, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import Loading from "../utilities/loading/Loading";
import { ThemeSettingsContext } from "../../store/ThemeSettings/Context";
import { CurrentUserContext } from "../../store/CurrentUser/Context";
import { setCurrentUser } from "../../store/CurrentUser/Actions";
import { setThemeSettings } from "../../store/ThemeSettings/Actions";
import Auth from "../../services/authentication/Auth";
import {
    ForgotPasswordRoute,
    HomeRoute,
    RegisterRoute,
} from "../../data/RouteNames";
import Axios from "../../services/api/Axios";
import { LoginUrlName } from "../../data/UrlNames";
import AccessTokenStorageManager from "../../services/localstorage/AccessTokenStorageManager";
import ThemeSettingsStorageManager from "../../services/localstorage/ThemeSettingsStorageManager";
import CurrentUserStorageManager from "../../services/localstorage/CurrentUserStorageManager";
import {
    IAuthCredentials,
    IAuthErrors,
    IAuthResponse,
} from "../../models/Authentication";

const Login: FC = () => {
    const [credentials, setCredentials] = useState<IAuthCredentials>({
        email: null,
        password: null,
    });

    const [errors, setErrors] = useState<IAuthErrors>({
        message: null,
        email: null,
        password: null,
    });

    const [isLoading, setIsLoading] = useState(false);

    const { setUser } = useContext(CurrentUserContext);
    const { setSettings } = useContext(ThemeSettingsContext);
    const history = useHistory();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({ ...errors, message: null, email: null, password: null });
        setIsLoading(true);

        Axios.post<IAuthResponse>(LoginUrlName, { ...credentials })
            .then((response) => {
                AccessTokenStorageManager.set(response?.data?.access_token);
                ThemeSettingsStorageManager.set(response?.data?.themeSettings);
                CurrentUserStorageManager.set(response?.data?.user);

                setUser(setCurrentUser(response?.data?.user));
                setSettings(setThemeSettings(response?.data?.themeSettings));
                history.push("/");
            })
            .catch((error) => {
                setErrors({
                    ...errors,
                    message: error?.response?.data?.message,
                    email: error?.response?.data?.errors?.email,
                    password: error?.response?.data?.errors?.password,
                });
                setIsLoading(false);
            });
    };

    if (Auth.isLoggedIn() === true) {
        return <Redirect to={HomeRoute} />;
    }

    return (
        <>
            <div className='auth-main'>
                <div className='auth_div vivify popIn'>
                    <div className='auth_brand'>
                        <Link className='navbar-brand' to={HomeRoute}>
                            <img
                                src={Logo}
                                width='50'
                                className='d-inline-block align-top mr-2'
                                alt='Logo'
                            />
                            Raymonds
                        </Link>
                    </div>
                    <div className='card'>
                        <div className='body'>
                            <p className='lead'>Login to your account</p>
                            <form
                                className='form-auth-small m-t-20'
                                onSubmit={onSubmit}
                            >
                                {errors?.message && (
                                    <div className='p-2 mb-5 bg-danger text-white text-sm'>
                                        {" "}
                                        {errors?.message}{" "}
                                    </div>
                                )}
                                <div className='form-group'>
                                    <input
                                        type='email'
                                        required
                                        className={`form-control${
                                            errors?.email !== null
                                                ? " border-red-700"
                                                : ""
                                        }`}
                                        autoComplete='email'
                                        placeholder='email'
                                        value={credentials?.email ?? ""}
                                        onChange={(e) => {
                                            setCredentials({
                                                ...credentials,
                                                email: e.target.value,
                                            });
                                        }}
                                    />
                                    <div
                                        className={`invalid-feedback${
                                            errors?.email !== null
                                                ? " block"
                                                : ""
                                        }`}
                                    >
                                        {errors?.email?.map((item, i) => {
                                            return <p key={i}>{item}</p>;
                                        }) ?? ""}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <input
                                        type='password'
                                        required
                                        className={`form-control${
                                            errors?.password !== null
                                                ? " border-red-700"
                                                : ""
                                        }`}
                                        autoComplete='current-password'
                                        placeholder='password'
                                        value={credentials?.password ?? ""}
                                        onChange={(e) => {
                                            setCredentials({
                                                ...credentials,
                                                password: e.target.value,
                                            });
                                        }}
                                    />
                                    <div
                                        className={`invalid-feedback${
                                            errors?.password !== null
                                                ? " block"
                                                : ""
                                        }`}
                                    >
                                        {errors?.password?.map((item, i) => {
                                            return <p key={i}>{item}</p>;
                                        }) ?? ""}
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className='btn btn-primary btn-round btn-block'
                                >
                                    {" "}
                                    {isLoading && <Loading />}LOGIN
                                </button>
                                <div className='bottom'>
                                    <span className='helper-text m-b-10'>
                                        <i className='fa fa-lock'></i>{" "}
                                        <Link to={ForgotPasswordRoute}>
                                            Forgot password?
                                        </Link>
                                    </span>
                                    <span>
                                        Don't have an account?{" "}
                                        <Link to={RegisterRoute}>Register</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
