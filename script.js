// script.js

// Deployment History Chart
const deploymentCtx = document.getElementById('deployment-chart').getContext('2d');
new Chart(deploymentCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Deployments',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: '#32CD32',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// MTTR Chart
const mttrCtx = document.getElementById('mttr-chart').getContext('2d');
new Chart(mttrCtx, {
    type: 'bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'MTTR',
            data: [12, 19, 3, 5],
            backgroundColor: [
                '#38BDF8',
                '#38BDF8',
                '#38BDF8',
                '#38BDF8'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
