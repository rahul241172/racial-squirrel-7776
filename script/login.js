const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click",() => {
    window.location = "http://localhost:4500/auth/google";
})