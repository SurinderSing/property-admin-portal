//Revenue chart

export const RevenueSeries = [50, 30, 41];
export const RevenueOptions = {
    chart: {
        width: 470,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    dataLabels: {
        enabled: false,
        dropShadow: {
            blur: 3,
            opacity: 0.5
        },
    },
    labels: ["Channai", "Ahemdabad", "Banglore"],
    legend: {
        formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%"
        }
    },
    colors: ["rgba(243, 93, 67, 0.3)", "rgba(243, 93, 67, 0.5)", "#f35d43"],
    responsive: [{
        breakpoint: 1900,
        options: {
            chart: {
                width: 420
            },
        }
    },
    {
        breakpoint: 1776,
        options: {
            chart: {
                width: 380
            },
        }
    },
    {
        breakpoint: 1661,
        options: {
            chart: {
                width: 360
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 480,
        options: {
            chart: {
                width: 250
            },
            legend: {
                position: 'bottom'
            }
        }
    }]

}

// Income Chart 
export const Incomeseries = [{
    name: "Rent income",
    data: [20, 25, 20, 30, 20, 50, 30, 35, 25, 60, 0]
},
{
    name: "Sale income",
    data: [10, 20, 10, 15, 10, 20, 15, 10, 15, 20, 0]
}]
export const IncomeOptions = {
    chart: {
        height: 320,
        type: 'area',
        dropShadow: {
            enabled: true,
            top: 10,
            left: 0,
            blur: 3,
            color: '#720f1e',
            opacity: 0.15
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
    },
    markers: {
        strokeWidth: 4,
        strokeColors: "#ffffff",
        hover: {
            size: 9,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        lineCap: 'butt',
        width: 4,
    },
    legend: {
        show: false
    },
    colors: ["#ff5c41", "#89c826"],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.4,
            stops: [0, 90, 100]
        }
    },
    grid: {
        xaxis: {
            lines: {
                borderColor: 'transparent',
                show: false,
            }
        },
        yaxis: {
            lines: {
                borderColor: 'transparent',
                show: false,
            }

        },
        padding: {
            right: -112,
            bottom: 0,
            left: 15
        }
    },
    responsive: [{
        breakpoint: 1200,
        options: {
            grid: {
                padding: {
                    right: -95,
                }
            },
        },
    },
    {
        breakpoint: 992,
        options: {
            grid: {
                padding: {
                    right: -69,
                }
            },
        },
    }
    ],
    yaxis: {
        labels: {
            formatter: function (value) {
                return value + "K";
            }
        },
        axisBorder: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            show: false,
        },
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",],
        range: undefined,
        axisBorder: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            show: true,
            position: 'back',
            stroke: {
                color: '#ff5c41',
                width: 1,
                dashArray: 0,
            },
        },
    },
    tooltip: {
        formatter: undefined,
    },
};

export const managedata = [
    {
        id: 1,
        img: '/assets/images/svg/icon/pdf.png',
        report: 'Report 8/10/22 - 15/10/22',
        date: 'Created 16/10/22'
    },
    {
        id: 2,
        img: '/assets/images/svg/icon/pdf.png',
        report: 'Report 20/10/22 - 25/10/22',
        date: 'Created 24/10/22'
    },
    {
        id: 3,
        img: '/assets/images/svg/icon/pdf.png',
        report: 'Report 30/10/22 - 5/11/22',
        date: 'Created 1/11/22'
    },
    {
        id: 4,
        img: '/assets/images/svg/icon/pdf.png',
        report: 'Report 10/11/22 - 15/11/22',
        date: 'Created 17/11/22'
    },
    {
        id: 5,
        img: '/assets/images/svg/icon/pdf.png',
        report: 'Report 20/11/22 - 25/11/22',
        date: 'Created 28/11/22'
    }

]

export const propertySaledata = [
    {
        id: 1,
        img: '/assets/images/property/2.jpg',
        name: 'Orchard House',
        country: 'Brazil',
        date: '15/2/22',
        status: 'Paid',
    },
    {
        id: 2,
        img: '../assets/images/property/3.jpg',
        name: 'Neverland',
        country: 'London',
        date: '08/09/2022',
        status: 'Paid',
    },
    {
        id: 3,
        img: '/assets/images/property/4.jpg',
        name: 'Sea Breezes',
        country: 'France',
        date: '26/10/22',
        status: 'Paid',
    },
    {
        id: 4,
        img: '/assets/images/property/2.jpg',
        name: 'Orchard House',
        country: 'Brazil',
        date: '15/02/2022',
        status: 'Paid',
    }
]

export const TransactionData = [
    {
        id: 1,
        img: '/assets/images/property/2.jpg',
        name: 'Orchard House',
        country: 'Brazil',
        type: 'Sell',
        amount: '15,000',
        Price: '$125000.00',
        date: 'Jun 10,2022',
        status: 'Pending',
    },
    {
        id: 2,
        img: '/assets/images/property/5.jpg',
        name: 'Sea Breezes',
        country: 'France',
        type: 'Rent',
        amount: '8,000',
        Price: '$2580000.00',
        date: 'Aug 15,2022',
        status: 'Paid',
    },
    {
        id: 3,
        img: '/assets/images/property/4.jpg',
        name: 'Neverland',
        country: 'London',
        type: 'Rent',
        amount: '8,000',
        Price: '$1580000.00',
        date: 'Nov 28,2022',
        status: 'Paid',
    },
]