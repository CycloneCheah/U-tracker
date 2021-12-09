"use strict";
// Keys for local storage
const ASSIGNMENT_INDEX_KEY = "assignmentIndex";
const APP_DATA_KEY = "listAppData";
const RECENT_UPDATE_LIST_KEY = "recentUpdateData";

class Assignment
{   /* Base class for the 2 ways of splitting the assignment

    Instance variables
        title                   str
        dueDate                 Date
        weightage               int
        completedPercentage     int
    */

    // Constructor 
    constructor(title, dueDate, weightage) {
        // Assigning parameters to the corresponding attributes
        this._title = title;
        this._dueDate = dueDate;
        this._weightage = weightage;
        this._completedPercentage = 0;
        let d = new Date();
        this._progressData = [[d, this._completedPercentage]];
        this._submissionDate = null;
    }

    // Accessor
    get title(){
        return this._title;
    }

    get dueDate(){
        return this._dueDate;
    }

    get weightage(){
        return this._weightage;
    }

    get completedPercentage(){
        return this._completedPercentage;
    }

    get progressData(){
        return this._progressData;
    }

    get submissionDate(){
        return this._submissionDate;
    }

    // Mutators
    set dueDate(newDueDate) {
        this._dueDate = newDueDate;
    }

    set submissionDate(date) {
        this._submissionDate = date;
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
        this._dueDate = assignmentDataObject._dueDate;
        this._weightage = assignmentDataObject._weightage;
        this._completedPercentage = assignmentDataObject._completedPercentage;
        this._progressData = assignmentDataObject._progressData;
        this._submissionDate = assignmentDataObject._submissionDate;
    }

    addProgressData(date, percentage){
        console.log("yes");
        this._progressData.push([date, percentage]);
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
    addAssignment(title, dueDate, weightage) {
        let newAssignment = new Assignment(title, dueDate, weightage); // Create a new Student class instance 
        this._queue.push(newAssignment);
    }

    addCreatedAssignment(assignment){
        this._queue.push(assignment);
    }

    removeAssignment(index) {
        let temp = this._queue[index];
        this._queue.splice(index, 1); // Removing a student from the queue
        return temp;
    }

    getAssignment(index) {
        return this._queue[index]; // Accessing Student instance in the queue
    }

    setAssignment(index, assignment) {
        this._queue[index] = assignment;
    }

    fromData(listDataObject) {
        this._queue = []; // Set .queue into an empty array 
        let listData = listDataObject._queue; // sessionData ← _queue property of sessionDataObject
        
        for (let i = 0; i < listData.length; i++) {
            let assignment = new Assignment(); // Create a new Student class instance
            assignment.fromData(listData[i]); // Retrieving data for each student
            this._queue.push(assignment); // Adding students into the sub-queue
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

// Create or reassign

let recentUpdateList = new List(); // consultSession ← new Session instance 
if (checkData(RECENT_UPDATE_LIST_KEY)) // If data exsits in local storage
{
    recentUpdateList.fromData(retrieveData(RECENT_UPDATE_LIST_KEY));
}
else // If data does not exsit in local storage
{
    // Update local storage 
    updateLocalStorage(RECENT_UPDATE_LIST_KEY, recentUpdateList);
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

function backToView() {
    window.location.assign("view.html");
}

function directToGraph(){
    window.location.assign("graph.html");
} 

