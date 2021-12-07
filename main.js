"use strict";
function view(index) {
    // Storing data of index using keys STUDENT_INDEX_KEY and STUDENT_QUEUE_KEY in local storage
    localStorage.setItem(STUDENT_INDEX_KEY, index);
    // Direct user to view.html page
    window.location.assign("view.html");
  }
  // Task 9 
  function markDone(index, queueIndex) {
    let r = confirm("Mark this student as 'done'?"); // r ← confirm method() to confirm 'mark' action with user 
    if (r == true) {
      consultSession.removeStudent(index, queueIndex); // Using removeStudent method to remove student from queue
      updateLocalStorage(APP_DATA_KEY, consultSession); // Update local Storage with the latest data
      displayCurrentQueue(consultSession._queue); // Call Task 10 function
    }
    else {
      return 0;
    }
  }
  // Task 10
  function displayCurrentQueue(data) {
    let queueContentRef = document.getElementById("queueContent"); // Create reference for queue content
    queueContentRef.innerHTML = ""; // Set queue content to be empty before it shows the current queue status
    let output = "";
  
    for (let i = 0; i < data.length; i++) {
      output += `<ul class=\"mdl-list\">\n<h4>Queue ${i + 1} </h4>\n`;
      for (let k = 0; k < data[i].length; k++) {
        let fullName = data[i][k]._fullName;
        // Insert dynamic values for the onclick attributes for view and markDone
        output += `<li class="mdl-list__item mdl-list__item--three-line">\n
        <span class="mdl-list__item-primary-content">\n
            <i class="material-icons mdl-list__item-avatar">person</i>\n
            <span>${fullName}</span>\n
        </span>\n
        <span class="mdl-list__item-secondary-content">\n
            <a class="mdl-list__item-secondary-action" onclick="view(${k},${i})"><i\n
                    class="material-icons">info</i></a>\n
        </span>\n
        <span class="mdl-list__item-secondary-content">\n
            <a class="mdl-list__item-secondary-action" onclick="markDone(${k},${i})"><i\n
                    class="material-icons">done</i></a>\n
        </span>\n
      </li>\n`;
      }
      output += "</ul>";
    }
    queueContentRef.innerHTML = output;
  }
  
  displayCurrentQueue(consultSession._queue); // Call Task 10 function
  