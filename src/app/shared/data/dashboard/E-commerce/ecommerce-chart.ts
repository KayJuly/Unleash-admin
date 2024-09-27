import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexLegend,
    ApexResponsive,
    ApexStroke,
    ApexXAxis,
    ApexYAxis,
    ApexFill,
    ApexDataLabels,
    ApexAxisChartSeries,
    ApexMarkers,
    ApexTheme,
    ApexTitleSubtitle,
    ApexAnnotations,
    ApexGrid
} from "ng-apexcharts";


export type ChartOptions = {
    series?: ApexAxisChartSeries;
    chart?: ApexChart;
    xaxis?: ApexXAxis;
    stroke?: ApexStroke;
    tooltip?: string[] | boolean;
    dataLabels?: ApexDataLabels;
    yaxis?: ApexYAxis;
    legend?: ApexLegend;
    labels?: string[];
    shared?: boolean;
    plotOptions?: ApexPlotOptions;
    fill?: ApexFill;
    responsive?: ApexResponsive[];
    pieseries?: ApexNonAxisChartSeries;
    title?: ApexTitleSubtitle;
    theme?: ApexTheme;
    colors?: string[];
    markers?: ApexMarkers;
    annotations?: ApexAnnotations;
    grid?: ApexGrid;
    formatter?: Function;
}

let primary_color = localStorage.getItem('primary_color') || '#2B5F60';
let secondary_color = localStorage.getItem('secondary_color') || '#C06240';


export const MonthlySales: ChartOptions | any = {
    series: [{
        name: 'Growth',
        data: [0, 14, 5, 20, 14, 30]
    }],
    chart: {
        height: 120,
        type: 'line',
        stacked: true,
        offsetY: 40,
        toolbar: {
            show: false
        },
    },
    grid: {
        show: false,
        borderColor: '#000000',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },

    colors: [primary_color],
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    xaxis: {
        labels: {
            show: false
        },
    },
    yaxis: {
        min: -10,
        max: 40,
        labels: {
            show: false
        }
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 0,
            fillColor: primary_color,
            strokeColor: primary_color,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 1,
            fillColor: primary_color,
            strokeColor: primary_color,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 2,
            fillColor: primary_color,
            strokeColor: primary_color,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: primary_color,
            strokeColor: primary_color,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 4,
            fillColor: primary_color,
            strokeColor: primary_color,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: "#fff",
            strokeColor: primary_color,
            size: 5,
            shape: "circle"
        },
        ],
    },
}

export const weeklyUserActivity: ChartOptions | any = {
    chart: {
        height: 350,
        type: "radialBar"
    },
    series: [67],
    colors: [primary_color],
    plotOptions: {
        radialBar: {
            hollow: {
                size: "57%"
            },
            track: {
                background: 'rgba(43, 95, 96, 0.1)',
            },
            dataLabels: {
                showOn: "always",
                name: {
                    // offsetY: -10,
                    show: true,
                    color: "#848789",
                    fontSize: "20px",
                    fontWeight: "600",
                },
                value: {
                    color: "#1f2f3e",
                    fontSize: "30px",
                    fontWeight: "800",
                    show: true
                }
            }
        }
    },
    stroke: {
        lineCap: "round",
    },
    responsive: [{
        breakpoint: 360,
        options: {
            chart: {
                height: 250,
            }
        }
    }],
    labels: ["Progress"]
}

export const chartDashLine: ChartOptions | any = {
    series: [{
        name: 'TEAM A',
        type: 'area',
        data: [60, 80, 20, 90, 10, 30, 100, 10]
    }, {
        name: 'TEAM B',
        type: 'line',
        data: [100, 0, 100, 50, 30, 100, 10, 20]
    }],
    chart: {
        height: 325,
        type: 'line',
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 3,
            // left: 1,
            blur: 4,
            color: [primary_color, '#C06240'],
            opacity: 0.3
        },
    },
    stroke: {
        curve: ['straight', 'smooth'],
        width: [3, 2],
        dashArray: [0, 4]

    },
    grid: {
        show: true,
    },
    fill: {
        type: 'solid',
        opacity: [0, 1],
    },
    responsive: [
        {
            breakpoint: 991,
            options: {
                chart: {
                    height: 300
                }
            }
        },
        {
            breakpoint: 1500,
            options: {
                chart: {
                    height: 325
                }
            }
        },
        {
            breakpoint: 576,
            options: {
                series: [{
                    name: 'TEAM A',
                    type: 'area',
                    data: [ 50, 60, 180, 90, 340, 120, 250, 190, 100, 180, 380, 190, 220, 100, 90, 140]
                }, {
                    name: 'TEAM B',
                    type: 'line',
                    data: [70, 30, 100, 120, 220, 250, 100, 200, 300, 330, 270, 300, 200, 180, 220, 130]
                }],
            }
          }, 
    ],
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y: number) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            }
        }
    },
    annotations: {
        xaxis: [{
            x: 320,
            strokeDashArray: 3,
            borderWidth: 1,
            borderColor: '#072448',
        },
        ],
        points: [{
            x: 320,
            y: 330,
            marker: {
                size: 8,
                fillColor: primary_color,
                strokeColor: "#ffffff",
                strokeWidth: 4,
                radius: 5,
            },
            label: {
                borderWidth: 1,
                offsetY: 0,
                text: '32.10k',
                style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    fontFamily: 'Nunito Sans ,sans-serif',
                }
            }
        }],
    },
    legend: {
        show: false,
    },
    colors: [primary_color, secondary_color],
    xaxis: {
        labels: {
            style: {
                fontFamily: 'Nunito Sans ,sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
            axisBorder: {
                show: false
            },
        },
    },
    yaxis: {
        labels: {
            formatter: function (value: string) {
                return value + "k";
            },
            style: {
                fontFamily: 'Nunito Sans ,sans-serif',
                fontWeight: 500,
                colors: '#3D434A',
            },
        },
    },
}



