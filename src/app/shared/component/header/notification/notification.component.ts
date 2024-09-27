import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../common-svg-icon/common-svg-icon.component';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    standalone: true,
    imports: [CommonSvgIconComponent, RouterLink]
})

export class NotificationComponent {

  public isNotification : boolean = false;

}
