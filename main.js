"use strict";
function view(index) {
    // Storing data of index using key ASSIGNMENT_INDEX_KEY in local storage
    localStorage.setItem(ASSIGNMENT_INDEX_KEY,index);
    // Direct user to view.html page
    window.location.assign("view.html");
  }

// //   function markDone(index, queueIndex) {
// //     let r = confirm("Mark this student as 'done'?"); // r ← confirm method() to confirm 'mark' action with user 
// //     if (r == true) {
// //       consultSession.removeStudent(index, queueIndex); // Using removeStudent method to remove student from queue
// //       updateLocalStorage(APP_DATA_KEY, consultSession); // Update local Storage with the latest data
// //       displayCurrentQueue(consultSession._queue); // Call Task 10 function
// //     }
// //     else {
// //       return 0;
// //     }
// //   }
// function displayCurrentList(data) {
//     let listContentRef = document.getElementById("listContent");
//     listContentRef.innerHTML = "";
//     let output = "";
  
//     for (let i = 0; i < data.length; i++) {
//       output += `<ul class=\"mdl-list\">\n<h4>Queue ${i + 1} </h4>\n`;
//         let title = data[i]._title;
//         // Insert dynamic values for the onclick attributes for view 
//         output += `<li class="mdl-list__item mdl-list__item--three-line">\n
//         <span class="mdl-list__item-primary-content">\n
//             <i class="material-icons mdl-list__item-avatar">assignment</i>\n
//             <span>${title}</span>\n
//         </span>\n
//         <span class="mdl-list__item-secondary-content">\n
//             <a class="mdl-list__item-secondary-action" onclick="view(${i})"><i\n
//                     class="material-icons">info</i></a>\n
//         </span>\n
//       </li>\n`;
//       output += "</ul>";
//     }
//     listContentRef.innerHTML = output;
//   }
  
//   displayCurrentList(list._queue); 


//   function displayCompletedList(data) {

//     // Check if user is logged in
//     let completedListTableRef = document.getElementById('completedListTable');
//     // print table to html
//       let trips = thisUser.tripList.trips;
//        // date variables
//       let currentDate = new Date();
//       let currentYear = currentDate.getFullYear();
//       let currentMonth = currentDate.getMonth() + 1;
//       let currentDay = currentDate.getDate();
//       let currentDateString = `${currentYear}-${currentMonth}-${currentDay}`
//   // initial table code
//       let output = `<table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
//     <thead>
//       <tr>
//         <th class="mdl-data-table__cell--non-numeric">Completed List</th>
//       </tr>
//     </thead>
//     <tbody>
//     `;
//   // printing each trip
//     for (let i = 0; i < data.length; i++) {
//         let assignmentDate = data[i].date;
//   // test if it is an upcoming or past trip
//         if (assignmentDate < currentDateString) {
  
//           console.log(currentDate);
  
//           output += `<tr>
//                 <td class="mdl-data-table__cell--non-numeric">${trips[i].country}</td>
//                 <td>${data[i].title}</td>
//                 <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick = "viewTrip(${i})">View on map</button></td>
//                 <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick = "removeTrip(${i})">Delete trip</button></td>
//               </tr>
//               `
//         }
//       }
//       // close the table
//       output += `</tbody>
//       </table>`
//       // return results
//       completedListTableRef.innerHTML = output;
//     }
  
//   // code to run function
//   displayCompletedList(list._queue);

  function displayList(data) {

    let listTableRef = document.getElementById('listTable');
    // print table to html
    // initial table code
    let output = `<table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">View Details</th>
        <th class="mdl-data-table__cell--non-numeric">Assessment List</th>
        <th class="mdl-data-table__cell--non-numeric">Completed List</th>
        <th class="mdl-data-table__cell--non-numeric">Recommendation List</th>
        <th class="mdl-data-table__cell--non-numeric">Recent Updates</th>
        <th class="mdl-data-table__cell--non-numeric">Reminders</th>
      </tr>
    </thead>
    <tbody>
    `;
  // printing each assignment 
    for (let i = 0; i < data.length; i++) {
  // test if it is an upcoming or past trip
          output += `<tr>
                <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick = "view(${i})">View</button></td>
                <td class="mdl-data-table__cell--non-numeric">${data[i].title}<br>Due Date: ${data[i].dueDate.substring(0,10)}</td>
              </tr> `
        }
      // close the table
      output += `</tbody>
      </table>`
      // return results
      listTableRef.innerHTML = output;
    }
  // code to run function
  displayList(list._queue);

  function recommendedlist() {
    let rList = document.getElementById("recommended");

    // access current date and deadline of assignment, find how long is it and put in an array according to position of the assignments
    // compare to weightage and split accordingly
    // Algorithm of splitting:
    // 

  }