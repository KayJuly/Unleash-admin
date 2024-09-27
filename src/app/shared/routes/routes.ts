import { Routes } from '@angular/router';


export const dashData: Routes = [
    {
        path: 'sample-page',
        data: {
            breadcrumb: 'Pages'
        },
        loadChildren: () => import('../../component/sample-page/sample-page.routes')
    },



]