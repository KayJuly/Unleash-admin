import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { projectSummary } from '../../../../shared/data/dashboard/minimal/minimal';

@Component({
    selector: 'app-project-summary',
    templateUrl: './project-summary.component.html',
    styleUrl: './project-summary.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, CommonSvgIconComponent, RouterLink, NgClass]
})

export class ProjectSummaryComponent {

  public isOpen: boolean = false;
  public projectSummary = projectSummary ;
}
