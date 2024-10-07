import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { monthlyInvoices } from '../../../../shared/data/dashboard/minimal/minimal';

@Component({
    selector: 'app-monthly-invoices',
    templateUrl: './monthly-invoices.component.html',
    styleUrl: './monthly-invoices.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, RouterLink]
})

export class MonthlyInvoicesComponent {

   public isOpen : boolean = false;
   public monthlyInvoices = monthlyInvoices ;

}
