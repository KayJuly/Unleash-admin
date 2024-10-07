import {Component} from '@angular/core';
import {TotalSaleComponent} from "../../common/demo/dashboard/e-commerce/total-sale/total-sale.component";
import {SummaryComponent} from "../../common/demo/dashboard/e-commerce/summary/summary.component";
import {
    WeeklyUserActivityComponent
} from "../../common/demo/dashboard/e-commerce/weekly-user-activity/weekly-user-activity.component";
import {
    RecentStatisticsComponent
} from "../../common/demo/dashboard/minimal/recent-statistics/recent-statistics.component";
import {
    CustomerGrowthComponent
} from "../../common/demo/dashboard/e-commerce/customer-growth/customer-growth.component";
import {
    LatestOfferProductComponent
} from "../../common/demo/dashboard/e-commerce/latest-offer-product/latest-offer-product.component";

@Component({
    selector: 'app-analysis',
    templateUrl: './analysis-page.component.html',
    styleUrls: ['./analysis-page.component.scss'],
    imports: [
        TotalSaleComponent,
        SummaryComponent,
        CustomerGrowthComponent,
        LatestOfferProductComponent,
        WeeklyUserActivityComponent,
        RecentStatisticsComponent,
        TotalSaleComponent,
        SummaryComponent,
        WeeklyUserActivityComponent,
        RecentStatisticsComponent,
        CustomerGrowthComponent,
        LatestOfferProductComponent
    ],
    standalone: true
})
export class AnalysisPageComponent {}
