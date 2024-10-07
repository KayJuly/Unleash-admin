import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { lastOrders } from '../../../../shared/data/dashboard/minimal/minimal';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-last-orders',
  templateUrl: './last-orders.component.html',
  styleUrl: './last-orders.component.scss',
  standalone: true,
  imports: [ClickOutsideDirective, CommonSvgIconComponent, RouterLink]
})

export class LastOrdersComponent {

  public isOpen: boolean = false;
  public lastOrders = lastOrders;

  toggleDropdown(id: number) {
    this.lastOrders.filter(data => {
      if (data.id === id) {
        data.isShow = !data.isShow;
      }
    })
  }

}
