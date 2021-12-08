"use strict";
/*
Description: Contains global codes that will run when view.js is loaded
*/


// For data in the table

// Access the cells by Id
let tableTitle = document.getElementById("tableTitle");
let tableDueDate = document.getElementById("tableDueDate");
let tableWeightage = document.getElementById("tableWeightage");
let tablePercentageCompleted = document.getElementById("tablePercentageCompleted");


// Retrieve stored indexes from local storage 
let assignmentIndex = localStorage.getItem(ASSIGNMENT_INDEX_KEY);
let assignment = list.getAssignment(assignmentIndex);
// assignment = new Assignment("PornHub", 8, 12, 2021, 50);


tableTitle.innerHTML = assignment.title;
tableDueDate.innerHTML = assignment.dueDate;
tableWeightage.innerHTML = assignment.weightage;
tablePercentageCompleted.innerHTML = assignment.completedPercentage + "%";

// let notmeow = document.getElementById("notmeow");

// // For data of the graph

// // Access chart tag
// let myChart = document.getElementById("myChart").getContext('2d');

// // Prepare the values of the data
// let days = [1, 2, 3, 4, 5];
// let yourProgress = [100, 70, 65, 30, 0];
// let expectedProgress = [100, 75, 50, 25, 0];

// // Prepare how and what data is presented
// let data = {
//     labels: days,
//     datasets: [{
//         label: 'Your Progress',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: yourProgress,
//         stepped: true
//     },
//     {
//         label: 'Expected Progress',
//         backgroundColor: 'rgb(255, 0, 0)',
//         borderColor: 'rgb(255, 0, 0)',
//         data: expectedProgress,
//         stepped: true
//     }]
// };


// // Type of chart and the configurations
// // const config = {
// //     type: 'line',
// //     data: data,
// //     options: {}
// // };

// // // Create and attach the chart
// // const theChart = new Chart(myChart, config);
// // notmeow.innerHTML = "notmeow";

