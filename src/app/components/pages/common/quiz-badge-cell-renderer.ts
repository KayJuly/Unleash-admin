import {Component} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'quiz-badge-cell',

    template: `
      <div class="quiz-container" [ngClass]="{'passed': isPassed, 'failed': !isPassed}">
        <fa-icon [icon]="icon" [ngClass]="{'passed-icon': isPassed, 'failed-icon': !isPassed}"></fa-icon>
        <span class="quiz-text">{{ quizText }}</span>
      </div>
    `,
    standalone: true,
    imports: [
        NgClass,CommonModule,FontAwesomeModule
    ],
    styles: [`
      .quiz-container {
        display: flex;
        align-items: center;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.85rem;
      }
      .passed-icon {
        color: #28a745;
      }
      .failed-icon {
        color: #dc3545;
      }
      fa-icon {
        margin-right: 8px;
      }
      .quiz-text {
        font-weight: 500;
      }
    `]
})
export class quizBadgeCellRenderer implements ICellRendererAngularComp {
    quizText: string;
    isPassed: boolean;
    icon: any;

    constructor() {
        this.icon = faCheck;
    }

    agInit(params: any): void {
        const quizData = params.value;
        if (quizData && quizData.score) {
            const score = parseInt(quizData.score.replace('%', ''), 10);
            this.isPassed = score >= 90;
            this.icon = this.isPassed ? faCheck : faTimes;
            this.quizText = `${this.isPassed ? 'Passed' : 'Failed'} ${quizData.date} (${quizData.score})`;
        } else {
            this.isPassed = false;
            this.icon = faTimes;
            this.quizText = 'No Quiz Data';
        }
    }
    refresh(params: any): boolean {
        this.agInit(params);
        return true;
    }
}