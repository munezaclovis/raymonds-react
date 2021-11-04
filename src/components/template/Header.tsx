import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
    setOffcanvas,
    toggleNotificationBar,
    toggleSearchBar,
} from "../../store/ThemeSettings/Actions";
import { ThemeSettingsContext } from "../../store/ThemeSettings/Context";
import { HomeRoute, LogoutRoute } from "../../data/RouteNames";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
    const { settings, setSettings } = useContext(ThemeSettingsContext);
    return (
        <>
            <nav className='navbar top-navbar'>
                <div className='container-fluid'>
                    <div className='navbar-left'>
                        <div className='navbar-btn'>
                            <Link to={HomeRoute}>
                                <img
                                    src={Logo}
                                    alt='Logo'
                                    className='img-fluid logo'
                                />
                            </Link>
                            <button
                                type='button'
                                className='btn-toggle-offcanvas'
                                onClick={() =>
                                    setSettings(
                                        setOffcanvas(!settings.offcanvas)
                                    )
                                }
                            >
                                <i className='lnr lnr-menu fa fa-bars'></i>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <ul className='nav navbar-nav'>
                            <li>
                                <span
                                    onClick={() =>
                                        setSettings(toggleSearchBar(true))
                                    }
                                    className='icon-menu'
                                    title='Search Result'
                                >
                                    <i className='icon-magnifier'></i>
                                </span>
                            </li>
                            <li>
                                <span
                                    onClick={() =>
                                        setSettings(toggleNotificationBar(true))
                                    }
                                    className='icon-menu'
                                    title='Right Menu'
                                >
                                    <i className='icon-bubbles'></i>
                                    <span className='notification-dot bg-pink'>
                                        2
                                    </span>
                                </span>
                            </li>
                            <li>
                                <Link to={LogoutRoute} className='icon-menu'>
                                    <i className='icon-power'></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
