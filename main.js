"use strict";
function view(index) {
    // Storing data of index using key ASSIGNMENT_INDEX_KEY in local storage
    localStorage.setItem(ASSIGNMENT_INDEX_KEY,index);
    // Direct user to view.html page
    window.location.assign("view.html");
  }

//   function markDone(index, queueIndex) {
//     let r = confirm("Mark this student as 'done'?"); // r ← confirm method() to confirm 'mark' action with user 
//     if (r == true) {
//       consultSession.removeStudent(index, queueIndex); // Using removeStudent method to remove student from queue
//       updateLocalStorage(APP_DATA_KEY, consultSession); // Update local Storage with the latest data
//       displayCurrentQueue(consultSession._queue); // Call Task 10 function
//     }
//     else {
//       return 0;
//     }
//   }
function displayCurrentList(data) {
    let listContentRef = document.getElementById("listContent");
    listContentRef.innerHTML = "";
    let output = "";
  
    for (let i = 0; i < data.length; i++) {
      output += `<ul class=\"mdl-list\">\n<h4>Queue ${i + 1} </h4>\n`;
        let title = data[i]._title;
        // Insert dynamic values for the onclick attributes for view 
        output += `<li class="mdl-list__item mdl-list__item--three-line">\n
        <span class="mdl-list__item-primary-content">\n
            <i class="material-icons mdl-list__item-avatar">assignment</i>\n
            <span>${title}</span>\n
        </span>\n
        <span class="mdl-list__item-secondary-content">\n
            <a class="mdl-list__item-secondary-action" onclick="view(${i})"><i\n
                    class="material-icons">info</i></a>\n
        </span>\n
      </li>\n`;
      output += "</ul>";
    }
    listContentRef.innerHTML = output;
  }
  
  displayCurrentList(list._queue); 
  