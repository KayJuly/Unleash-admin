import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Menu, NavService } from '../../services/nav.service';
import { CommonSvgIconComponent } from '../common-svg-icon/common-svg-icon.component';
import { NgTemplateOutlet, NgClass } from '@angular/common';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    standalone: true,
    imports: [NgTemplateOutlet, RouterLink, NgClass, CommonSvgIconComponent]
})

export class BreadcrumbComponent {

  public title: string = '';
  public breadcrumbs: { parentBreadcrumb?: string | null; childBreadcrumb?: string; } | undefined;
  public menus = this.navServices.horizontalItem;
  public horizontalList: Menu[] = [];
  constructor(private activatedRoute: ActivatedRoute, public navServices: NavService, private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {
        let title = route.snapshot.data['title'];
        let parent = route.parent?.snapshot.data['breadcrumb'];
        let child = route.snapshot.data['breadcrumb'];
        this.breadcrumbs = {};
        this.title = title;
        this.breadcrumbs = {
          "parentBreadcrumb": parent,
          "childBreadcrumb": child
        }
      });

    this.menus.forEach((data) => {
      if (data) {
        this.horizontalList = data;
      }
    })
  }
}
