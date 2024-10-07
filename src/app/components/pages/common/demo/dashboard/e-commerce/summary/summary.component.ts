import { Component } from '@angular/core';
import { CommonSvgIconComponent } from '../../../../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../../../../shared/directives/outside.directive';
import { summary } from '../../../../../../../shared/data/dashboard/E-commerce/ecommerce';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent]
})

export class SummaryComponent {

  public isOpen: boolean = false;
  public summary = summary ;

}
