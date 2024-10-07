import {JsonPipe, NgSwitch, NgSwitchCase} from '@angular/common';
import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
    CalendarCommonModule,
    CalendarDayModule,
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarMonthModule,
    CalendarView,
    CalendarWeekModule
} from 'angular-calendar';
import {FlatpickrModule} from 'angularx-flatpickr';
import {EventColor} from 'calendar-utils';
import {addDays, addHours, endOfDay, endOfMonth, isSameDay, isSameMonth, startOfDay, subDays,} from 'date-fns';
import {Subject} from 'rxjs';
import {faEdit, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

const colors: Record<string, EventColor> = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};

@Component({
    selector: 'app-course-calendar',
    templateUrl: './course-calendar-page.component.html',
    styleUrls: ['./course-calendar-page.component.scss'],
    standalone: true,
    imports: [CalendarCommonModule, NgSwitch, NgSwitchCase, CalendarMonthModule, CalendarWeekModule, CalendarDayModule, FormsModule, FlatpickrModule, JsonPipe, FaIconComponent]
})
export class CourseCalendarPageComponent {

    @ViewChild('modalContent', {static: false})

    public modalContent!: TemplateRef<Component>;
    public view: CalendarView = CalendarView.Month;
    public CalendarView = CalendarView;
    public viewDate: Date = new Date();

    modalData!: {
        action: string;
        event: CalendarEvent;
    };

    actions: CalendarEventAction[] = [
        {
            label: '<i class="fas fa-fw fa-pencil-alt"></i>',
            a11yLabel: 'Edit',
            onClick: ({event}: { event: CalendarEvent }): void => {
                this.handleEvent('Edited', event);
            },
        },
        {
            label: '<i class="fas fa-fw fa-trash-alt"></i>',
            a11yLabel: 'Delete',
            onClick: ({event}: { event: CalendarEvent }): void => {
                this.events = this.events.filter((iEvent) => iEvent !== event);
                this.handleEvent('Deleted', event);
            },
        },
    ];

    refresh = new Subject<void>();

        events: CalendarEvent[] = [
            {
                start: new Date(2024, 9, 1, 9, 0),
                end: addHours(new Date(2024, 9, 1, 9, 0), 2),
                title: '3D Printer Workshop',
                color: {
                    primary: '#ad2121',
                    secondary: '#FAE3E3'
                },
                actions: this.actions,
                allDay: false,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
            {
                start: new Date(2024, 9, 5, 9, 0),
                end: addHours(new Date(2024, 9, 5, 9, 0), 2),
                title: '3D Printer Workshop',
                color: {
                    primary: '#ad2121',
                    secondary: '#FAE3E3'
                },
                actions: this.actions,
                allDay: false,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
            {
                start: new Date(2024, 9, 5, 14, 0),
                end: addHours(new Date(2024, 9, 5, 14, 0), 2),
                title: 'Laser Cutting Demo',
                color: { ...colors['yellow'] },
                actions: this.actions,
                allDay: false,
            },
            {
                start: new Date(2024, 9, 12, 10, 0),
                end: addHours(new Date(2024, 9, 12, 10, 0), 2),
                title: 'Sewing Class',
                color: { ...colors['blue'] },
                allDay: false,
            },
            {
                start: new Date(2024, 9, 20, 13, 0),
                end: addHours(new Date(2024, 9, 20, 13, 0), 2),
                title: 'CNC Router Tutorial',
                color: { ...colors['yellow'] },
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
            {
                start: new Date(2024, 9, 25, 9, 0),
                end: addHours(new Date(2024, 9, 25, 9, 0), 2),
                title: '3D Printer Workshop',
                color: {
                    primary: '#ad2121',
                    secondary: '#FAE3E3'
                },
                actions: this.actions,
                allDay: false,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
            {
                start: new Date(2024, 9, 25, 15, 0),
                end: addHours(new Date(2024, 9, 25, 15, 0), 2),
                title: '3D Modeling Workshop',
                color: { primary: '#1e90ff', secondary: '#D1E8FF' },
                actions: this.actions,
                allDay: false,
            },
            {
                start: new Date(2024, 9, 30, 11, 0),
                end: addHours(new Date(2024, 9, 30, 11, 0), 2),
                title: 'Advanced Laser Cutting',
                color: { primary: '#e3bc08', secondary: '#FDF1BA' },
                actions: this.actions,
                allDay: false,
            }
        ];

        activeDayIsOpen
:
    boolean = true;
    color: string

    constructor(private modal: NgbModal) {
    }

    dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }

    eventTimesChanged({
                          event,
                          newStart,
                          newEnd,
                      }: CalendarEventTimesChangedEvent): void {
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return {
                    ...event,
                    start: newStart,
                    end: newEnd,
                };
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = {event, action};
        this.modal.open(this.modalContent, {size: 'lg'});
    }

    onAddNew(): void {
        this.events = [
            ...this.events,
            {
                title: 'New event',
                start: startOfDay(new Date()),
                end: endOfDay(new Date()),
                color: colors['red'],
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
            },
        ];
    }

    onDelete(eventToDelete: CalendarEvent) {
        this.events = this.events.filter((event) => event !== eventToDelete);
    }

    setView(view: CalendarView) {
        this.view = view;
    }

    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }

    protected readonly faPlus = faPlus;
    protected readonly faEdit = faEdit;
    protected readonly faTrash = faTrash;
}
