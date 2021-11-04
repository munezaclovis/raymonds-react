import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CurrentUserProvider from "./store/CurrentUser/Context";
import ThemeSettingsProvider from "./store/ThemeSettings/Context";

ReactDOM.render(
    <CurrentUserProvider>
        <ThemeSettingsProvider>
            <App />
        </ThemeSettingsProvider>
    </CurrentUserProvider>,
    document.getElementById("root")
);
