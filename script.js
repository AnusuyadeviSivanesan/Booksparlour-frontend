document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    console.log("Logging in with:", email, password);
    alert("Login successful (Backend integration required)");
});

document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    console.log("Signing up with:", username, email, password);
    alert("Signup successful (Backend integration required)");
});

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
