import {Routes} from '@angular/router';

export default [
    {
        path: "",
        loadChildren: () =>
            import("./users-list-page/users-list-page.routes").then((m) => m.usersListRoutes),
        data: {
            title: "Users",
            breadcrumb: "Users",
        },
    }
] as Routes;

