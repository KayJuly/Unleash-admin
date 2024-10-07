import { Routes } from '@angular/router';
import { EcommerceComponent } from './e-commerce/ecommerce.component';
import { MinimalComponent } from './minimal/minimal.component';

export default [
  {
    path: 'minimal',
    component: MinimalComponent,
    data: {
      title: 'Minimal Dashboard',
      breadcrumb: 'Minimal'
    }
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
    data: {
      title: 'Ecommerce Dashboard',
      breadcrumb: 'E-Commerce'
    }
  },
] as Routes;

