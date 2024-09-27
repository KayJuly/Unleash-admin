import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FeathericonComponent } from '../../feathericon/feathericon.component';
import { CommonSvgIconComponent } from '../../common-svg-icon/common-svg-icon.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
    imports: [CommonSvgIconComponent, RouterLink, FeathericonComponent]
})
export class ProfileComponent {

   public isOpen : boolean = false;
  constructor(private router: Router) { }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }

}
