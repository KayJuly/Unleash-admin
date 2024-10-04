import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef, GridReadyEvent, ICellRendererParams} from 'ag-grid-community';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-list-page.component.html',
    standalone: true,
    imports: [AgGridAngular],
    styleUrls: ['./users-list-page.component.css']
})
export class UsersListPageComponent implements OnInit {
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

    columnDefs: ColDef[] = [
        {field: 'name', headerName: 'Name', flex: 1, width: 200},
        {field: 'upi', headerName: 'UPI', flex: 1, width: 200},
        {field: 'email', headerName: 'Email', flex: 1, width: 200},
        {field: 'phone', headerName: 'Phone', flex: 1, width: 200},
        {field: 'date', headerName: 'Joining Date', flex: 1, width: 200},
        {field: 'status', headerName: 'status', flex: 1,width: 200},
        {
            field: 'progress',
            headerName: 'Progress',
            flex: 1,
            cellRenderer: (params: ICellRendererParams) => {
                return `<div class="progress-bar" style="width:${params.value}%">${params.value}%</div>`;
            }
        }
    ];

    defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1
    };

    rowData = [
        {
            name: 'Hallie Haynes',
            upi: 'hlhy1234',
            email: 'hlhy1234@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'Done',
            progress: 100
        },
        {
            name: 'Kason Sanchez',
            upi: 'kssh3452',
            email: 'kssh3452@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'In progress',
            progress: 60
        },
        {
            name: 'Hallie Haynes',
            upi: 'hlhy1234',
            email: 'hlhy1234@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'Done',
            progress: 100
        },
        {
            name: 'Kason Sanchez',
            upi: 'kssh3452',
            email: 'kssh3452@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'In progress',
            progress: 60
        },
        {
            name: 'Hallie Haynes',
            upi: 'hlhy1234',
            email: 'hlhy1234@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'Done',
            progress: 100
        },
        {
            name: 'Kason Sanchez',
            upi: 'kssh3452',
            email: 'kssh3452@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'In progress',
            progress: 60
        },
        {
            name: 'Hallie Haynes',
            upi: 'hlhy1234',
            email: 'hlhy1234@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'Done',
            progress: 100
        },
        {
            name: 'Kason Sanchez',
            upi: 'kssh3452',
            email: 'kssh3452@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'In progress',
            progress: 60
        },
        {
            name: 'Hallie Haynes',
            upi: 'hlhy1234',
            email: 'hlhy1234@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'Done',
            progress: 100
        },
        {
            name: 'Kason Sanchez',
            upi: 'kssh3452',
            email: 'kssh3452@aucklanduni.com',
            phone: '+64 9152639845',
            date: '26/09/2024',
            status: 'In progress',
            progress: 60
        },
    ];

    ngOnInit() {
        console.log('Component initialized');
    }

    onGridReady(params: GridReadyEvent) {
        console.log('Grid ready');
        this.agGrid.api.sizeColumnsToFit();
    }

    progressCellRenderer(params: any) {
        const value = params.value;
        const cellValue = value !== undefined ? value : 0;
        return `
      <div class="progress" style="height: 20px;">
        <div class="progress-bar" role="progressbar" style="width: ${cellValue}%;" aria-valuenow="${cellValue}" aria-valuemin="0" aria-valuemax="100">${cellValue}%</div>
      </div>
    `;
    }
}