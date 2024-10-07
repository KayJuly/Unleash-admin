import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CommonSvgIconComponent } from '../../../../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../../../../shared/directives/outside.directive';
import { customerGrowth } from '../../../../../../../shared/data/dashboard/E-commerce/ecommerce';

@Component({
    selector: 'app-customer-growth',
    templateUrl: './customer-growth.component.html',
    styleUrl: './customer-growth.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, LeafletModule]
})

export class CustomerGrowthComponent {

  public isOpen: boolean = false;
  public customerGrowth = customerGrowth;

  public options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 2, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(34.0479, 100.6197)
  };

}
