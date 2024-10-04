import {Routes} from '@angular/router';


export const dashData: Routes = [
    {
        path: 'sample-page',
        data: {
            breadcrumb: 'Pages'
        },
        loadChildren: () => import('../../components/sample-page/sample-page.routes')
    },
    {
        path: 'users-page',
        data: {
            breadcrumb: 'users'
        },
        loadChildren: () => import('../../components/pages/users-page/users-page.routes')
    },
    {
        path: 'trainings-page',
        data: {
            breadcrumb: 'trainings'
        },
        loadChildren: () => import('../../components/pages/trainings-page/trainings-page.routes')
    },
    // {
    //     path: "users",
    //     data: {
    //         breadcrumb: "Users",
    //     },
    //     loadChildren: () => import("../../components/pages/admin.routes"),
    // },
]