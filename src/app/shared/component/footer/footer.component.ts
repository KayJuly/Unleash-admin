import { Component } from '@angular/core';
import { CommonSvgIconComponent } from '../common-svg-icon/common-svg-icon.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [CommonSvgIconComponent]
})
export class FooterComponent {

}
