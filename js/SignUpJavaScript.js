let username = document.getElementById("usernameTextField");
let password = document.getElementById("passwordTextField");

function submit() {
    validateUsername(username.value);
    validatePassword(password.value);
    if (validateUsername(username.value) && validatePassword(password.value)) {
        console.log("Login Succes");
        alert("Login Succes");
        window.location.href = "./Home.html";
    } else {
        console.log("Login fail");
        alert("Login fail. Please check the requirement");
    }
}

function validateUsername(usernameValue) {
    if (usernameValue.length == 0) {
        document.getElementById("usernameError").innerHTML = "Please insert the username";
        document.getElementById("usernameError").style.color = "red";
        console.log("Empty Username");
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
        console.log("Password not valid");
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