import { Component } from '@angular/core';
import { AllNotificationComponent } from './all-notification/all-notification.component';
import { LastOrdersComponent } from './last-orders/last-orders.component';
import { LatestSalesComponent } from './latest-sales/latest-sales.component';
import { MonthlyInvoicesComponent } from './monthly-invoices/monthly-invoices.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { RecentStatisticsComponent } from './recent-statistics/recent-statistics.component';
import { SalesStatisticComponent } from './sales-statistic/sales-statistic.component';
import { SalesStatsComponent } from './sales-stats/sales-stats.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-minimal',
    templateUrl: './minimal.component.html',
    styleUrl: './minimal.component.scss',
    standalone: true,
    imports: [ RecentActivityComponent, SalesStatsComponent, LatestSalesComponent, 
        LastOrdersComponent, MonthlyInvoicesComponent, RecentStatisticsComponent, 
        AllNotificationComponent, ProjectSummaryComponent, SalesStatisticComponent,RouterModule]
})

export class MinimalComponent {

}
