import {Routes} from '@angular/router';
import {TrainingListPageComponent} from './training-list-page.component';

export const trainingListRoutes: Routes = [
    {
        path: '',
        component: TrainingListPageComponent,
        data: {
            title: 'Training List',
            breadcrumb: 'Training List'
        }
    }
] as Routes;

