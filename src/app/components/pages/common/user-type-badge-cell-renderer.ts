import {ICellRendererAngularComp} from 'ag-grid-angular';
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'badge-cell',
    imports: [CommonModule],
    template: `
      <span class="badge" [ngClass]="badgeClass">{{ params.value }}</span>
    `,
    standalone: true,
    styles: [`
      .badge-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      .badge {
        display: inline-block;
        padding: 0.25em 0.6em;
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 0.25rem;
        max-width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .badge-extracurricular-student {
        background-color: #d4edda;
        color: #155724;
      }

      .badge-curriculum-student {
        background-color: #f8d7da;
        color: #721c24;
      }

      .badge-staff {
        background-color: #fff3cd;
        color: #856404;
      }

      .badge-visitor {
        background-color: #e9ecef;
        color: #495057;      }
    `]
})
export class UserTypeBadgeCellRenderer implements ICellRendererAngularComp {
    params: any;
    badgeClass: string;

    agInit(params: any): void {
        this.params = params;
        this.badgeClass = this.getBadgeClass(params.value);
    }

    refresh(params: any): boolean {
        this.params = params;
        this.badgeClass = this.getBadgeClass(params.value);
        return true;
    }

    private getBadgeClass(value: string): string {
        console.log('getBadgeClass called with value:', value);
        switch (value?.toLowerCase()) {
            case 'extracurricular student':
                return 'badge-extracurricular-student';
            case 'curriculum student':
                return 'badge-curriculum-student';
            case 'staff':
                return 'badge-staff';
            case 'visitor':
                return 'badge-visitor';
            default:
                return '';
        }
    }
}