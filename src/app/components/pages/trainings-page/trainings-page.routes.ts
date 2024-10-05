import {Routes} from '@angular/router';

export default [
    {
        path: "",
        loadChildren: () =>
            import("./training-list-page/training-list-page.routes").then((m) => m.trainingListRoutes),
        data: {
            title: "Trainings",
            breadcrumb: "Trainings",
        },
    },
    {
        path: "course-registration",
        loadChildren: () =>
            import("./course-registration-page/course-registration-page.routes").then((m) => m.courseRegistrationRoutes),
        data: {
            title: "Trainings",
            breadcrumb: "Trainings",
        },
    },
    {
        path: "calendar",
        loadChildren: () =>
            import("../dashboard-page/calendar-page/calender-page.routes").then((m) => m.calendarRoutes),
        data: {
            title: "Trainings",
            breadcrumb: "Trainings",
        },
    },
    {
        path: "monitor-training",
        loadChildren: () =>
            import("./monitor-training-page/monitor-training-page.routes").then((m) => m.monitorTrainingRoutes),
        data: {
            title: "Trainings",
            breadcrumb: "Trainings",
        },
    }
] as Routes;

