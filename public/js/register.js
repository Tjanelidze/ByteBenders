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

  const formData = new FormData(formOfRegistration);
  const payload = {};
  formData.forEach((value, key) => {
    payload[key] = value;
  });

  const response = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 201) {
    window.location.href = "http://localhost:3000/";
  }
});

createNewAcountButton.addEventListener("click", () => {
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
  }
});

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
