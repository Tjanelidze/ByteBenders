const allInput = document.querySelectorAll(".allInput");

const passwordInput = document.querySelectorAll(".password-input");

const eyeIcon = document.querySelectorAll(".eye-icon");

const emailInput = document.querySelector(".email-input");
const erorOfEmail = document.querySelector(".erorOfEmail");
const regexForEmail = /^.+@.+\..+$/;

const createPasswordInput = document.querySelector(".Create-password-input");
const regexForPassword = /.{8,}/;

const confirmPasswordInput = document.querySelector(".Confirm-password-input");

const formOfRegistration = document.querySelector(".form-Of-registracion");

const createNewAcountButton = document.querySelector(".Create-new-account");

formOfRegistration.addEventListener("submit", (event) => {
  event.preventDefault();
});

createNewAcountButton.addEventListener("click", () => {
  //email input

  if (regexForEmail.test(emailInput.value)) {
    emailInput.parentElement.classList.remove("eror");
  } else {
    emailInput.parentElement.classList.add("eror");
    emailInput.parentNode.lastElementChild.innerHTML = "invalid email!";
    if (emailInput.value === "") {
      emailInput.parentNode.lastElementChild.innerHTML = "Can’t be empty";
    }
  }

  //create password input
  if (regexForPassword.test(createPasswordInput.value)) {
    createPasswordInput.parentElement.classList.remove("eror");
  } else {
    createPasswordInput.parentElement.classList.add("eror");
  }

  //confirm password input
  if (createPasswordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.parentElement.classList.remove("eror");
  } else {
    confirmPasswordInput.parentElement.classList.add("eror");
  }
});

allInput.forEach((element) => {
  element.addEventListener("input", () => {
    element.parentElement.classList.remove("eror");
  });
});

// show  icon eye for password

passwordInput.forEach((element) => {
  element.addEventListener("focus", () => {
    element.parentElement.children[2].classList.toggle("disappeared");
    element.parentElement.children[1].classList.toggle("disappeared");
  });
  element.addEventListener("blur", () => {
    element.parentElement.children[2].classList.toggle("disappeared");
    element.parentElement.children[1].classList.toggle("disappeared");
  });
});

//show password

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("eye-icon")) {
    const passwordInput =
      event.target.parentElement.querySelector(".password-input");
    console.log();
    if (
      passwordInput.type === "password"
      // !event.target.parentElement.children[1].classList.contains("disappeared")
    ) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
});
