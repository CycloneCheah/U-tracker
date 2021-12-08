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
assignment = new Assignment("PornHub", 8, 12, 2021, 50);


tableTitle.innerHTML = assignment.title;
tableDueDate.innerHTML = assignment.dueDate;
tableWeightage.innerHTML = assignment.weightage;
tablePercentageCompleted.innerHTML = assignment.completedPercentage + "%";
