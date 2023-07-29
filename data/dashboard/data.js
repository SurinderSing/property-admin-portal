
// Sales Chartdata
export const chartseries = [{
    data: [5, 12, 15, 18, 16, 20, 16, 13, 10, 6]
}]
export const chartoptions = {
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
        }
    },
    colors: ['#f34451'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%',
            distributed: true,
            borderRadius: 6,
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'last'
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct'],
        labels: {
            style: {
                fontSize: '12px',
                fontFamily: 'Roboto, sans-serif',
            }
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    responsive: [{
        breakpoint: 576,
        options: {
            chart: {
                height: 200,
            }
        },
    }],
};

// Timeline Chart
export const Timeseries = [
    {
        data: [
            {
                x: 'Mon',
                y: [0, 10]
            },
            {
                x: 'Tue',
                y: [18, 10]
            },
            {
                x: 'Wed',
                y: [20, 15]
            },
            {
                x: 'Thu',
                y: [20, 30]
            }
        ]
    },
    {
        data: [
            {
                x: 'Mon',
                y: [12, 20]
            },
            {
                x: 'Tue',
                y: [25, 20]
            },
            {
                x: 'Wed',
                y: [10, 14]
            },
            {
                x: 'Thu',
                y: [5, 10]
            }
        ]
    }
]

export const Timeoptions = {
    chart: {
        height: 365,
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '40%',
            rangeBarGroupRows: false,
        }
    },
    colors: ["#f34451", "#89c826"],
    xaxis: {
        type: 'data',
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    }
};

// sold chartdata
export const soldseries = [76, 67, 90]
export const SoldChart = {
    chart: {
        height: 420,
        offsetY: 0,
        sparkline: {
            enabled: true
        },
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            startAngle: -100,
            endAngle: 100,
            hollow: {
                margin: 5,
                size: '60%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    fontSize: "30px",
                    show: false
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                        return 75
                    }
                }
            }
        }
    },
    grid: {
        padding: {
            top: -10,
            bottom: 20
        }
    },
    colors: ['#f34451', '#89c826', '#ffcc33'],
    labels: ['Vimeo', 'Messenger', 'LinkedIn'],
    responsive: [
        {
            breakpoint: 400,
            options: {
                chart: {
                    height: 340,
                }
            }
        }, {
            breakpoint: 340,
            options: {
                chart: {
                    height: 300,
                }
            }
        }
    ]
};

export const Assignessdata = [
    {
        id: 1,
        img: '/assets/images/avatar/1.jpg',
        name: 'Bob Frapples',
        role: 'Pumbing',
        open: '10',
        escaleted: '3',
        complete: '126'

    },
    {
        id: 2,
        img: '/assets/images/avatar/3.jpg',
        name: 'Greta Life',
        role: 'Pest control',
        open: '8',
        escaleted: '20',
        complete: '154'

    },
    {
        id: 3,
        img: '/assets/images/avatar/5.jpg',
        name: 'Zack Lee',
        role: 'others',
        open: '5',
        escaleted: '18',
        complete: '79'

    },
    {
        id: 4,
        img: '/assets/images/avatar/6.jpg',
        name: 'Paige Turner',
        role: 'Pest control',
        open: '15',
        escaleted: '7',
        complete: '145'

    },
    {
        id: 5,
        img: '/assets/images/avatar/4.jpg',
        name: 'Mary Goround',
        role: 'Pumbing',
        open: '10',
        escaleted: '3',
        complete: '126'

    }
]

export const Propertydata = [
    {
        id: 1,
        img: '/assets/images/property/14.jpg',
        name: 'Orchard House',
        bad: 3,
        bath: 2,
        sofa: 1,
        status: 'Rented',
        class: "danger"
    },
    {
        id: 2,
        img: '/assets/images/7.jpg',
        name: 'Neverland',
        bad: 4,
        bath: 4,
        sofa: 2,
        status: 'Rented',
        class: "danger"
    },
    {
        id: 3,
        img: '/assets/images/8.jpg',
        name: 'Sea Breezes',
        bad: 3,
        bath: 2,
        sofa: 0,
        status: 'Listed',
        class: "success"
    }
]

export const Managementdata = [
    {
        id: 1,
        img: '/assets/images/svg/icon/pdf.png',
        report: 'Report 8/10/22 - 15/10/22',
        date: 'Created 16/10/22'
    },
    {
        id: 2,
        img: '/assets/images/svg/icon/microsoft.png',
        report: 'Report 20/10/22 - 25/10/22',
        date: 'Created 24/10/22'
    },
    {
        id: 3,
        img: '/assets/images/svg/icon/excel.png',
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
        img: '/assets/images/svg/icon/excel.png',
        report: 'Report 20/11/22 - 25/11/22',
        date: 'Created 28/11/22'
    }
]