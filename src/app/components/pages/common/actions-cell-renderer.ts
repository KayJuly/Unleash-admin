import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-actions-cell',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    template: `
    <div class="actions-container">
      <button class="btn btn-outline-primary btn-sm" (click)="onEdit()">
        <fa-icon [icon]="faEdit"></fa-icon>
      </button>
      <button class="btn btn-outline-danger btn-sm" (click)="onDelete()">
        <fa-icon [icon]="faTrash"></fa-icon>
      </button>
    </div>
  `,
    styles: [`
    .actions-container {
      display: flex;
      gap: 8px;
      justify-content: center;
      margin-top: 4px;
    }
    .btn {
      padding: 0.25rem 0.5rem;
    }
  `]
})
export class ActionsCellRenderer implements ICellRendererAngularComp {
    params: any;
    faEdit = faEdit;
    faTrash = faTrash;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(params: any): boolean {
        this.params = params;
        return true;
    }

    onEdit(): void {
        console.log('Edit clicked for:', this.params.data);
    }

    onDelete(): void {
        console.log('Delete clicked for:', this.params.data);
    }
}