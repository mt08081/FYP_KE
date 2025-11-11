// === Chart.js Logic ===
// 1. Health Load Chart (Dual Axis)
const ctxHealth = document.getElementById('healthLoadChart');
new Chart(ctxHealth, {
    type: 'line',
    data: {
        labels: ['Day -7', 'Day -6', 'Day -5', 'Day -4', 'Day -3', 'Day -2', 'Today'],
        datasets: [
            {
                label: 'Health Score',
                data: [80, 75, 70, 55, 40, 30, 18],
                borderColor: 'rgb(220, 53, 69)',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                fill: true,
                tension: 0.2,
                yAxisID: 'y',
            },
            {
                label: 'Load (%)',
                data: [60, 65, 70, 80, 75, 88, 85],
                borderColor: 'rgb(13, 110, 253)',
                backgroundColor: 'rgba(13, 110, 253, 0.1)',
                tension: 0.2,
                yAxisID: 'y1',
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: { display: false } },
            y: {
                type: 'linear', display: true, position: 'left', beginAtZero: true, max: 100,
                title: { display: true, text: 'Health Score' }
            },
            y1: {
                type: 'linear', display: true, position: 'right', beginAtZero: true, max: 100,
                title: { display: true, text: 'Load (%)' },
                grid: { drawOnChartArea: false },
            }
        }
    }
});

// 2. Temperature Chart
const ctxTemp = document.getElementById('tempChart');
new Chart(ctxTemp, {
    type: 'line',
    data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 'Today 18:00'],
        datasets: [
            {
                label: 'Internal Temp (°C)',
                data: [80, 82, 85, 88, 90, 91, 92],
                borderColor: 'rgb(255, 193, 7)',
                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                fill: true,
                tension: 0.2
            },
            {
                label: 'Ambient Temp (°C)',
                data: [30, 31, 32, 34, 33, 32, 31],
                borderColor: 'rgb(108, 117, 125)',
                backgroundColor: 'rgba(108, 117, 125, 0.1)',
                tension: 0.2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: false, title: { display: true, text: 'Temperature (°C)' } }
        },
        plugins: { legend: { position: 'top', } }
    }
});
