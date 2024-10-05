import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef, GridReadyEvent, GridApi, CellClassParams} from 'ag-grid-community';
import {userData} from '../../common/data/user';
import {UserTypeBadgeCellRenderer} from '../../common/user-type-badge-cell-renderer';
import {ActionsCellRenderer} from "../../common/actions-cell-renderer";

@Component({
    selector: 'app-users-page',
    templateUrl: './users-list-page.component.html',
    styleUrls: ['./users-list-page.component.scss'],
    standalone: true,
    imports: [AgGridAngular, UserTypeBadgeCellRenderer],
})
export class UsersListPageComponent {
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
    private gridApi!: GridApi<any>;

    columnDefs: ColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            editable: true,
        },
        {field: 'upi', headerName: 'UPI', flex: 1, width: 100, maxWidth: 100, editable: true},
        {
            field: 'type',
            headerName: 'User Type',
            flex: 1,
            width: 220,
            maxWidth: 220,
            editable: true,
            cellRenderer: UserTypeBadgeCellRenderer
        },
        {field: 'email', headerName: 'Email', flex: 1, minWidth: 150, editable: true},
        {field: 'phone', headerName: 'Phone', flex: 1, minWidth: 150, editable: true},
        {field: 'degree', headerName: 'Degree Program', minWidth: 150, flex: 1, editable: true},
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

    protected readonly userData = userData;
}