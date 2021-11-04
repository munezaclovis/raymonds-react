import React, { FC } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ThemeSettings from "./ThemeSettings";
import Searchbar from "./Searchbar";
import Rightbar from "./Rightbar";
import Routes from "../Routes";
import Page from "./Page";

const Layout: FC = () => {
    return (
        <>
            <ThemeSettings />
            <div className='overlay' />
            <div id='wrapper'>
                <Header />
                <Searchbar />
                <Rightbar />
                <Sidebar />
                <div id='main-content'>
                    <div className='container-fluid'>
                        {Routes.map((layout, i) => {
                            return (
                                <Route
                                    key={`r${i}`}
                                    exact={layout.exact}
                                    path={layout.path}
                                >
                                    <Page
                                        title={layout.pageTitle}
                                        Component={layout.component}
                                    />
                                </Route>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
