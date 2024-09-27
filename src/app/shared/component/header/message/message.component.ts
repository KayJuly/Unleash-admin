import { Component } from '@angular/core';
import { FeathericonComponent } from '../../feathericon/feathericon.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { CommonSvgIconComponent } from '../../common-svg-icon/common-svg-icon.component';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    standalone: true,
    imports: [CommonSvgIconComponent, NgClass, RouterLink, FeathericonComponent]
})
export class MessageComponent {

  public MassageData: boolean = false;

  Message() {
    this.MassageData = !this.MassageData
  }

}
