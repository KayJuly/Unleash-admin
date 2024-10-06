import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef, GridReadyEvent, GridApi, CellClassParams} from 'ag-grid-community';
import {courseRegistrationData} from '../../common/data/course-registration';
import {trainingData} from '../../common/data/trainings';

import {UserTypeBadgeCellRenderer} from '../../common/user-type-badge-cell-renderer';
import {ActionsCellRenderer} from "../../common/actions-cell-renderer";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {StatusBadgeCellRenderer} from "../../common/status-badge-cell-renderer";

@Component({
    selector: 'app-course-registration-page',
    templateUrl: './course-registration-page.component.html',
    styleUrls: ['./course-registration-page.component.scss'],
    standalone: true,
    imports: [AgGridAngular, UserTypeBadgeCellRenderer, FaIconComponent],
})
export class CourseRegistrationPageComponent {
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
    private gridApi!: GridApi<any>;
    faPlus = faPlus;

    columnDefs: ColDef[] = [
        {
            field: 'course',
            headerName: 'Course Name',
            flex: 1,
            minWidth: 150,
            editable: true,
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
            minWidth: 120,
            editable: true,
        },
        {
            field: 'time',
            headerName: 'Time',
            flex: 1,
            minWidth: 150,
            editable: true,
            valueFormatter: (params) => {
                if (params.value) {
                    return `${params.value.start} - ${params.value.end}`;
                }
                return '';
            }
        },
        {
            field: 'instructor',
            headerName: 'Instructor',
            flex: 1,
            minWidth: 150,
            editable: true,
        },
        {
            field: 'participants',
            headerName: 'Participants',
            flex: 1,
            width: 140,
            maxWidth: 140,
            editable: true,
            cellStyle: { textAlign: 'center' },
        },
        {
            field: 'maxParticipants',
            headerName: 'Max',
            flex: 1,
            width: 130,
            maxWidth: 130,
            editable: true,
            cellStyle: { textAlign: 'center' },
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            minWidth: 120,
            cellRenderer: StatusBadgeCellRenderer
        },
        {
            headerName: 'Actions',
            cellRenderer: ActionsCellRenderer,
            cellRendererParams: {
                clicked: (field: string) => {
                    alert(`${field} was clicked`);
                },
            },
            width: 100,
            maxWidth: 100,
            flex: 0.5,
            sortable: false,
            filter: false
        }];

    defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        minWidth: 100,
        flex: 1
    };

    onExport() {
        console.log('Export clicked');
        this.gridApi.exportDataAsCsv();
    }

    onImport() {
        console.log('Import clicked');
        this.gridApi.exportDataAsCsv();
    }

    onAddNew() {
        console.log('Add clicked');
    }

    onGridReady(params: GridReadyEvent<any>) {
        this.gridApi = params.api;
    }

    protected readonly courseRegistrationData = courseRegistrationData;
}