import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonSvgIconComponent } from '../../../../../../../shared/component/common-svg-icon/common-svg-icon.component';
import { RouterLink } from '@angular/router';
import { totalSale } from '../../../../../../../shared/data/dashboard/minimal/chart';

@Component({
    selector: 'app-total-sale',
    templateUrl: './total-sale.component.html',
    styleUrls: ['./total-sale.component.scss'],
    standalone: true,
    imports: [RouterLink, CommonSvgIconComponent, NgApexchartsModule]
})

export class TotalSaleComponent {

  public totalSale = totalSale;

}
