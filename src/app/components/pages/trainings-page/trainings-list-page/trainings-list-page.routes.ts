import {Routes} from '@angular/router';
import {TrainingsListPageComponent} from './trainings-list-page.component';

export const trainingsListRoutes: Routes = [
    {
        path: '',
        component: TrainingsListPageComponent,
        data: {
            title: 'Trainings Management',
            breadcrumb: 'Trainings Management'
        }
    }
] as Routes;

