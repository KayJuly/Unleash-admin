import {Routes} from '@angular/router';
import {DashboardPageComponent} from './dashboard-page.component';

export const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
        data: {
            title: 'Dashboard',
            breadcrumb: 'Dashboard'
        }
    }
] as Routes;

