import { HomeRoute, UsersRoute, RolesRoute } from './RouteNames'

const SidebarData = [
    {
        "id": 'main',
        "label": "Main"
    },
    {
        "icon": "icon-speedometer",
        "label": "Dashboard",
        "to": HomeRoute
    },
    {
        "id": 'app',
        "label": "App"
    },
    {
        "icon": "icon-users",
        "label": "Users",
        "to": UsersRoute,
    },
    {
        "icon": "icon-lock-open",
        "label": "Roles",
        "to": RolesRoute,
    },
    {
        "id": 'ui',
        "label": "UI Elements"
    },
    {
        "icon": "icon-tag",
        "label": "Icons",
        "to": "/",
        content: [
            {
                "label": "FontAwesome",
                "to": "/ui-icons"
            },
        ]
    },
];

export default SidebarData