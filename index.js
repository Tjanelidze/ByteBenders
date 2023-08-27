const allInput = document.querySelectorAll(".allInput");

const formOfLogin = document.querySelector(".form-Of-Login");

const loginButton = document.querySelector(".login-button");

const emailInput = document.querySelector(".email-input");

const passwordInput = document.querySelector(".password-input");
const regexForPassword = /.{8,}/;

//form

formOfLogin.addEventListener("submit", (event) => {
  event.preventDefault();
});

loginButton.addEventListener("click", () => {
  //email error
  if (emailInput.value == "") {
    emailInput.parentElement.classList.add("error");
  } else {
    emailInput.parentElement.classList.remove("error");
  }

  // password input error
  if (regexForPassword.test(passwordInput.value)) {
    passwordInput.parentElement.classList.remove("error");
  } else {
    passwordInput.parentElement.classList.add("error");
  }
});

allInput.forEach((element) => {
  element.addEventListener("input", () => {
    element.parentElement.classList.remove("error");
  });
});
