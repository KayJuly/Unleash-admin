import {Routes} from '@angular/router';
import {analysisRoutes} from "./analysis-page/analysis-page.routes";

export default [
    {
        path: "",
        loadChildren: () =>
            import("./dashboard-page/dashboard-page.routes").then((m) => m.dashboardRoutes),
        data: {
            title: "Dashboard",
            breadcrumb: "Dashboard",
        },
    },
    {
        path: "analysis",
        loadChildren: () =>
            import("./analysis-page/analysis-page.routes").then((m) => m.analysisRoutes),
        data: {
            title: "Analysis",
            breadcrumb: "Analysis",
        },
    }
] as Routes;

