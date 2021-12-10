# U-tracker 
Instructions on how to navigate the web-based application
1. Open index.html, which is the main page. 
2. Add assignments to the assessment list by clicking the button on the navigation bar. 
3. You will be directed to add.html to add your assignment. 
4. Upon adding the assingment, you will redirected back to index.html and the assingment will be added to the assessment list. 
5. Upon clicking the view button on the right of the added assignment, you will redirected to view.html to view the details of the assignment.
6. You will be able to update your progress on the assingment or be able to view the stepped burndown graph by clicking the button 'VIEW GRAPH'.
7. If the completion percentage reaches 100%, the assignment will be added to completed list as a reminder for you to submit the completed assignment.
8. Once you have submitted the completed assignment and have deemed it as done, you can click on the 'DONE' button and the done assingment will be removed from the completed list and the table for recent updates will track the date you mark it as done. 
9. The navigation can direct you to index.html or mainGraph.html. mainGraph.html will display a stepped burndown graph on the overall progress on all assessments.  

JS files and functions 
1. shared.js 
Function: It contains all the classes e.g., the Assignment class and List class that will be used in the majority of the js files. It includes methods to check, retrieve and update the localStorage. It also includes functions which directs to designated pages upon clicking the button on the navigation bar. It is linked to every html file. 
2. main.js 
Function: It includes printing and updating of the tables on the main page i.e., index.html and functions which allows users to view details of on going assignments and remove assignments that are submitted. It is linked to index.html.
The function displatList1 is responsible for displaying the assessment list and view details.
The function displayList2 is responsible for displaying the completed list and status.
The function displayList3 is responsible for displaying the recommendation list. 
The function displayList4 is responsbile for displaying the recent updates. 
3. add.js
Function: It adds assignments with valid user inputs in all fields to the list. It is linked to add.html.
4. view.js
Function: It retrieves information from the localStorage and display it to the user. It allows the users to update their progress on the assignment and to view the stepped burndown graph.
5. graph.js
Function: It is responsbile for configuring the stepped burndown graph on the expected progess and the user's inputted progress for each assignment. It is linked to graph.html.
6. mainGraph.js 
Function: It is responsible for configuring the stepped burndown graph on the expected progess and the user's inputted progress for all the assignments.It is linked to 

HTML files and functions 
1. index.html - main page of the application and displays the tables for the assessment list, completed list, recommendation list and recent updates. 
2. add.html - page which allows users to add their assignments to the assessment list. 
3. view.html - page which displays the details of each assignemnt and allows users to update their update their progress on the assignment. 
4. graph.html - page which displays the stepped burndown graph on the expected progess and the user's inputted progress for each assignment.
5. mainGraph.html - page which displays the stepped burndown graph on the expected progess and the user's inputted progress for all the assignments. 
