import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeSettingsContext } from "../../store/ThemeSettings/Context";
import {
    setThemeColor,
    setFontStyle,
    setLightTheme,
    setMiniSidebar,
    setMiniSidebarMenuOn,
} from "../../store/ThemeSettings/Actions";
import Axios from "../../services/api/Axios";
import ThemeSettingsStorageManager from "../../services/localstorage/ThemeSettingsStorageManager";
import { ThemeSettingsUrlName } from "../../data/UrlNames";

const ThemeSettings = () => {
    const { settings, setSettings } = useContext(ThemeSettingsContext);
    const [openSettingBar, setOpenSettingBar] = useState(false);
    const prevOpenSettingsBar = useRef(false);

    useEffect(() => {
        prevOpenSettingsBar.current = openSettingBar;
    }, [openSettingBar]);

    if (openSettingBar === false && prevOpenSettingsBar.current === true) {
        Axios.put(ThemeSettingsUrlName + ThemeSettingsStorageManager.get().id, {
            themeColor: settings.themeColor,
            fontStyle: settings.fontStyle,
            lightVersion: settings.lightVersion,
        })
            .then((response) => {
                return;
            })
            .catch((e) => {
                throw e.response.error;
            });
    }

    return (
        <div
            id='themeSettings'
            className={`themesetting${openSettingBar === true ? " open" : ""}`}
        >
            <span
                className='theme_btn'
                onClick={() => setOpenSettingBar(!openSettingBar)}
            >
                <i className='icon-magic-wand'></i>
            </span>
            <div className='card theme_color'>
                <div className='header'>
                    <h2>Theme Color</h2>
                </div>
                <ul className='choose-skin list-unstyled mb-0'>
                    <li
                        data-theme='green'
                        className={
                            settings.themeColor === "theme-green"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSettings(setThemeColor("theme-green"))
                        }
                    >
                        <div className='green mr-1'></div>
                    </li>
                    <li
                        data-theme='orange'
                        className={
                            settings.themeColor === "theme-orange"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSettings(setThemeColor("theme-orange"))
                        }
                    >
                        <div className='orange mr-1'></div>
                    </li>
                    <li
                        data-theme='blush'
                        className={
                            settings.themeColor === "theme-blush"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSettings(setThemeColor("theme-blush"))
                        }
                    >
                        <div className='blush mr-1'></div>
                    </li>
                    <li
                        data-theme='cyan'
                        className={
                            settings.themeColor === "theme-cyan" ? "active" : ""
                        }
                        onClick={() => setSettings(setThemeColor("theme-cyan"))}
                    >
                        <div className='cyan mr-1'></div>
                    </li>
                    <li
                        data-theme='indigo'
                        className={
                            settings.themeColor === "theme-indigo"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSettings(setThemeColor("theme-indigo"))
                        }
                    >
                        <div className='indigo mr-1'></div>
                    </li>
                    <li
                        data-theme='red'
                        className={
                            settings.themeColor === "theme-red" ? "active" : ""
                        }
                        onClick={() => setSettings(setThemeColor("theme-red"))}
                    >
                        <div className='red mr-1'></div>
                    </li>
                </ul>
            </div>
            <div className='card font_setting'>
                <div className='header'>
                    <h2>Font Settings</h2>
                </div>
                <div className='space-y-2'>
                    <div className='fancy-radio'>
                        <label>
                            <input
                                name='font'
                                value='font-montserrat'
                                type='radio'
                                onChange={() =>
                                    setSettings(setFontStyle("font-montserrat"))
                                }
                                checked={
                                    settings.fontStyle === "font-montserrat"
                                        ? true
                                        : false
                                }
                            />
                            <span>
                                <i></i>Montserrat
                            </span>
                        </label>
                    </div>
                    <div className='fancy-radio'>
                        <label>
                            <input
                                name='font'
                                value='font-nunito'
                                onChange={() =>
                                    setSettings(setFontStyle("font-nunito"))
                                }
                                type='radio'
                                checked={
                                    settings.fontStyle === "font-nunito"
                                        ? true
                                        : false
                                }
                            />
                            <span>
                                <i></i>Nunito
                            </span>
                        </label>
                    </div>
                    <div className='fancy-radio'>
                        <label>
                            <input
                                name='font'
                                value='font-ubuntu'
                                onChange={() =>
                                    setSettings(setFontStyle("font-ubuntu"))
                                }
                                type='radio'
                                checked={
                                    settings.fontStyle === "font-ubuntu"
                                        ? true
                                        : false
                                }
                            />
                            <span>
                                <i></i>Ubuntu
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='card setting_switch'>
                <div className='header'>
                    <h2>Settings</h2>
                </div>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        Light Version
                        <div className='float-right'>
                            <label className='switch'>
                                <input
                                    type='checkbox'
                                    className='lv-btn'
                                    onChange={() =>
                                        setSettings(
                                            setLightTheme(
                                                !settings.lightVersion
                                            )
                                        )
                                    }
                                    checked={
                                        settings.lightVersion ? true : false
                                    }
                                />
                                <span className='slider round'></span>
                            </label>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        Mini Sidebar
                        <div className='float-right'>
                            <label className='switch'>
                                <input
                                    type='checkbox'
                                    className='mini-sidebar-btn'
                                    onChange={() => {
                                        setSettings(
                                            setMiniSidebar(
                                                !settings.miniSidebar
                                            )
                                        );
                                        setSettings(
                                            setMiniSidebarMenuOn(
                                                !settings.miniSideMenuOn
                                            )
                                        );
                                    }}
                                    checked={settings.miniSidebar}
                                />
                                )<span className='slider round'></span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            {/* <div className="card">
                <div className="form-group">
                    <label className="d-block">Traffic this Month <span className="float-right">77%</span></label>
                    <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={ 77 } aria-valuemin={ 0 } aria-valuemax={ 100 } style={ { width: "77%" } }></div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="d-block">Server Load <span className="float-right">50%</span></label>
                    <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={ 50 } aria-valuemin={ 0 } aria-valuemax={ 100 } style={ { width: "50%" } }></div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ThemeSettings;
