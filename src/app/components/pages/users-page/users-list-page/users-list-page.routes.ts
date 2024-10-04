import {Routes} from '@angular/router';
import {UsersListPageComponent} from './users-list-page.component';

export const usersListRoutes: Routes = [
    {
        path: '',
        component: UsersListPageComponent,
        data: {
            title: 'Users',
            breadcrumb: 'Users'
        }
    }
] as Routes;

