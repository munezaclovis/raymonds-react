import React, { FC, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { ThemeSettingsContext } from "../../store/ThemeSettings/Context";
import ProfilePic from "../../assets/images/user.png";
import {
    setOffcanvas,
    setMiniSidebarMenuOn,
    setMiniHover,
} from "../../store/ThemeSettings/Actions";
import { CurrentUserContext } from "../../store/CurrentUser/Context";
import SidebarMenu from "./SidebarMenu";
import {
    HomeRoute,
    LogoutRoute,
    ProfileRoute,
    TempRoute,
} from "../../data/RouteNames";
import Logo from "../../assets/images/Logo.png";

const Sidebar: FC = () => {
    const { settings, setSettings } = useContext(ThemeSettingsContext);
    const { user } = useContext(CurrentUserContext);

    useEffect(() => {
        const minisidebarMouseOver = () => {
            setSettings(setMiniSidebarMenuOn(false));
            setSettings(setMiniHover(true));
        };

        const minisidebarMouseOut = () => {
            setSettings(setMiniSidebarMenuOn(true));
            setSettings(setMiniHover(false));
        };

        const topSidebarHeight = document.getElementById("top-sidebar");
        const scrollSideBar = document.getElementById("sidebar-scroll");

        if (topSidebarHeight !== null && scrollSideBar !== null) {
            scrollSideBar.style.height =
                "calc(100% - " +
                topSidebarHeight.getBoundingClientRect().height +
                "px)";
        }

        const leftSidebar = document.getElementById("left-sidebar");

        if (leftSidebar !== null && settings.miniSidebar) {
            leftSidebar.addEventListener("mouseover", minisidebarMouseOver);
        }
        if (leftSidebar !== null && settings.miniHover) {
            leftSidebar.addEventListener("mouseout", minisidebarMouseOut);
        }

        return () => {
            if (leftSidebar !== null) {
                leftSidebar.removeEventListener(
                    "mouseover",
                    minisidebarMouseOver
                );
                leftSidebar.removeEventListener(
                    "mouseout",
                    minisidebarMouseOut
                );
            }
        };
    }, [setSettings, settings.miniHover, settings.miniSidebar]);

    return (
        <>
            <div
                id='left-sidebar'
                className={`sidebar${
                    settings.miniSideMenuOn ? " mini_sidebar_on" : ""
                }`}
            >
                <div className='navbar-brand' id='top-sidebar'>
                    <Link to={HomeRoute} className='flex'>
                        <img
                            src={Logo}
                            alt='Logo'
                            className='img-fluid logo inline-block'
                        />
                        <span>Raymonds</span>
                    </Link>
                    <button
                        type='button'
                        className='btn-toggle-offcanvas btn btn-sm float-right'
                        onClick={() => {
                            setSettings(setOffcanvas(!settings.offcanvas));
                        }}
                    >
                        <i className='lnr lnr-menu icon-close'></i>
                    </button>
                </div>
                <div className='sidebar-scroll' id='sidebar-scroll'>
                    <div className='user-account d-flex '>
                        <div className='user_div'>
                            <img
                                src={ProfilePic}
                                className='user-photo'
                                alt='User Profile'
                            />
                        </div>
                        <div className='dropdown'>
                            <span>Welcome,</span>
                            <br />
                            <Dropdown className='ml-0'>
                                <Dropdown.Toggle
                                    variant='success'
                                    id='dropdown-basic'
                                    className='user-name left_dropdown_btn'
                                >
                                    <strong>{user.name}</strong>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link
                                        className='dropdown-item'
                                        to={ProfileRoute}
                                    >
                                        <i className='icon-user'></i>My Profile
                                    </Link>
                                    <Link
                                        className='dropdown-item'
                                        to={TempRoute}
                                    >
                                        <i className='icon-envelope-open'></i>
                                        Messages
                                    </Link>
                                    <Link
                                        className='dropdown-item'
                                        to={HomeRoute}
                                    >
                                        <i className='icon-settings'></i>
                                        Settings
                                    </Link>
                                    <li className='divider' />
                                    <Link
                                        className='dropdown-item'
                                        to={LogoutRoute}
                                    >
                                        <i className='icon-power'></i>Logout
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                            <ul className='dropdown-menu dropdown-menu-right account vivify flipInY'></ul>
                        </div>
                    </div>
                    <nav id='left-sidebar-nav' className='sidebar-nav'>
                        <SidebarMenu />
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
