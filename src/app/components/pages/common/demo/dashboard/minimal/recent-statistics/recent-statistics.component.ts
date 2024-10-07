import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonSvgIconComponent } from '../../../../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../../../../shared/directives/outside.directive';
import { recentStatistics } from '../../../../../../../shared/data/dashboard/minimal/chart';

@Component({
    selector: 'app-recent-statistics',
    templateUrl: './recent-statistics.component.html',
    styleUrl: './recent-statistics.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, NgApexchartsModule]
})

export class RecentStatisticsComponent {

  public isOpen : boolean= false;
  public recentStatistics = recentStatistics ;

}
