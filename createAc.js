"use strict"
// Function is used to create students' account
// Params: NA
function createNow() {
    let emailRef = document.getElementById("email");
    let emailInput = emailRef.value;
    let passwordRef = document.getElementById("password");
    let passwordInput = passwordRef.value;
    let confirmpasswordRef = document.getElementById("confirmpassword");
    let confirmpasswordInput = confirmpasswordRef.value;
    
    for (let i = 0; i < userData.users.length; i++) {
        if (userData.users[i].loggedIn == true) {
            alert("Please log out first.");
            return;
        }
    }
       
    if (typeof (Storage) !== "undefined") {
        if (emailInput == "" || passwordInput == "" || confirmpasswordInput == "") {
            alert("Please enter your email and password.");

        } else if (validateEmail(emailInput) == false) {
            alert("Email address is invalid!");

        } else if (passwordInput !== confirmpasswordInput) {
            alert("Please enter the same password.");

        } else if (valideteExistEmail(emailInput) == false) {
            alert("Email has been registered!");

        } else {
            userData.addUser(emailInput, passwordInput);
            let index = findLoginUser(emailInput);

            userData.users[index].loggedIn = true;
            updateUserLocalStorage(userData);
            // updated the new user info to the local storage
            alert("Your account has been created successfully!");
            window.location = "index.html";
            // direct user to main page
        }
    }
}

// Function is used to restrict the email to be created with the correct format. 
// Params: inputText- fetch text from the email text box. 
// return boolean

function validateEmail(inputText) {
    let format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(format)) {
        return true;
        //the format is correct
    } else {
        return false;
        //the format is incorrect
    }
}

// Function is used to check if the email has been registered, one email can only be used to register once.
// Params: inputMail-fetch email from the email text box 
// Return: boolean

function valideteExistEmail(inputMail) {
    let data = userData.users;

    for (let i = 0; i < userData.users.length; i++) {
        if (inputMail == data[i]["email"]) {
            return false;
            //user entered an exist email
        }
    }
    return true;
    //user entered an valid email
}

// Function is used to locate designate user 
// params: emailInput
// return the user's index

function findLoginUser(emailInput) {
    for (let i = 0; i < userData.users.length; i++) {
        if (emailInput == userData.users[i].email) {
            return i;
        }
    }
}

