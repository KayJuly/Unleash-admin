import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { topTransaction } from '../../../../shared/data/dashboard/E-commerce/ecommerce';

@Component({
    selector: 'app-top-transaction',
    templateUrl: './top-transaction.component.html',
    styleUrl: './top-transaction.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, RouterLink]
})

export class TopTransactionComponent {

  public isOpen: boolean = false;
  public topTransaction = topTransaction;

}
