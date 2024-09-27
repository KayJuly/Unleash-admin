import { Component, Input } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
    selector: 'app-feather-icons',
    templateUrl: './feathericon.component.html',
    styleUrls: ['./feathericon.component.scss'],
    standalone: true
})

export class FeathericonComponent {

  @Input() icon: string | any;
  @Input() class: string | any;

  ngAfterViewInit() {
    feather.replace();
  }

}
