import { Component } from '@angular/core';
import { Image, GalleryModule } from '@ks89/angular-modal-gallery';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../../../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-latest-offer-product',
    templateUrl: './latest-offer-product.component.html',
    styleUrl: './latest-offer-product.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, GalleryModule, RouterLink]
})

export class LatestOfferProductComponent {

  public isOpen: boolean = false;
  public seconds: number;
  public interval: any;

  constructor() {
    this.interval = setInterval(function (this: any) {
      let currentDate = new Date();
      currentDate.setHours(0); 
      currentDate.setMinutes(0);
      currentDate.setSeconds(0);
      let nowDate = new Date();
      let daysToAdd = 7;
      currentDate.setDate(currentDate.getDate() + daysToAdd);
      let distance = currentDate.getTime() - nowDate.getTime();
      this.document.querySelectorAll('#days').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      });

      this.document.querySelectorAll('#hours').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      });

      this.document.querySelectorAll('#minutes').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      });

      this.document.querySelectorAll('#seconds').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
      });
    }, this.seconds);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  public imagesRect: Image[] = [
    new Image(
      0,
      { img: "assets/images/dashboard-2/product/10.png" },
      { img: "assets/images/dashboard-2/product/10.png" }
    ),
    new Image(
      1,
      { img: "assets/images/dashboard-2/product/11.png" },
      { img: "assets/images/dashboard-2/product/11.png" }
    ),
    new Image(
      2,
      { img: "assets/images/dashboard-2/product/12.png" },
      { img: "assets/images/dashboard-2/product/12.png" }
    ),
    new Image(
      3,
      { img: "assets/images/dashboard-2/product/13.png" },
      { img: "assets/images/dashboard-2/product/13.png" }
    ),
  ];

}
