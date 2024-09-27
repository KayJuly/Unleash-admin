import { Routes } from '@angular/router';
import { ContentComponent } from './shared/component/layout/content/content.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { dashData } from './shared/routes/routes';
import { FullComponent } from './shared/component/layout/full/full.component';
import { fullRoutes } from './shared/routes/full-routes';

export const routes: Routes = [
    {
      path: '',
      component: ContentComponent,
      canActivate: [AdminGuard], //
      children: dashData
    },
      {
        path: '',
        component: FullComponent,
        children: fullRoutes,
      },
      {
        path: '**',
        redirectTo : 'error-page/error-400',
        pathMatch: 'full'
      }
];
