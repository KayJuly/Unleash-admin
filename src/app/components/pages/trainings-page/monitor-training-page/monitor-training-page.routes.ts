import {Routes} from '@angular/router';
import {MonitorTrainingPageComponent} from './monitor-training-page.component';

export const monitorTrainingRoutes: Routes = [
    {
        path: '',
        component: MonitorTrainingPageComponent,
        data: {
            title: 'Monitor Training',
            breadcrumb: 'Monitor Training'
        }
    }
] as Routes;

