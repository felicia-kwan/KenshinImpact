let email = document.getElementById("emailTextField");
let username = document.getElementById("usernameTextField");
let password = document.getElementById("passwordTextField");
let comfirmPass = document.getElementById("comfirmPasswordTextField");
let agreementTerm = document.getElementById("agreementCheckBox");

function createAccount() {
    validateEmail(email.value);
    validateUsername(username.value);
    validatePassword(password.value);
    validateComfirmPassword(comfirmPass.value);
    validateAgreement(agreementTerm.checked);
    if (validateEmail(email.value) && validateUsername(username.value) && validatePassword(password.value) && validateComfirmPassword(comfirmPass.value) && validateAgreement(agreementTerm.checked)) {
        console.log("Create Account Succes");
        alert("Create Account Succes");
        window.location.href = "./Home.html";
    } else {
        console.log("Create Account fail");
        alert("Create Account fail. Please check the requirement");
    }
}

function validateEmail(emailValue) {
    if (emailValue.length == 0) {
        document.getElementById("emailError").innerHTML = "Please input the email";
        document.getElementById("emailError").style.color = "red";
        console.log("Email is empty");
        return false;
    } else if (emailValue.length < 5) {
        document.getElementById("emailError").innerHTML = "Email must be at least 5 character";
        document.getElementById("emailError").style.color = "red";
        console.log("Email less then 5 character");
        return false;
    } else if (emailValue[0] == "@" || emailValue[0] == "." || emailValue[0] == "_" || emailValue[0] == "-" || emailValue[0] == "/") {
        document.getElementById("emailError").innerHTML = "First character must not start with '@' '.' '_' '-' '/'";
        document.getElementById("emailError").style.color = "red";
        console.log("First character build in forbiden character");
        return false;
    } else if (emailValue.indexOf("@") == -1) {
        document.getElementById("emailError").innerHTML = "Email must include '@'";
        document.getElementById("emailError").style.color = "red";
        console.log("Email didn't has @");
        return false;
    } else if (emailValue[emailValue.indexOf("@") - 1] == "." || emailValue[emailValue.indexOf("@") + 1] == ".") {
        document.getElementById("emailError").innerHTML = "There can't be '.' before  and after '@'";
        document.getElementById("emailError").style.color = "red";
        console.log("There are '.' before or after the '@' symbol");
        return false;
    } else {
        document.getElementById("emailError").innerHTML = "";
        return true;
    }
}

function validateUsername(usernameValue) {
    if (usernameValue.length == 0) {
        document.getElementById("usernameError").innerHTML = "Please insert the username";
        document.getElementById("usernameError").style.color = "red";
        console.log("Username empty not valid");
        return false;
    } else if (usernameValue.length < 5) {
        document.getElementById("usernameError").innerHTML = "Username must be at least 5 character length";
        document.getElementById("usernameError").style.color = "red";
        console.log("Username less then 5 character");
        return false;
    }
    document.getElementById("usernameError").innerHTML = "";
    return true;
}

function validatePassword(passwordValue) {
    if (passwordValue.length == 0) {
        document.getElementById("passwordError").innerHTML = "Please insert the password";
        document.getElementById("passwordError").style.color = "red";
        console.log("Empty Password");
        return false;
    } else if (passwordValue.length < 5) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 5 character length";
        document.getElementById("passwordError").style.color = "red";
        console.log("Password less then 5 character");
        return false;
    }
    document.getElementById("passwordError").innerHTML = "";
    return true;
}

function validateComfirmPassword(comfirmPasswordValue) {
    if (comfirmPasswordValue.length == 0) {
        document.getElementById("comfirmPasswordError").innerHTML = "Please insert the comfirmation password";
        document.getElementById("comfirmPasswordError").style.color = "red";
        console.log("Empty comfirmPassword");
        return false;
    } else if (comfirmPasswordValue != password.value) {
        document.getElementById("comfirmPasswordError").innerHTML = "Different password. Please re-enter the password";
        document.getElementById("comfirmPasswordError").style.color = "red";
        console.log("Different confirmPassword");
        return false;
    } else {
        document.getElementById("comfirmPasswordError").innerHTML = "";
        return true;
    }
}

function validateAgreement(agreementStatus) {
    if (agreementStatus == false) {
        document.getElementById("agreementError").innerHTML = "Please accept the agreement";
        document.getElementById("agreementError").style.color = "red";
        console.log("Different confirmPassword");
        return false;
    }
    document.getElementById("agreementError").innerHTML = "";
    return true;
}