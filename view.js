"use strict";
/*
Description: Contains global codes that will run when view.js is loaded
*/


// For data in the table


// Retrieve stored indexes from local storage 
let assignmentIndex = localStorage.getItem(ASSIGNMENT_INDEX_KEY);
let assignment = new Assignment();
assignment = list.getAssignment(assignmentIndex);;


    let assignmentDetailsTableRef = document.getElementById('assignmentDetailsTable');
    // print table to html
    // initial table code
    let output = `<table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Asssessment</th>
        <th class="mdl-data-table__cell--non-numeric">Due Date</th>
        <th class="mdl-data-table__cell--non-numeric">Weightage</th>
        <th class="mdl-data-table__cell--non-numeric">Completion Percentage (%)</th>
      </tr>
    </thead>
    <tbody>
    `;
  // printing each assignment 
    
  // test if it is an upcoming or past trip
          output += `<tr>
                <td class="mdl-data-table__cell--non-numeric">${assignment.title}</td>
                <td class="mdl-data-table__cell--non-numeric">${assignment.dueDate}</td>
                <td class="mdl-data-table__cell--non-numeric">${assignment.weightage}</td>
                <td class="mdl-data-table__cell--non-numeric">${assignment.completedPercentage}</td>
              </tr> `
      // close the table
      output += `</tbody>
      </table>`
      // return results
      assignmentDetailsTableRef.innerHTML = output;

