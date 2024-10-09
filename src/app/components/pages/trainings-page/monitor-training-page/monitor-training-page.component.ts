import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, GridApi } from 'ag-grid-community';
import { CalendarEvent, CalendarView, CalendarModule } from 'angular-calendar';
import { Subject } from 'rxjs';
import { courseRegistrationData } from '../../common/data/course-registration';
import {addMonths, isSameDay, isSameMonth, subMonths} from 'date-fns';
import {
    WeeklyUserActivityComponent
} from "../../common/demo/dashboard/e-commerce/weekly-user-activity/weekly-user-activity.component";
import {UserTypeBadgeCellRenderer} from "../../common/user-type-badge-cell-renderer";
import {quizBadgeCellRenderer} from "../../common/quiz-badge-cell-renderer";
import {TrainingsCellRenderer} from "../../common/trainings-cell-renderer";
import {ActionsCellRenderer} from "../../common/actions-cell-renderer";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {userData} from "../../common/data/user";
import {CheckinBadgeCellRenderer} from "../../common/checkin-badge-cell-renderer";

interface EventDetails {
    id: string;
    instructor: string;
    participants: number;
    maxParticipants: number;
    status: string;
}

@Component({
    selector: 'app-monitor-training-page',
    templateUrl: './monitor-training-page.component.html',
    styleUrls: ['./monitor-training-page.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        AgGridAngular,
        CalendarModule,
        WeeklyUserActivityComponent,
        FaIconComponent
    ]
})
export class MonitorTrainingPageComponent implements OnInit {
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
    private gridApi!: GridApi;
    activeDayIsOpen: boolean = false;

    // Calendar properties
    view: CalendarView = CalendarView.Month;
    viewDate: Date = new Date();
    events: CalendarEvent[] = [];
    filteredEvents: CalendarEvent[] = [];
    selectedEvent: CalendarEvent | null = null;
    refresh: Subject<any> = new Subject();

    // Selected course properties
    columnDefs: ColDef[] = [
        { field: 'course', headerName: 'Course Name' },
        { field: 'dateTime', headerName: 'Date and Time' }
    ];

