import {Routes} from '@angular/router';
import {CalenderPageComponent} from './calender-page.component';

export const calendarRoutes: Routes = [
    {
        path: '',
        component: CalenderPageComponent,
        data: {
            title: 'Calendar',
            breadcrumb: 'Calendar'
        }
    }
] as Routes;

