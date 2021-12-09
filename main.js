"use strict";
function view(index) {
  // Storing data of index using key ASSIGNMENT_INDEX_KEY in local storage
  localStorage.setItem(ASSIGNMENT_INDEX_KEY, index);
  // Direct user to view.html page
  window.location.assign("view.html");
}

function markDone(index) {
  let r = confirm("Mark as done?"); // r ← confirm method() to confirm 'mark' action with user 
  if (r == true) {
    list.removeAssignment(index); // Using removeAssignment method to remove assignment from completed list
    updateLocalStorage(APP_DATA_KEY, list); // Update local Storage with the latest data
    displayList2(list._queue); // Call Task 10 function
  }
  else {
    return 0;
  }
}


function displayList(data) {

  let listTableRef = document.getElementById('listTable');
  // print table to html
  // initial table code
  let output = `<table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Assessment List</th>
        <th class="mdl-data-table__cell--non-numeric">View Details</th>
      </tr>
    </thead>
    <tbody>
    `;
  // printing each assignment 
  for (let i = 0; i < data.length; i++) {
    if (data[i].completedPercentage >= 0 && data[i].completedPercentage < 100) {
      output += `<tr>
                <td class="mdl-data-table__cell--non-numeric">${data[i].title}<br>Due Date: ${data[i].dueDate.substring(0, 10)}</td>
                <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick = "view(${i})">View</button></td>
              </tr> `
    }
  }
  // close the table
  output += `</tbody>
      </table>`
  // return results
  listTableRef.innerHTML = output;
}
// code to run function
displayList(list._queue);

function displayList2(data) {

  let listTableRef2 = document.getElementById('listTable2');
  // print table to html
  // initial table code
  let output = `<table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Completed List</th>
        <th class="mdl-data-table__cell--non-numeric">Status</th>
      </tr>
    </thead>
    <tbody>
    `;
  // printing each assignment 
  for (let i = 0; i < data.length; i++) {
    if (data[i].completedPercentage == 100) {
      output += `<tr>
          <td class="mdl-data-table__cell--non-numeric">${data[i].title}<br>Due Date: ${data[i].dueDate.substring(0, 10)}</td>
          <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick = "markDone(${i})">DONE</button></td>
              </tr> `
    }
  }
  // close the table
  output += `</tbody>
      </table>`
  // return results
  listTableRef2.innerHTML = output;
}
// code to run function
displayList2(list._queue);

function displayList3(data) {

  let listTableRef3 = document.getElementById('listTable3');
  // print table to html
  // initial table code
  let output = `<table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Recommendation List</th>
      </tr>
    </thead>
    <tbody>
    `;
  // printing each assignment 
  for (let i = 0; i < data.length; i++) {
    // test if it is an upcoming or past trip
    output += `<tr>
                <td class="mdl-data-table__cell--non-numeric">${data[i].title}<br> </td>
              </tr> `
  }
  // close the table
  output += `</tbody>
      </table>`
  // return results
  listTableRef3.innerHTML = output;
}
// code to run function
displayList3(list._queue);

function displayList4(data) {

  let listTableRef4 = document.getElementById('listTable4');
  // print table to html
  // initial table code
  let output = `<table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Recent Updates</th>
      </tr>
    </thead>
    <tbody>
    `;
  // printing each assignment 
  for (let i = 0; i < data.length; i++) {
    // test if it is an upcoming or past trip
    output += `<tr>
                <td class="mdl-data-table__cell--non-numeric">${data[i].title}<br> </td>
              </tr> `
  }
  // close the table
  output += `</tbody>
      </table>`
  // return results
  listTableRef4.innerHTML = output;
}
// code to run function
displayList4(list._queue);

function recommendedlist() {
  let rList = document.getElementById("recommended");

  // access current date and deadline of assignment, find how long is it and put in an array according to position of the assignments
  // compare to weightage and split accordingly
  // Algorithm of splitting:
  // 

}