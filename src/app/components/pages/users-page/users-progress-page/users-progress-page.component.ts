import {Component, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef, GridReadyEvent, GridApi} from 'ag-grid-community';
import {userProgressData} from '../../common/data/user-progress';
import {UserTypeBadgeCellRenderer} from '../../common/user-type-badge-cell-renderer';
import {quizBadgeCellRenderer} from '../../common/quiz-badge-cell-renderer';
import {TrainingsCellRenderer} from "../../common/trainings-cell-renderer";
import {ActionsCellRenderer} from "../../common/actions-cell-renderer";

@Component({
    selector: 'app-users-progress-page',
    templateUrl: './users-progress-page.component.html',
    styleUrls: ['./users-progress-page.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class UsersProgressPageComponent {
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
    private gridApi!: GridApi<any>;

    columnDefs: ColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            width: 300,
            maxWidth: 300,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'User Type',
            flex: 1,
            width: 200,
            maxWidth: 200,
            editable: true,
            cellRenderer: UserTypeBadgeCellRenderer
        },
        {field: 'join', headerName: 'Join', flex: 1, maxWidth: 120, editable: true},
        {field: 'orientation', headerName: 'Orientation', flex: 1, maxWidth: 120, editable: true},
        {
            field: 'quiz',
            headerName: 'Quiz',
            flex: 1,
            width: 250,
            maxWidth: 250,
            editable: true,
            cellRenderer: quizBadgeCellRenderer,
        },
        {
            field: 'trainings',
            headerName: 'Trainings',
            flex: 2,
            minWidth: 300,
            editable: true,
            cellRenderer: TrainingsCellRenderer,
            autoHeight: true,
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

    onBtExport() {
        this.gridApi.exportDataAsCsv();
    }

    onGridReady(params: GridReadyEvent<any>) {
        this.gridApi = params.api;
    }

    protected readonly userProgressData = userProgressData;

}