    // Attendance properties
    attendanceData: any[] = [];
    attendanceColumnDefs: ColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            editable: true,
        },
        {field: 'studentId', headerName: 'UPI', flex: 1, width: 150, maxWidth: 150, editable: true},
        {field: 'checkInTime', headerName: 'Check-in Time', flex: 1, width: 200, maxWidth: 200, editable: true},
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            minWidth: 150,
            editable: true,
            cellRenderer:CheckinBadgeCellRenderer
        },
        {
            headerName: 'Actions',
            cellRenderer: ActionsCellRenderer,
            cellRendererParams: {
                clicked: (field: string) => {
                    alert(`${field} was clicked`);
                },
            },
            width: 100, maxWidth: 100,
            flex: 0.5,
            sortable: false,
            filter: false
        }
    ];
    defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        minWidth: 100,
        flex: 1
    };

    // Additional event details
    eventDetails: Map<string, EventDetails> = new Map();

    rowData: any[] = [];

    constructor() {}

    ngOnInit() {
        this.loadEvents();
        this.attendanceData = [];
    }

    loadEvents() {
        this.events = courseRegistrationData.map((registration, index) => {
            const [year, month, day] = registration.date.split('-').map(Number);
            const [startHour, startMinute] = registration.time.start.split(':').map(Number);
            const [endHour, endMinute] = registration.time.end.split(':').map(Number);

            const startDate = new Date(year, month - 1, day, startHour, startMinute);
            const endDate = new Date(year, month - 1, day, endHour, endMinute);

            return {
                id: index.toString(),
                start: startDate,
                end: endDate,
                title: registration.course,
                color: this.getEventColor(registration.status)
            };
        });

        this.updateFilteredEvents();
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
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
        this.updateRowData();
    }

    previousMonth(): void {
        this.viewDate = subMonths(this.viewDate, 1);
        this.updateFilteredEvents();
    }

    nextMonth(): void {
        this.viewDate = addMonths(this.viewDate, 1);
        this.updateFilteredEvents();
    }

    updateFilteredEvents() {
        this.filteredEvents = this.events.filter(event =>
            event.start.toDateString() === this.viewDate.toDateString()
        );
        this.updateRowData();
    }

    updateRowData() {
        this.rowData = this.filteredEvents.map(event => ({
            course: event.title,
            dateTime: this.formatEventDateTime(event)
        }));

        if (this.gridApi) {
            this.gridApi.setGridOption('rowData', this.rowData);
        }
    }

    formatEventDateTime(event: CalendarEvent): string {
        const startTime = event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const endTime = event.end ? event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A';
        return `${event.start.toLocaleDateString()} ${startTime} - ${endTime}`;
    }

    onGridReady(params: GridReadyEvent) {
        this.gridApi = params.api;
        this.updateRowData();
    }

    getEventDetails(eventId: string | number | undefined): EventDetails | undefined {
        if (eventId === undefined) return undefined;
        return this.eventDetails.get(eventId.toString());
    }

    selectEvent(event: CalendarEvent | any) {
        let selectedCalendarEvent: CalendarEvent | null = null;

        if ('start' in event) {
            selectedCalendarEvent = event;
        } else {
            selectedCalendarEvent = this.events.find(e => e.title === event.course) || null;
        }

        if (selectedCalendarEvent) {
            this.selectedEvent = selectedCalendarEvent;
            this.loadAttendanceData(selectedCalendarEvent);
        } else {
            console.warn('No matching event found');
            this.selectedEvent = null;
        }
    }

    loadAttendanceData(event: CalendarEvent) {
        this.attendanceData = [
            { studentId: 'hfde0021', name: 'John Doe', checkInTime: '09:00', status: 'Checked' },
            { studentId: 'jedc0123', name: 'Jane Smith', checkInTime: '-', status: 'Not arrived' },
            { studentId: 'bbfh1234', name: 'Bob Johnson', checkInTime: '-', status: 'Absent' },
            { studentId: 'hfde0021', name: 'John Doe', checkInTime: '09:00', status: 'Checked' },
            { studentId: 'jedc0123', name: 'Jane Smith', checkInTime: '-', status: 'Not arrived' },
            { studentId: 'bbfh1234', name: 'Bob Johnson', checkInTime: '-', status: 'Absent' },
            { studentId: 'hfde0021', name: 'John Doe', checkInTime: '09:00', status: 'Checked' },
            { studentId: 'jedc0123', name: 'Jane Smith', checkInTime: '09:05', status: 'Checked' },
            { studentId: 'bbfh1234', name: 'Bob Johnson', checkInTime: '-', status: 'Absent' },
            { studentId: 'hfde0021', name: 'John Doe', checkInTime: '09:00', status: 'Checked' },
            { studentId: 'jedc0123', name: 'Jane Smith', checkInTime: '09:05', status: 'Checked' },
            { studentId: 'bbfh1234', name: 'Bob Johnson', checkInTime: '-', status: 'Absent' },
            { studentId: 'hfde0021', name: 'John Doe', checkInTime: '09:00', status: 'Checked' },
            { studentId: 'jedc0123', name: 'Jane Smith', checkInTime: '09:05', status: 'Checked' },
            { studentId: 'bbfh1234', name: 'Bob Johnson', checkInTime: '-', status: 'Absent' },
        ];
    }

    getEventColor(status: string): any {
        switch (status) {
            case 'Completed':
                return { primary: '#4caf50', secondary: '#c8e6c9' };
            case 'In Progress':
                return { primary: '#2196f3', secondary: '#bbdefb' };
            case 'Scheduled':
                return { primary: '#ff9800', secondary: '#ffe0b2' };
            case 'Cancelled':
                return { primary: '#f44336', secondary: '#ffcdd2' };
            default:
                return { primary: '#9e9e9e', secondary: '#f5f5f5' };
        }
    }

    protected readonly faPlus = faPlus;
    protected readonly userData = userData;
}
