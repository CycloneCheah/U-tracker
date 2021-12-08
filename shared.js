"use strict";
// Keys for local storage
const ASSIGNMENT_INDEX_KEY = "assignmentIndex";
const APP_DATA_KEY = "listAppData";


// // Class for date objects
// class Date
// {
//     /* Instance variables:
//     day     int
//     month   int
//     year    int */

//     // Constructor
//     constructor(day, month, year){
//         this._day = day;
//         this._month = month;
//         this._year = year;
//     }

//     // Getters
//     get day(){
//         return this._day;
//     }

//     get month(){
//         return this._month;
//     }

//     get year(){
//         return this._year;
//     }

//     // Methods
//     toString() {
//         // Returns date in string
//         return this._day.toString() + " / " + this._month.toString() + " / " + this._year.toString();
//     }
// }


class Assignment
{   /* Base class for the 2 ways of splitting the assignment

    Instance variables
        title                   str
        dueDate                 Date
        weightage               int
        completedPercentage     int
    */

    // Constructor 
    constructor(title, dueDay, dueMonth, dueYear, weightage) {
        // Assigning parameters to the corresponding attributes
        this._title = title;
        this._dueDate = new Date(dueDay, dueMonth, dueYear);
        this._weightage = weightage;
        this._completedPercentage = 0;
    }

    // Accessor
    get title(){
        return this._title;
    }

    get dueDate(){
        return this._dueDate.toLocaleString();
    }

    get weightage(){
        return this._weightage;
    }

    get completedPercentage(){
        return this._completedPercentage;
    }

    // Method
    updateCompletetion(percentageDone){
        // Given the percentage completed by user, update the total completed percentage 
        if (percentageDone >= 0 && percentageDone + this._completedPercentage <= 100){
            this._completedPercentage += percentageDone;
        }
    }

    imcompletePercentage(){
        return 100 - this._completedPercentage;
    }

    fromData(assignmentDataObject) {
        // Assigning object properties of studentDataObject to the corresponding attributes
        this._title = assignmentDataObject._title;
        this._dueDate.toLocaleString() = assignmentDataObject._dueDate.toLocaleString();
        this._weightage = assignmentDataObject._weightage;
        this._completedPercentage = assignmentDataObject._completedPercentage;
    }
}


class List 
{
    // Constructor
    constructor() {
        this._queue = [];
    }

    // Accessor
    get queue(){
        return this._queue;
    }
    // Methods
    addAssignment(title, dueDay, dueMonth, dueYear, weightage) {
        let newStudent = new Student(title, dueDay, dueMonth, dueYear, weightage); // Create a new Student class instance 
        this._queue.push(newStudent);
    }

    removeAssignment(index) {
        this._queue.splice(index, 1); // Removing a student from the queue
    }

    getAssignment(index) {
        return this._queue[index]; // Accessing Student instance in the queue
    }

    fromData(sessionDataObject) {
        this._queue = []; // Set .queue into an empty array 
        let sessionData = sessionDataObject._queue; // sessionData ← _queue property of sessionDataObject
        
        for (let i = 0; i < sessionData.length; i++) {
            let assignment = new Assignment(); // Create a new Student class instance
            assignment.fromData(sessionData[i]); // Retrieving data for each student
            this._queue[i].push(student); // Adding students into the sub-queue
        }
    }
}


// let assignment1 = new Assignment("PornHub", 8, 12, 2021, 50);
// console.log(assignment1.title);
// console.log(assignment1.dueDate);
// console.log(assignment1.weightage);
// console.log("Completed Percentage");
// console.log(assignment1.completedPercentage);
// assignment1.updateCompletetion(60);
// console.log(assignment1.completedPercentage);
// assignment1.updateCompletetion(50);
// console.log(assignment1.completedPercentage);
// console.log("Incomplete Percentage");
// console.log(assignment1.imcompletePercentage());

function checkData(key) {
    if (localStorage.getItem(key) !== null) {
        return true; // If data exists in local storage at the provided key, return true
    }
    else {
        return false; // Else, return false
    }
}

function updateLocalStorage(key, data) {
    if (typeof (data) == 'object') {
        data = JSON.stringify(data); // Convert object typed data into string 
    }
    localStorage.setItem(key, data); // Update data into local storage
}

function retrieveData(key) {
    let item = localStorage.getItem(key);
    let data;
    // Using try{...}catch(error){...}finally{...} to retrieve data from local storage
    try {
        data = JSON.parse(item);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        return data;
    }
}

let list = new List(); // consultSession ← new Session instance 
if (checkData(APP_DATA_KEY)) // If data exsits in local storage
{
    list.fromData(retrieveData(APP_DATA_KEY));
}
else // If data does not exsit in local storage
{
    // Update local storage 
    updateLocalStorage(APP_DATA_KEY, list);
}

// direct to main page 
// params: N/A
function backToMain() {
    window.location.assign("index.html");
}

// direct to add.html 
// params: N/A
function directToAdd() {
    window.location.assign("add.html");
}

