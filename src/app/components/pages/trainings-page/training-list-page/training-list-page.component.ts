import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef, GridReadyEvent, GridApi, CellClassParams} from 'ag-grid-community';
import {trainingData} from '../../common/data/trainings';
import {UserTypeBadgeCellRenderer} from '../../common/user-type-badge-cell-renderer';
import {ActionsCellRenderer} from "../../common/actions-cell-renderer";

@Component({
    selector: 'app-users-page',
    templateUrl: './training-list-page.component.html',
    styleUrls: ['./training-list-page.component.scss'],
    standalone: true,
    imports: [AgGridAngular, UserTypeBadgeCellRenderer],
})
export class TrainingListPageComponent {
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
    private gridApi!: GridApi<any>;

    columnDefs: ColDef[] = [
        {
            field: 'courses',
            headerName: 'Courses Name',
            flex: 1,
            minWidth: 150,
            editable: true,
        },
        {
            field: 'instructor',
            headerName: 'Instructor',
            flex: 1,
            minWidth: 150,
            editable: true,
        },
        {field: 'email', headerName: 'Email', flex: 1, minWidth: 150, editable: true},
        {field: 'phone', headerName: 'Phone', flex: 1, minWidth: 150, editable: true},
        {field: 'location', headerName: 'Location', minWidth: 150, flex: 1, editable: true},
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

    onExport() {
        this.gridApi.exportDataAsCsv();
    }

    onGridReady(params: GridReadyEvent<any>) {
        this.gridApi = params.api;
    }

    protected readonly trainingData = trainingData;
}