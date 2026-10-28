
function showLogin() {

    document.getElementById("loginForm").classList.remove("hidden");

    document.getElementById("signupForm").classList.add("hidden");

    document.getElementById("loginTab").classList.add("active");

    document.getElementById("signupTab").classList.remove("active");
}


function showSignup() {

    document.getElementById("signupForm").classList.remove("hidden");

    document.getElementById("loginForm").classList.add("hidden");

    document.getElementById("signupTab").classList.add("active");

    document.getElementById("loginTab").classList.remove("active");
}


function togglePassword(id) {

    let password = document.getElementById(id);

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";
    }
}


// Login Form

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("loginMessage").textContent =
        "Login form submitted successfully!";

});


// Signup Form

document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("signupMessage").textContent =
        "Account created successfully!";

});
