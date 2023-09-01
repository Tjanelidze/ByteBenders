const allInput = document.querySelectorAll(".allInput");
const passwordInput = document.querySelectorAll(".password-input");
const eyeIcon = document.querySelectorAll(".eye-icon");
const emailInput = document.querySelector(".email-input");
const errorOfEmail = document.querySelector(".errorOfEmail");
const createPasswordInput = document.querySelector(".Create-password-input");
const confirmPasswordInput = document.querySelector(".Confirm-password-input");
const formOfRegistration = document.querySelector(".form-Of-registracion");
const createNewAcountButton = document.querySelector(".Create-new-account");
const regexForPassword = /.{8,}/;
const regexForEmail = /^.+@.+\..+$/;

//************************************************************** */

formOfRegistration.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!regexForEmail.test(emailInput.value)) {
    emailInput.parentElement.classList.add("error");
    emailInput.parentNode.lastElementChild.innerHTML = "invalid email!";
    if (emailInput.value === "") {
      emailInput.parentNode.lastElementChild.innerHTML = "Can’t be empty";
    }
  }
  if (!regexForPassword.test(createPasswordInput.value)) {
    createPasswordInput.parentElement.classList.add("error");
  }
  if (
    createPasswordInput.value !== confirmPasswordInput.value ||
    !regexForPassword.test(confirmPasswordInput.value)
  ) {
    confirmPasswordInput.parentElement.classList.add("error");
  } else {
    let userObj = {
      email: "",
      password: "",
    };
    userObj.email = emailInput.value;
    userObj.password = createPasswordInput.value;
    localStorage.setItem("user", JSON.stringify(userObj));
    window.location.href = "/";
  }
});

//create new acount

createNewAcountButton.addEventListener("click", () => {});

//remove errors on input
allInput.forEach((element) => {
  element.addEventListener("input", () => {
    element.parentElement.classList.remove("error");
  });
});

// show  icon eye for password
passwordInput.forEach((element) => {
  element.addEventListener("keydown", () => {
    element.parentElement.children[2].classList.remove("disappeared");
    element.parentElement.children[1].classList.add("disappeared");
    if (element.value === "") {
      element.type = "password";
    }
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
