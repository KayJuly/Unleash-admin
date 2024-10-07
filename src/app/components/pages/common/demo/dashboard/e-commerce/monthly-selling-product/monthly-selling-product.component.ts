import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { monthlySellingProduct } from '../../../../shared/data/dashboard/E-commerce/ecommerce';

@Component({
    selector: 'app-monthly-selling-product',
    templateUrl: './monthly-selling-product.component.html',
    styleUrl: './monthly-selling-product.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, RouterLink]
})

export class MonthlySellingProductComponent {
  
  public isOpen: boolean = false;
  public monthlySellingProduct = monthlySellingProduct ;

}
