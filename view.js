"use strict";
/*
Description: Contains global codes that will run when view.js is loaded
*/
// Create references for user input elements (fullName, studentId, problem)
let fNameRef = document.getElementById("fullName");
let studentIdRef = document.getElementById("studentId");
let problemRef = document.getElementById("problem");
// Retrieve stored indexes from local storage 
let studentIndex = localStorage.getItem(STUDENT_INDEX_KEY);
let queueIndex = localStorage.getItem(STUDENT_QUEUE_KEY);

let student = new Assignment(); // Create a new student instance

/* Assign information retrieved from local storage to the new student instance
using getStudent method */
student = consultSession.getStudent(studentIndex, queueIndex);

// Display HTML content according to the attributes of the Student Class Instance
fNameRef.innerText = `${student.fullName}`;
studentIdRef.innerText = `${student.studentId}`;
problemRef.innerText = `${student.problem}`;