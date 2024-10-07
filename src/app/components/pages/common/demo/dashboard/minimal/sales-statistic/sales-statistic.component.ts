import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { SaleStatistic } from '../../../../shared/data/dashboard/minimal/chart';

@Component({
    selector: 'app-sales-statistic',
    templateUrl: './sales-statistic.component.html',
    styleUrls: ['./sales-statistic.component.scss'],
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, NgApexchartsModule]
})
export class SalesStatisticComponent {

  public SalesData = SaleStatistic;
  public isOpen: boolean = false;

}
