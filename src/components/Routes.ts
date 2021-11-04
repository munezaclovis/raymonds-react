import { FC } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Logout from "./authentication/Logout";
import UsersIndex from "./pages/users/Index";
import {
    HomeRoute,
    LogoutRoute,
    ProfileRoute,
    RolesAddRoute,
    RolesRoute,
    UsersDetailsRoute,
    UsersEditRoute,
    UsersRoute,
} from "../data/RouteNames";
import UsersDetails from "./pages/users/Details";
import UsersEdit from "./pages/users/Edit";
import RolesIndex from "./pages/roles/Index";
import RolesAdd from "./pages/roles/Add";

type RouteType = {
    path?: string | Array<string>;
    name: string;
    exact?: boolean;
    model?: true;
    pageTitle: string;
    component: FC<any>;
};

const Routes: RouteType[] = [
    {
        path: HomeRoute,
        name: "dashboard",
        exact: true,
        pageTitle: "Dashboard",
        component: Dashboard,
    },
    {
        path: ProfileRoute,
        name: "profile",
        exact: true,
        pageTitle: "User Profile",
        component: Profile,
    },
    {
        path: LogoutRoute,
        name: "logout",
        exact: true,
        pageTitle: "User Logout",
        component: Logout,
    },
    {
        path: RolesRoute,
        name: "roles",
        exact: true,
        pageTitle: "Manage Roles",
        component: RolesIndex,
    },
    {
        path: RolesAddRoute,
        name: "roles",
        exact: true,
        pageTitle: "Add Role",
        component: RolesAdd,
    },
    {
        path: UsersRoute,
        name: "users",
        exact: true,
        pageTitle: "Manage Users",
        component: UsersIndex,
    },
    {
        path: UsersDetailsRoute + "/:id",
        name: "details",
        exact: true,
        pageTitle: "User Details",
        component: UsersDetails,
    },
    {
        path: UsersEditRoute + "/:id",
        name: "edit",
        exact: true,
        pageTitle: "Edit User",
        component: UsersEdit,
    },
];

export default Routes;
