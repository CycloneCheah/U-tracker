"use strict";

// Retrieve stored indexes from local storage 
let assignmentIndex = localStorage.getItem(ASSIGNMENT_INDEX_KEY);

var checkWeightage = function(weightage){
    // Check if given weightage is valid
    try{
        parseFloat(weightage);
        return weightage >= 0  && true;
    }
    catch{
        return false;
    }
}

var checkDate = function(date){
    // Check if date is valid
    return date != "" && parseInt(new Date(date).getHour()) > parseInt(new Date().getHour());
}

var addZero = function(num){
    // To make sure each number string is 2 char long
    // input is string of numerical char
    while (num.length < 2) {
        num = "0" + num;
    }
    return num;
}


var createFormatedDate = function(date){
    // To create date and time the following format based on Date object input
    //2021-12-09T17:52
    let output = date.getFullYear() + "-";
    output += addZero(date.getMonth()) + "-";
    output += "0" + addZero(date.getDate());
    output += "T" + addZero(date.getHours()) + ":";
    output += addZero(date.getMinutes());
    return output;
}

var addAssignment = function(){
    // Get input value
    let title = document.getElementById("assignmentName").value;
    let weightage = parseFloat(document.getElementById("weightage").value);
    let  dueDate = document.getElementById("Test_DatetimeLocal").value;

    // Get message Id
    let titleMsg = document.getElementById("assignmentName_msg");
    let weightageMsg = document.getElementById("weightage_msg");
    // let dueDateMsg = document.getElementById("dueDate_msg");

    if (checkWeightage(weightage) && title.length > 0){
        list.addAssignment(title, dueDate, weightage);
        updateLocalStorage(APP_DATA_KEY, list);
        alert("Your assessment has been added to the assessment list");
    }

    else {
        if (title.length <= 0) // Check if title input is blank
        {
            titleMsg.innerText = "Assessment title input is invalid"; // Display appropriate error message on HTML page
        }
        if (!checkWeightage(weightage)) // Check if weightage input is blank or studentId does not follow the right format
        {
            weightageMsg.innerText = "Weightage input is invalid"; // Display appropriate error message on HTML page
        }
        // To print error message when wrong date input
        // if(!checkDate(dueDate))
        // {
        //     dueDateMsg.innerText = "Please select a valid date";
        // }
        return; // End the execution of the function
    }
}


// // Restrict date
// let dateRef = document.getElementById("Test_DatetimeLocal");
// let now = new Date();
// dateRef.min = createFormatedDate(now);


