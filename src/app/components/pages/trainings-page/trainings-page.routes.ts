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
        path: "monitor-training",
        loadChildren: () =>
            import("./monitor-training-page/monitor-training-page.routes").then((m) => m.monitorTrainingRoutes),
        data: {
            title: "Trainings",
            breadcrumb: "Trainings",
        },
    }
] as Routes;

