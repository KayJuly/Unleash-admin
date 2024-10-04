import {Routes} from '@angular/router';

export default [
    {
        path: "",
        loadChildren: () =>
            import("./trainings-list-page/trainings-list-page.routes").then((m) => m.trainingsListRoutes),
        data: {
            title: "Trainings Management",
            breadcrumb: "Trainings Management",
        },
    }
] as Routes;

