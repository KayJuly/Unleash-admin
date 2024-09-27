import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-common-svg-icon',
    templateUrl: './common-svg-icon.component.html',
    styleUrls: ['./common-svg-icon.component.scss'],
    standalone: true
})

export class CommonSvgIconComponent {

  @Input("icon") public icon: any;
  @Input("class") public class: any;

}
