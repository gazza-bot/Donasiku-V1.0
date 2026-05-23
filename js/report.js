window.onload = function () {
    // bar chart
    const barCtx = document
        .getElementById('barChart');

    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: [
                'Jun',
                'Jul',
                'Ags',
                'Sep',
                'Okt',
                'Nov',
                'Des',
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'Mei'
            ],

            datasets: [{
                data: [
                    120,
                    180,
                    150,
                    210,
                    220,
                    270,
                    230,
                    190,
                    200,
                    240,
                    260,
                    300
                ],

                backgroundColor: [
                    '#7cc596',
                    '#7cc596',
                    '#7cc596',
                    '#7cc596',
                    '#7cc596',
                    '#7cc596',
                    '#7cc596',
                    '#7cc596',
                    '#7cc596',
                    '#7cc596',
                    '#7cc596',
                    '#0d7c35'
                ],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // linechart
    const lineCtx = document.getElementById('lineChart');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: [
                'Jun',
                'Jul',
                'Ags',
                'Sep',
                'Okt',
                'Nov',
                'Des',
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'Mei'
            ],
            datasets: [{
                data: [
                    200,
                    400,
                    600,
                    700,
                    1200,
                    1400,
                    1800,
                    1750,
                    1650,
                    2000,
                    2300,
                    2450
                ],
                borderColor: '#0d7c35',
                backgroundColor: 'rgba(13,124,53,0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#0d7c35',
                pointRadius: 5
            }]
        },

        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },

            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

