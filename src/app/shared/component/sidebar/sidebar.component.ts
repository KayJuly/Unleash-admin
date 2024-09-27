import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Menu, NavService } from '../../services/nav.service';
import { LayoutService } from '../../services/layout.service';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { NgStyle, NgTemplateOutlet, NgClass } from '@angular/common';
import { FeathericonComponent } from '../feathericon/feathericon.component';
import { CommonSvgIconComponent } from '../common-svg-icon/common-svg-icon.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [RouterLink, CommonSvgIconComponent, FeathericonComponent, NgStyle, NgTemplateOutlet, 
      NgClass, RouterLinkActive, SvgIconComponent, TranslateModule]
})
export class SidebarComponent {

  public menuItems = this.navServices.menuItems;
  public width: number = window.innerWidth;
  // public leftArrow: boolean = false;
  // public rightArrow: boolean = true;
  public margin: number = 0;
  public leftArrowNone: boolean = true;
  public rightArrowNone: boolean = false;
  public screenWidth: number;
  public screenHeight: number;
  public pined: boolean = false;
  public pinedItem: string[] = [];

  constructor(private router: Router, public navServices: NavService,public layout :LayoutService) {
    this.navServices.item.subscribe((menuItems: Menu[]) => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) { 
              return false;
            }
            items.children.filter((subItems: Menu) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                 return false;
               }
              subItems.children.filter((subSubItems) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return
            });
            return
          });
        }
      });
    });
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  setNavActive(item: Menu) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
          else{
            submenuItems.active = false;
          }
        });
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.width = event.target.innerWidth - 500;
  }

  openMenu() {
    this.navServices.isDisplay = !this.navServices.isDisplay;
  }

  toggleMenu(item: Menu) {
    if (!item.active) {
      this.menuItems.forEach((a: Menu) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: Menu) => {
          if (a.children?.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
  }

  // For Horizontal Menu

  // scrollLeft(){
  //   this.rightArrow = true;
  //   if(this.layout.margin != 0){
  //     this.layout.margin = this.layout.margin + 500;
  //   }
  //   if(this.layout.margin == 0){
  //     this.leftArrow = false;
  //   }
  // }
  // scrollRight(){
  //   this.leftArrow = true;
  //   if(this.layout.margin != -3500){
  //     this.layout.margin = this.layout.margin - 500;
  //   }
  //   if(this.layout.margin == -3500){
  //     this.rightArrow = false;
  //   }
  // }

  scrollToLeft() {
    if (this.margin >= -this.width) {
      this.margin = 0;
      this.leftArrowNone = true;
      this.rightArrowNone = false;
    } else {
      this.margin += this.width;
      this.rightArrowNone = false;
    }
  }

  scrollToRight() {
    if (this.margin <= -3500) {
      this.margin = -3000;
      this.leftArrowNone = false;
      this.rightArrowNone = true;
    } else {
      this.margin += -this.width;
      this.leftArrowNone = false;
    }
  }

  //pinned//

  isPined(itemname: string | undefined) {
    return itemname !== undefined && this.pinedItem.includes(itemname);
  }

  togglePined(title: string): void {
    const index = this.pinedItem.indexOf(title);
    if (index !== -1) {
      this.pinedItem.splice(index, 1);
    } else {
      this.pinedItem.push(title);
    }
    if (this.pinedItem.length <= 0) {
      this.pined = false;
    } else {
      this.pined = true;
    }
  }

}