import {Routes} from '@angular/router';

export default [
    {
        path: "",
        loadChildren: () =>
            import("./dashboard-page/dashboard-page.routes").then((m) => m.dashboardRoutes),
        data: {
            title: "Dashboard",
            breadcrumb: "Dashboard",
        },
    },
    {
        path: "calendar",
        loadChildren: () =>
            import("./calendar-page/calender-page.routes").then((m) => m.calendarRoutes),
        data: {
            title: "Calendar",
            breadcrumb: "Calendar",
        },
    }
] as Routes;

