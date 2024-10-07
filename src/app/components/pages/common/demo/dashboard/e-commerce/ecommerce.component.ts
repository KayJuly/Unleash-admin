import { Component } from '@angular/core';
import { LatestOfferProductComponent } from './latest-offer-product/latest-offer-product.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { MonthlySellingProductComponent } from './monthly-selling-product/monthly-selling-product.component';
import { WeeklyUserActivityComponent } from './weekly-user-activity/weekly-user-activity.component';
import { TopTransactionComponent } from './top-transaction/top-transaction.component';
import { CustomerGrowthComponent } from './customer-growth/customer-growth.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { SummaryComponent } from './summary/summary.component';
import { TotalSaleComponent } from './total-sale/total-sale.component';

@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.scss'],
    standalone: true,
    imports: [TotalSaleComponent, SummaryComponent, RecentOrdersComponent, CustomerGrowthComponent, TopTransactionComponent, WeeklyUserActivityComponent, MonthlySellingProductComponent, SalesDetailsComponent, LatestOfferProductComponent]
})
export class EcommerceComponent {

}
