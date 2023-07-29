//earning chart data
export const Erningseries = [{
    data: [400, 900, 800, 1000, 700, 1200, 300, 400, 300, 600, 800, 400, 200, 500, 400]
}]
export const ErningsOption = {
    chart: {
        height: 200,
        offsetY: 20,
        offsetX: 0,
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '35%',
            horizontal: false,
            rangeBarGroupRows: false,
        }
    },
    colors: ["#f34451"],
    yaxis: {
        labels: {
            show: false,
            minWidth: 0,
            maxWidth: 160,
        },
    },
    grid: {
        show: false,
        padding: {
            left: -15,
            right: 0,
            bottom: 0,
            top: -20
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        labels: {
            show: false,
            minHeight: undefined,
            maxHeight: 0,
        },
        type: 'data',
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    }
}


// userchart data
export const userseries = [44, 55, 41, 17]

export const Useroptions = {
    labels: ['Total user', 'Recently user', 'Sellers', 'Buyers'],
    chart: {
        type: 'donut',
        width: 320,
    },
    dataLabels: {
        enabled: false
    },
    colors: ["rgba(100, 117, 137, 0.1)", "#f35d43", "#89c826", "#f35d43"],
    plotOptions: {
        pie: {
            expandOnClick: false
        }
    },
    responsive: [{
        breakpoint: 1730,
        options: {
            chart: {
                width: 280
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 1200,
        options: {
            chart: {
                width: 300
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 768,
        options: {
            chart: {
                width: 380
            },
            legend: {
                position: 'right',
                horizontalAlign: 'right',
            }
        }
    },
    {
        breakpoint: 480,
        options: {
            chart: {
                width: 340
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 406,
        options: {
            chart: {
                width: 250
            },
            legend: {
                horizontalAlign: 'center',
            }
        }
    }]
};

export const Aboutdata = {
    email: 'brockle@gmail.com',
    mobile: '+ 61 1545812570',
    gender: 'Male',
    dob: 'Dec, 10 1990'}

export const Projectimg = [
    {
        id: 1,
        img: '/assets/images/avatar/6.jpg'
    },
    {
        id: 2,
        img: '/assets/images/avatar/5.jpg'
    },
    {
        id: 3,
        img: '/assets/images/avatar/9.jpg'
    },
    {
        id: 4,
        img: '/assets/images/avatar/7.jpg'
    },
    {
        id: 5,
        img: '/assets/images/avatar/9.jpg'
    }
]

export const Monthlydata = [
    {
        id: 1,
        time: 'Oct 18',
        class: 'pay'
    },
    {
        id: 2,
        time: 'Sep 25',
    },
    {
        id: 3,
        time: 'Aug 10',
    },
]

export const Friendsdata = [
    {
        id: 1,
        img: '/assets/images/avatar/9.jpg',
        name: 'Bob'
    },
    {
        id: 2,
        img: '/assets/images/avatar/8.jpg',
        name: 'Greta'
    },
    {
        id: 3,
        img: '/assets/images/avatar/5.jpg',
        name: 'Mary'
    },
    {
        id: 4,
        img: '/assets/images/avatar/6.jpg',
        name: 'Paige'
    },
    {
        id: 5,
        img: '/assets/images/avatar/7.jpg',
        name: 'Jack'
    },
    {
        id: 6,
        img: '/assets/images/avatar/1.jpg',
        name: 'Vella'
    }
]

export const properylistdata = [
    {
        id: 1,
        img: '/assets/images/property/4.jpg',
        name: 'Orchard House',
        country: 'Brazil',
        rent: '$400',
        deposit: '$5800',
        date: 'Jan, 18 2022'
    },
    {
        id: 2,
        img: '/assets/images/property/2.jpg',
        name: 'Neverland',
        country: 'France',
        rent: '$850',
        deposit: '$8700',
        date: 'Mar, 25 2022'
    },
    {
        id: 3,
        img: '/assets/images/property/3.jpg',
        name: 'Sea Breezes',
        country: 'USA',
        rent: '$380',
        deposit: '$5880',
        date: 'Jan, 05 2022'
    },
]

export const FollowingData = [
    {
        id: 1,
        img: '/assets/images/avatar/2.jpg',
        name: 'Bob Frapples',
        email: 'bobf@gmail.com',
        status: 'Online',
        class: 'online'
    },
    {
        id: 2,
        img: '/assets/images/avatar/3.jpg',
        name: 'Greta Life',
        email: 'gretali@gmail.com',
        status: 'Busy',
        class: 'busy'
    },
    {
        id: 3,
        img: '/assets/images/avatar/4.jpg',
        name: 'Zack Lee',
        email: 'zack@gmail.com',
        status: 'Away',
        class: 'away'
    },
    // {
    //     id: 4,
    //     img: '/assets/images/avatar/5.jpg',
    //     name: 'Zack Lee',
    //     email: 'zack@gmail.com',
    //     status: 'Busy',
    //     class: 'busy'
    // },
]