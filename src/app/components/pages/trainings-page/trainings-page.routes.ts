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
    }
] as Routes;

