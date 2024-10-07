import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { recentActivity } from '../../../../shared/data/dashboard/minimal/minimal';

@Component({
    selector: 'app-recent-activity',
    templateUrl: './recent-activity.component.html',
    styleUrls: ['./recent-activity.component.scss'],
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, RouterLink]
})

export class RecentActivityComponent {

  public isOpen : boolean = false;
  public recentActivity = recentActivity ;
 
}
