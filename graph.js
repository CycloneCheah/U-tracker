// Get access to the assignment
let assignmentIndex = localStorage.getItem(ASSIGNMENT_INDEX_KEY);
let assignment = list.getAssignment(assignmentIndex);
console.log(typeof assignment);
let d = new Date(2021, 12, 12, 14, 58, 11, 0);
assignment = new Assignment("Hello", d, 50);

// Get data of the assignment
let title = assignment.title;

// Get tag and update
let titleId = document.getElementById("title");
titleId.innerText = title;

// Access chart tag
let myChart = document.getElementById("myChart").getContext('2d');

// Prepare the values of the data
let days = [];
let yourProgress = [];
let expectedProgress = [];

let progress = assignment.progressData;     // Get the progress data

let currentIndex = 0;
let previousIndex = 0;          // set up indexes

console.log(progress.length);
let currentDate = parseInt(progress[0][0].getDate());
let previousDate = currentDate - 1;     // declare date variables
let lastDay = parseInt(assignment.dueDate.getDate());
let duration = lastDay - currentDate + 1;

for (let i = 0; i < duration; i++){
    days.push(currentDate + i);
    expectedProgress.push(100 - i * 100 / duration);
}

while (currentIndex < progress.length){
    currentDate = parseInt(progress[currentIndex][0].getDate());
    if (previousDate == currentDate - 1){       // if previous date and current date is only 1 day apart
        days.push(currentDate);
        yourProgress.push(progress[currentIndex][1]);
        previousIndex = currentIndex;
    }
    else{ // if they are not one day apart, fill in the days in between with the previous progress
        previousDate++;
        yourProgress.push(progress[previousIndex][1]);
    }
    currentIndex++;
}

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
    options: {}
};

// Create and attach the chart
const theChart = new Chart(myChart, config);