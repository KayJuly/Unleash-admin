import {Routes} from '@angular/router';
import {usersProgressRoutes} from "./users-progress-page/users-progress-page.routes";

export default [
    {
        path: "",
        loadChildren: () =>
            import("./users-list-page/users-list-page.routes").then((m) => m.usersListRoutes),
        data: {
            title: "Users",
            breadcrumb: "Users",
        },
    },
    {
        path: "users-progress",
        loadChildren: () =>
            import("./users-progress-page/users-progress-page.routes").then((m) => m.usersProgressRoutes),
        data: {
            title: "Users Progress",
            breadcrumb: "Users Progress",
        },
    }
] as Routes;

