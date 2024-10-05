import {Routes} from '@angular/router';
import {CourseRegistrationPageComponent} from './course-registration-page.component';

export const courseRegistrationRoutes: Routes = [
    {
        path: '',
        component: CourseRegistrationPageComponent,
        data: {
            title: 'Course registration',
            breadcrumb: 'Course registration'
        }
    }
] as Routes;

