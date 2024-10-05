import {Routes} from '@angular/router';
import {TrainingListPageComponent} from './training-list-page.component';

export const trainingListRoutes: Routes = [
    {
        path: '',
        component: TrainingListPageComponent,
        data: {
            title: 'Users',
            breadcrumb: 'Users'
        }
    }
] as Routes;

