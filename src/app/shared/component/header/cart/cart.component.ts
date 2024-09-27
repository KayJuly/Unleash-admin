import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeathericonComponent } from '../../feathericon/feathericon.component';
import { NgClass } from '@angular/common';
import { CommonSvgIconComponent } from '../../common-svg-icon/common-svg-icon.component';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    standalone: true,
    imports: [CommonSvgIconComponent, NgClass, FeathericonComponent, RouterLink]
})
export class CartComponent {

  public products: boolean = false;

  cart() {
    this.products = !this.products
  }

}
