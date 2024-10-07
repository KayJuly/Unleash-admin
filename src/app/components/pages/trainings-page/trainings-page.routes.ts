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
            title: "Course registration",
            breadcrumb: "Course registration",
        },
    },
    {
        path: "course-calendar",
        loadChildren: () =>
            import("./course-calendar-page/course-calendar-page.routes").then((m) => m.courseCalendarRoutes),
        data: {
            title: "Course Calendar",
            breadcrumb: "Course Calendar",
        },
    },
    {
        path: "monitor-training",
        loadChildren: () =>
            import("./monitor-training-page/monitor-training-page.routes").then((m) => m.monitorTrainingRoutes),
        data: {
            title: "Monitor training",
            breadcrumb: "Monitor training",
        },
    }
] as Routes;

