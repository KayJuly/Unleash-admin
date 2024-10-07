import {Routes} from '@angular/router';
import {CourseCalendarPageComponent} from './course-calendar-page.component';

export const courseCalendarRoutes: Routes = [
    {
        path: '',
        component: CourseCalendarPageComponent,
        data: {
            title: 'Course Calendar',
            breadcrumb: 'Course Calendar'
        }
    }
] as Routes;

