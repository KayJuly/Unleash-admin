import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'status-badge-cell',
    imports: [CommonModule],
    template: `
      <span class="badge" [ngClass]="badgeClass">{{ params.value }}</span>
    `,
    standalone: true,
    styles: [`
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

      .badge-scheduled {
        background-color: #cce5ff;
        color: #004085;
      }

      .badge-in-progress {
        background-color: #fff3cd;
        color: #856404;
      }

      .badge-completed {
        background-color: #d4edda;
        color: #155724;
      }

      .badge-cancelled {
        background-color: #f8d7da;
        color: #721c24;
      }
    `]
})
export class StatusBadgeCellRenderer implements ICellRendererAngularComp {
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
        switch (value?.toLowerCase()) {
            case 'scheduled':
                return 'badge-scheduled';
            case 'in progress':
                return 'badge-in-progress';
            case 'completed':
                return 'badge-completed';
            case 'cancelled':
                return 'badge-cancelled';
            default:
                return '';
        }
    }
}