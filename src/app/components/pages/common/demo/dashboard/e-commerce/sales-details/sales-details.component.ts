import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { chartDashLine } from '../../../../shared/data/dashboard/E-commerce/ecommerce-chart';

@Component({
    selector: 'app-sales-details',
    templateUrl: './sales-details.component.html',
    styleUrl: './sales-details.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, NgApexchartsModule]
})

export class SalesDetailsComponent {

  public isOpen: boolean = false;
  public chartDashLine = chartDashLine ;

}
