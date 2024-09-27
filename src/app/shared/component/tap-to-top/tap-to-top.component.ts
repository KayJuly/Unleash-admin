import { Component,HostListener } from '@angular/core';
import { ViewportScroller, NgStyle } from '@angular/common';
import { FeathericonComponent } from '../feathericon/feathericon.component';

@Component({
    selector: 'app-tap-to-top',
    templateUrl: './tap-to-top.component.html',
    styleUrls: ['./tap-to-top.component.scss'],
    standalone: true,
    imports: [NgStyle, FeathericonComponent]
})

export class TapToTopComponent {

  public show: boolean = false;

  constructor(private viewScroller: ViewportScroller) { }

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  	if (number > 600) { 
  	  this.show = true;
  	} else {
  	  this.show = false;
  	}
  }

  tapToTop() {
  	this.viewScroller.scrollToPosition([0, 0]);
  }

}
