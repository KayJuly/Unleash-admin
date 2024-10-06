import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, GridApi } from 'ag-grid-community';
import { CalendarEvent, CalendarView, CalendarModule } from 'angular-calendar';
import { Subject } from 'rxjs';
import { courseRegistrationData } from '../../common/data/course-registration';
import { addMonths, subMonths } from 'date-fns';

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
        CalendarModule
    ]
})
export class MonitorTrainingPageComponent implements OnInit {
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
    private gridApi!: GridApi;

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
        { field: 'studentId', headerName: 'Student ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'checkInTime', headerName: 'Check-in Time' },
        { field: 'status', headerName: 'Status' }
    ];
    defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true
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
            const startDate = new Date(registration.date + 'T' + registration.time.start);
            const endDate = new Date(registration.date + 'T' + registration.time.end);

            const id = index.toString();
            this.eventDetails.set(id, {
                id,
                instructor: registration.instructor,
                participants: registration.participants,
                maxParticipants: registration.maxParticipants,
                status: registration.status
            });

            return {
                id,
                start: startDate,
                end: endDate,
                title: registration.course,
                color: this.getEventColor(registration.status)
            };
        });

        this.updateFilteredEvents();
    }

    dayClicked({ date }: { date: Date }): void {
        this.viewDate = date;
        this.updateFilteredEvents();
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
            { studentId: '001', name: 'John Doe', checkInTime: '09:00', status: 'Present' },
            { studentId: '002', name: 'Jane Smith', checkInTime: '09:05', status: 'Present' },
            { studentId: '003', name: 'Bob Johnson', checkInTime: '-', status: 'Absent' },
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
}
