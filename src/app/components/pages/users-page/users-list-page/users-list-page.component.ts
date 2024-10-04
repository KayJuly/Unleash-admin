import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef, GridReadyEvent, GridApi, CellClassParams} from 'ag-grid-community';
import {userData} from '../../common/data/user';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-list-page.component.html',
    styleUrls: ['./users-list-page.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class UsersListPageComponent implements OnInit {
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
    private gridApi!: GridApi<any>;
    rowSelection: 'single' | 'multiple' = 'multiple';

    columnDefs: ColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            width: 200,
            editable: true,
            headerCheckboxSelection: true,
            checkboxSelection: true
        },
        {field: 'upi', headerName: 'UPI', flex: 1, width: 200, editable: true},
        {field: 'email', headerName: 'Email', flex: 1, width: 200, editable: true},
        {field: 'phone', headerName: 'Phone', flex: 1, width: 200, editable: true},
        {field: 'date', headerName: 'Joining Date', flex: 1, width: 200, editable: true},
        {
            field: 'type',
            headerName: 'User Type', flex: 1, width: 200, editable: true,
            cellClass: this.getStatusCellClass.bind(this)
        }
    ];

    defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        minWidth: 100,
        flex: 1
    };

    getStatusCellClass(params: CellClassParams): string {
        switch (params.value) {
            case 'Visitor':
                return 'type-visitor';
            case 'Staff':
                return 'type-staff';
            default:
                return 'type-extracurricular';
        }
    }

    ngOnInit() {
        console.log('Component initialized');
    }

    onBtExport() {
        this.gridApi.exportDataAsCsv();
    }

    onGridReady(params: GridReadyEvent<any>) {
        this.gridApi = params.api;
    }

    protected readonly userData = userData;
}