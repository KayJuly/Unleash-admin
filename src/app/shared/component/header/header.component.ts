import { Component, HostListener } from '@angular/core';
import { HideNavScrollService } from '../../services/hide-nav-scroll.service';
import { Menu, NavService } from '../../services/nav.service';
import { SlicePipe } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { ProfileComponent } from './profile/profile.component';
import { LanguageComponent } from './language/language.component';
import { ThemeComponent } from './theme/theme.component';
import { CartComponent } from './cart/cart.component';
import { MessageComponent } from './message/message.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { NotificationComponent } from './notification/notification.component';
import { ClickOutsideDirective } from '../../directives/outside.directive';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CommonSvgIconComponent } from '../common-svg-icon/common-svg-icon.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [RouterLink, CommonSvgIconComponent, FormsModule, SearchComponent, 
      ClickOutsideDirective, NotificationComponent, BookmarkComponent, 
      MessageComponent, CartComponent, ThemeComponent, 
      LanguageComponent, ProfileComponent, SvgIconComponent, SlicePipe]
})
export class HeaderComponent {

  public menuItems: Menu[] = [];
  public item: Menu[] = [];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = '';
  public open = false

  constructor(public hideScrollNavService: HideNavScrollService, public navService: NavService) {
    this.navService.item.subscribe((menuItems: Menu[]) =>
      this.item = menuItems
    );
  }

  openMenu() {
    this.navService.isDisplay = !this.navService.isDisplay;
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: number) {
    this.navService.isDisplay = window.innerWidth < 1200 ? true : false;
  }

  openSearch() {
    this.open = !this.open
    this.searchResult = false;
  }

  languageToggle() {
    this.navService.language = !this.navService.language;
  }

  searchTerm(term: any) {
    term ? this.addFix() : this.removeFix();
    if (!term) return this.menuItems = [];
    let items: Menu[] = [];
    term = term.toLowerCase();
    this.item.forEach((data) => {
      if (data.title?.toLowerCase().includes(term) && data.type === 'link') {
        items.push(data);
      }
      data.children?.filter(subItems => {
        if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = data.icon
          items.push(subItems);
        }
        subItems.children?.filter(suSubItems => {
          if (suSubItems.title?.toLowerCase().includes(term)) {
            suSubItems.icon = data.icon
            items.push(suSubItems);
          }
        })
        return
      })
      this.checkSearchResultEmpty(items)
      this.menuItems = items
    })
    return
  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.body.classList.add('offcanvas')
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.body.classList.remove('offcanvas')
  }

  clickOutside(): void {
    this.open = false
    this.searchResult = false;
    this.searchResultEmpty = false;
  }

}
