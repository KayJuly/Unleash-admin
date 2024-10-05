import {Routes} from '@angular/router';
import {UsersProgressPageComponent} from './users-progress-page.component';

export const usersProgressRoutes: Routes = [
    {
        path: '',
        component: UsersProgressPageComponent,
        data: {
            title: 'Users Progress',
            breadcrumb: 'Users Progress'
        }
    }
] as Routes;

