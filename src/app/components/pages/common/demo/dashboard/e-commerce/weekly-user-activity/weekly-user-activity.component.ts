import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonSvgIconComponent } from '../../../../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../../../../shared/directives/outside.directive';
import { weeklyUserActivity } from '../../../../../../../shared/data/dashboard/E-commerce/ecommerce-chart';

@Component({
    selector: 'app-weekly-user-activity',
    templateUrl: './weekly-user-activity.component.html',
    styleUrl: './weekly-user-activity.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, NgApexchartsModule]
})

export class WeeklyUserActivityComponent {

  public isOpen: boolean = false;
  public weeklyUserActivity = weeklyUserActivity ;

}
