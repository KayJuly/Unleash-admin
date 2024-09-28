import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class LayoutService {
    public customizer: boolean = false;
    public margin: number = 0;

    public config = {
        settings: {
            layout_type: "ltr",
            layout_version: "light-only",
            // "layout_version": "dark-sidebar",
            sidebar_type: "compact-wrapper",
            icon: "stroke-svg",
        },
        color: {
            primary_color: "#00467f",
            secondary_color: "#C06240",
        },
    };


    constructor() {
        if (this.config.settings.layout_type == "box-layout") {
            document.body.classList.add("box-layout");
        }
        document
            .getElementsByTagName("html")[0]
            .setAttribute("dir", this.config.settings.layout_type);

        document.documentElement.style.setProperty(
            "--theme-default",
            this.config.color.primary_color
        );
        document.documentElement.style.setProperty(
            "--theme-secondary",
            this.config.color.secondary_color
        );
    }
}
