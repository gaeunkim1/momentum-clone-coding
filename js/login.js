const loginForm = document.querySelector(".login");
const loginInput = loginForm.querySelector("#login-user");
const greetingText = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting(username);
    console.log(loginForm);
}

function greeting(username) {
    greetingText.innerText = `Hi ${username}!`;
    greetingText.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting(savedUsername);
}

