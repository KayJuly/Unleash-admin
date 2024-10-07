import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { salesStatsOption } from '../../../../shared/data/dashboard/minimal/chart';

@Component({
    selector: 'app-sales-stats',
    templateUrl: './sales-stats.component.html',
    styleUrl: './sales-stats.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, NgApexchartsModule]
})

export class SalesStatsComponent {
  
  public isOpen : boolean = false;
  public salesStatsOption = salesStatsOption; 

}
