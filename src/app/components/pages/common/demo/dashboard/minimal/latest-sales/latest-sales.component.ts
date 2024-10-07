import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { latestSales } from '../../../../shared/data/dashboard/minimal/chart';

@Component({
    selector: 'app-latest-sales',
    templateUrl: './latest-sales.component.html',
    styleUrl: './latest-sales.component.scss',
    standalone: true,
    imports: [NgApexchartsModule]
})

export class LatestSalesComponent {

  public latestSales = latestSales ;

}
