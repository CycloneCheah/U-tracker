// Access chart tag
let myChart = document.getElementById("myChart").getContext('2d');

// Prepare the values of the data
let days = [1, 2, 3, 4, 5];
let yourProgress = [100, 70, 65, 30, 0];
let expectedProgress = [100, 75, 50, 25, 0];

// Prepare how and what data is presented
let data = {
    labels: days,
    datasets: [{
        label: 'Your Progress',
        backgroundColor: 'rgb(252, 136, 21)',
        borderColor: 'rgb(252, 136, 21)',
        data: yourProgress,
        stepped: true
    },
    {
        label: 'Expected Progress',
        backgroundColor: 'rgb(27, 119, 64)',
        borderColor: 'rgb(27, 119, 64)',
        data: expectedProgress,
        stepped: true
    }]
};


// Type of chart and the configurations
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                display: true,
                axis: 'y',
                title: {
                    display: true,
                    text: 'Task'
                }
            },
            x: {
                display: true,
                axis: 'y',
                title: {
                    display: true,
                    text: 'Date'
                }
            }
        }     
    }
};

// Create and attach the chart
const theChart = new Chart(myChart, config);
theChart.options.scales['y'].title = "Meow";