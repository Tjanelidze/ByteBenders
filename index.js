const allInput = document.querySelectorAll(".allInput");
const formOfLogin = document.querySelector(".form-Of-Login");
const loginButton = document.querySelector(".login-button");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const eyeIcon = document.querySelectorAll(".eye-icon");
const user = JSON.parse(localStorage.getItem("user"));
const regexForPassword = /.{8,}/;

//*******************************************************8 */

//form

formOfLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!emailInput.value) {
    emailInput.parentElement.children[3].innerHTML = "can't be empty";
    emailInput.parentElement.classList.add("error");
    return;
  }

  // password input error
  if (!regexForPassword.test(passwordInput.value)) {
    passwordInput.parentElement.classList.add("error");
    return;
  } else {
    if (user.email !== emailInput.value) {
      emailInput.parentElement.children[3].innerHTML = "Email Failed";
      emailInput.parentElement.classList.add("error");
      return;
    }
    if (
      user.email == emailInput.value &&
      user.password != passwordInput.value
    ) {
      passwordInput.parentElement.classList.add("error");
      return;
    }
    if (
      user.email == emailInput.value &&
      user.password == passwordInput.value
    ) {
      window.location.href = "/pages/empty-profile.html";
    }
  }
});

//login button

allInput.forEach((element) => {
  element.addEventListener("input", () => {
    element.parentElement.classList.remove("error");
  });
});

// show  icon eye for password

passwordInput.addEventListener("keydown", () => {
  passwordInput.parentElement.children[2].classList.remove("disappeared");
  passwordInput.parentElement.children[1].classList.add("disappeared");
  if (passwordInput.value === "") {
    passwordInput.type = "password";
  }
});

//show password

document.addEventListener("click", (event) => {
  if (passwordInput.value === "") {
    passwordInput.parentElement.children[2].classList.add("disappeared");
    passwordInput.parentElement.children[1].classList.remove("disappeared");
  }

  if (event.target.classList.contains("eye-icon")) {
    const passwordInput =
      event.target.parentElement.querySelector(".password-input");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
});
