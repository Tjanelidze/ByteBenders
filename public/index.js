const allInput = document.querySelectorAll(".allInput");
const formOfLogin = document.querySelector(".form-Of-Login");
const loginButton = document.querySelector(".login-button");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const eyeIcon = document.querySelectorAll(".eye-icon");
const regexForPassword = /.{8,}/;

//*******************************************************8 */

//form

formOfLogin.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(formOfLogin);
  const payload = {};
  formData.forEach((value, key) => {
    payload[key] = value;
  });

  const response = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const responseData = await response.json();

  if (response.status === 200) {
    window.location.href = "/pages/empty-profile.html";
  }
});

loginButton.addEventListener("click", () => {
  //email error
  if (emailInput.value == "") {
    emailInput.parentElement.classList.add("error");
  }

  // password input error
  if (!regexForPassword.test(passwordInput.value)) {
    passwordInput.parentElement.classList.add("error");
  }
});

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
