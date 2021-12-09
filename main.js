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
    let completed = list.removeAssignment(index); // Using removeAssignment method to remove assignment from completed list
    
    // set the completion date
    let date = new Date();
    completed._submissionDate = date;

    // Upload to recent update list
    recentUpdateList.addCreatedAssignment(completed); 

    // Update local storage
    updateLocalStorage(APP_DATA_KEY, list); // Update local Storage with the latest data
    updateLocalStorage(RECENT_UPDATE_LIST_KEY, recentUpdateList);

    // Update display
    displayList2(list._queue); // Call Task 10 function
    displayList4(recentUpdateList._queue);
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
  // Only dates are allowed for this, month is not considered yet
    var arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(new Date(data[i].dueDate.substring(0, 10)).getDate());
    }
    var anotherarr = [];
    for (let i = 0; i < data.length; i++) {
      anotherarr.push(data[i].title);
    }
    function insertionSort(arr, anotherarr){
      for(let i = 1; i < arr.length; i++){
          var mark = arr[i];
          var mark1 = anotherarr[i];
          var j = i - 1;
          while (j >= 0 && arr[j] > mark){
              console.log("In", i, j);
              arr[j + 1] = arr[j];
              anotherarr[j+1] = anotherarr[j];
              j--;
          }
          anotherarr[j+1] = mark1;
          arr[j+1] = mark;
      }
      return arr;
    }
    arr = insertionSort(arr, anotherarr);
    let currentDate = new Date();
    currentDate = currentDate.getDate();
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i]) - parseInt(currentDate) + 1;
    }
    // average number of days @Step 4
    var average = Math.floor(Math.max(...arr)/arr.length);
    var same = checkSame(arr);
    if (average != 0 && same == false) {
    var residue = 0;
    for (let i=0; i < arr.length; i++) {
      if (arr[i] < average) {
        residue = average - arr[i];
      }
      else {
        if (average != 0) {
        arr[i] = average + residue;
        residue = 0;
      }
      }
    }
    } 
          // Step 5
          // if update, the algorithm will die
    // document.getElementById("arrr").innerHTML = arr[0]; - 0
    var mark = -1;
    if (average==0 || same == true) {
      var progress = [];
      for (let i = 0; i < arr.length; i++) {
        progress.push(0);
      }
      for (let days = 0; days < Math.max(...arr); days++) {
        for (let i = 0; i < arr.length; i++) {
          if (mark < i) { 
          output += `<tr>
          <td class="mdl-data-table__cell--non-numeric">${gettingDate(days)}<br>${anotherarr[i]}<br>Percentage to be done:${gettingPercentage(arr[i], progress[i])}</td>
        </tr> `
        progress[i] += 100/arr[i];
        if (progress[i] == 100) {
          mark += 1;
        }
      }
          }
        }
    }
    else {
      var days = 0;
    for (let i = 0; i < arr.length; i++) {
      var progress = 0;
      for (let j = 0; j < arr[i]; j++) { 
        output += `<tr>
        <td class="mdl-data-table__cell--non-numeric">${gettingDate(days)}<br>${anotherarr[i]}<br>Percentage to be done:${gettingPercentage(arr[i], progress)}</td>
      </tr> `
      progress += 100/arr[i];
      days += 1;
        }
      }
    }
        // close the table
          output += `</tbody>
          </table>`
          
    // var testing = 0;
    // for (let i = 0; i < data.length; i++) {
    //   // test if it is an upcoming or past trip
    //           output += `<tr>
    //                 <td class="mdl-data-table__cell--non-numeric">${gettingDate(i)}<br>${data[i].title}<br>Percentage to be done:${gettingPercentage(i)}</td>
    //               </tr> `
    //               testing += 1;
    //         }
    //       // close the table
    //       output += `</tbody>
    //       </table>`
    // var testing = 0;
    // for (let i = 0; i < data.length; i++) {
    //   for (let j = 0; j < arr[i]; j++) {
    //   // test if it is an upcoming or past trip
    //           output += `<tr>
    //                 <td class="mdl-data-table__cell--non-numeric">${gettingDate(i)}<br>${data[i].title}<br>Percentage to be done:${gettingPercentage(i)}</td>
    //               </tr> `
    //               testing += 1;
    //         }
    //       }
    //       // close the table
    //       output += `</tbody>
    //       </table>`

    function checkSame(arr) {
      for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] == arr[i+1]) {
          return true;
        }
      }
      return false;
    }
    function gettingPercentage(number, progress) {
      return parseInt(progress) + "%" + "~>" + parseInt(progress + 100/number) + "%";
    }
    function gettingDate(number) {
      var date = new Date();
      var res = parseInt(date.getDate())+number + "-" + parseInt(date.getMonth()+1) + "-" + parseInt(date.getFullYear());
      return res; 
    }
   // return results
    listTableRef3.innerHTML = output;
  }
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
    // <br>Weightage: ${data[i].weightage}
    if (data[i].submissionDate != null){
      output += `<tr>
                <td class="mdl-data-table__cell--non-numeric">${data[i].title}<br>Date Submited: ${data[i].submissionDate.substring(0, 10)}</td>
              </tr> `;
    }
  }
  // close the table
  output += `</tbody>
      </table>`
  // return results
  listTableRef4.innerHTML = output;
}
// code to run function
displayList4(recentUpdateList._queue);

 
