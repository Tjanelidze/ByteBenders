const allInput = document.querySelectorAll(".allInput");

const passwordInput = document.querySelectorAll(".password-input");

const eyeIcon = document.querySelectorAll(".eye-icon");

const emailInput = document.querySelector(".email-input");
const errorOfEmail = document.querySelector(".errorOfEmail");
const regexForEmail = /^.+@.+\..+$/;

const createPasswordInput = document.querySelector(".Create-password-input");
const regexForPassword = /.{8,}/;

const confirmPasswordInput = document.querySelector(".Confirm-password-input");

const formOfRegistration = document.querySelector(".form-Of-registracion");

const createNewAcountButton = document.querySelector(".Create-new-account");

//************************************************************** */

formOfRegistration.addEventListener("submit", (event) => {
  event.preventDefault();
});

function throwError(input, regex, condition, consditionTwo) {
  if (!regex.test(input.value)) {
    input.parentElement.classList.add("error");
  }
  console.log(condition);
  if (condition) {
    input.parentNode.lastElementChild.innerHTML = "Can’t be empty";
  } else {
    emailInput.parentNode.lastElementChild.innerHTML = "invalid email!";
  }
  if (consditionTwo) {
    input.parentElement.classList.add("error");
  }
}

createNewAcountButton.addEventListener("click", () => {
  throwError(emailInput, regexForEmail, emailInput.value === "", false);
  throwError(createPasswordInput, regexForPassword, false, false);
  throwError(
    confirmPasswordInput,
    regexForPassword,
    false,
    createPasswordInput.value !== confirmPasswordInput.value
  );
});

//remove errors on input
allInput.forEach((element) => {
  element.addEventListener("input", () => {
    element.parentElement.classList.remove("error");
  });
});

// show  icon eye for password
passwordInput.forEach((element) => {
  element.addEventListener("keydown", (event) => {
    element.parentElement.children[2].classList.remove("disappeared");
    element.parentElement.children[1].classList.add("disappeared");
  });
});

//show password

document.addEventListener("click", (event) => {
  passwordInput.forEach((element) => {
    if (element.value === "") {
      element.parentElement.children[2].classList.add("disappeared");
      element.parentElement.children[1].classList.remove("disappeared");
    }
  });

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
