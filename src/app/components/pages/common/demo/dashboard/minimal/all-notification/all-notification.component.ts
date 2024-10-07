import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { allNotification } from '../../../../shared/data/dashboard/minimal/minimal';

@Component({
    selector: 'app-all-notification',
    templateUrl: './all-notification.component.html',
    styleUrl: './all-notification.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, RouterLink]
})

export class AllNotificationComponent {

  public isOpen: boolean = false;
  public allNotification = allNotification ;

}
