import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { recentOrder } from '../../../../shared/data/dashboard/E-commerce/ecommerce';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss',
  standalone: true,
  imports: [ClickOutsideDirective, CommonSvgIconComponent, RouterLink]
})

export class RecentOrdersComponent {

  public isOpen: boolean = false;
  public recentOrder = recentOrder;

  toggleDropdown(id: number) {
    this.recentOrder.filter(data => {
      if (data.id === id) {
        data.isShow = !data.isShow;
      }
    })
  }

}
