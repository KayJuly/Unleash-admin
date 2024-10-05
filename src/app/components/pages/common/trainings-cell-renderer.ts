import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faCalendarAlt, faCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-training-progress',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    template: `
      <div class="trainings-container">
        <div *ngFor="let training of filteredTrainings" class="training-item">
          <fa-icon [icon]="getIcon(training.status)" [ngClass]="getIconClass(training.status)"></fa-icon>
          <span class="training-text">{{ training.type }}: {{ getDisplayText(training) }}</span>
        </div>
      </div>    `,
    styles: [`
      .trainings-container {
        display: flex;
        flex-direction: column;
      }

      .training-item {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .icon-completed {
        color: #28a745;
        opacity: 0.7;
      }

      .icon-booking {
        color: #ffc107;
        opacity: 0.7;
      }

      .icon-not-started {
        color: #6c757d;
        opacity: 0.5;
      }

      .training-text {
        font-size: 0.85rem;
      }

      fa-icon {
        font-size: 1rem;
      }
    `]
})
export class TrainingsCellRenderer implements ICellRendererAngularComp {
    trainings: any[];
    filteredTrainings: any[];

    faCheckCircle = faCheckCircle;
    faCalendarAlt = faCalendarAlt;

    agInit(params: any): void {
        this.trainings = params.value || [];
        this.filterTrainings();
    }

    refresh(params: any): boolean {
        this.trainings = params.value || [];
        this.filterTrainings();
        return true;
    }

    filterTrainings(): void {
        this.filteredTrainings = this.trainings.filter(training =>
            training.status.toLowerCase() === 'completed' || training.status.toLowerCase() === 'booking'
        );
    }

    getIcon(status: string): any {
        return status.toLowerCase() === 'completed' ? this.faCheckCircle : this.faCalendarAlt;
    }

    getIconClass(status: string): string {
        return status.toLowerCase() === 'completed' ? 'icon-completed' : 'icon-booking';
    }

    getDisplayText(training: any): string {
        return training.status === 'completed'
            ? `Completed ${training.date}`
            : `Booked for ${training.date}`;
    }
}