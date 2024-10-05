import {Component, HostListener} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HideNavScrollService} from '../../../services/hide-nav-scroll.service';
import {LayoutService} from '../../../services/layout.service';
import {NavService} from '../../../services/nav.service';
import {FooterComponent} from '../../footer/footer.component';
// import {BreadcrumbComponent} from '../../breadcrumb/breadcrumb.component';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {HeaderComponent} from '../../header/header.component';
import {NgClass, NgStyle} from '@angular/common';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    standalone: true,
    imports: [NgClass, NgStyle, HeaderComponent, SidebarComponent, RouterOutlet, FooterComponent]
})

export class ContentComponent {

    public innerWidth: number;

    constructor(
        public hideNavService: HideNavScrollService,
        public navService: NavService,
        public layout: LayoutService,
        private router: Router
    ) {
    }

    @HostListener('window:resize', ['$event'])

    onResize(event: number) {
        this.navService.isDisplay = window.innerWidth < 1200 ? true : false;
        if (window.innerWidth < 1200) {
            this.layout.config.settings.sidebar_type = 'compact-wrapper'
        }
    }

    ngOnInit(): void {
        const url = this.router.url;
        this.innerWidth = window.innerWidth;
    }

}
