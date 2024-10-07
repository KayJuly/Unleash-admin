import {Routes} from '@angular/router';
import {AnalysisPageComponent} from './analysis-page.component';

export const analysisRoutes: Routes = [
    {
        path: '',
        component: AnalysisPageComponent,
        data: {
            title: 'Analysis',
            breadcrumb: 'Analysis'
        }
    }
] as Routes;

