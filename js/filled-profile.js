const inputBasic = document.querySelectorAll(".input-basic");
const saveButton = document.querySelector(".save");
const firstNameInput = document.querySelector("#username");
const lastNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email-blank");
const uploadInput = document.getElementById("upload-photo");
const uploadPhotoWrapper = document.querySelector(".upload-photo-class");
const imageWrapper = document.querySelector(".image-wrapper");
const fulName = document.querySelector(".fulName");
const emailUnderFullname = document.querySelector(".mail-name");
const fullNameWrapper = document.querySelector(".fullName-wrapper");
const phone = document.querySelector(".visual-left");
const image = localStorage.getItem("thumbnail");
let alertOfSucces = document.querySelector(".your-changes-are-succesfull");
let linkboxs = JSON.parse(localStorage.getItem("links"));
let logoImages = document.querySelectorAll(".both-logo");
const regexNotEmpty = /\S/;
const regexForEmail = /^.+@.+\..+$/;

////////////////////////////////////////////////////

let boxColors = {
  GitHub: "#1A1A1A",
  "Frontend Mentor": "#FFF",
  Twitter: "#43B7E9",
  LinkedIn: "#2D68FF",
  YouTube: "#EE3939",
  Facebook: "#2442AC",
  Twitch: "#EE3FC8",
  "Dev.to": "#333",
  Codewars: "#8A1A50",
  Codepen: "#302267",
  freeCodeCamp: "#302267",
  GitLab: "#EB4925",
  Hashnode: "#0330D1",
  "Stack Overflow": "#EC7100",
};
////////////////////////////////////////////////

function updateFileName() {
  const inputElement = document.getElementById("upload-photo");
  const labelElement = inputElement.nextElementSibling;

  if (inputElement.files && inputElement.files[0]) {
    const reader = new FileReader();
    reader.readAsDataURL(inputElement.files[0]);
    reader.addEventListener("load", () => {
      localStorage.setItem("thumbnail", reader.result);
    });
    reader.onload = function (e) {
      // Set the uploaded image as background image
      uploadPhotoWrapper.style.backgroundImage = `url(${e.target.result}) `;
      imageWrapper.style.backgroundImage = `url(${e.target.result})`;

      // Hide the label
      labelElement.style.display = "none";
    };

    reader.readAsDataURL(inputElement.files[0]);
  } else {
    // Remove the background image and show the label
    uploadPhotoWrapper.style.backgroundImage = "none";

    // Show the label
    labelElement.style.display = "block";
  }
}
uploadInput.addEventListener("change", updateFileName);

////////////////////////////////////////////////

//colorful boxes
if (linkboxs !== null) {
  var keys = Object.keys(linkboxs);
  keys.forEach((element, index) => {
    let newBox = document.createElement("div");
    newBox.classList.add("added-link-rectangle");
    newBox.style.background = boxColors[element];

    switch (index) {
      case 0:
        newBox.style.top = "45%";
        break;
      case 1:
        newBox.style.top = "53.3%";
        break;
      case 2:
        newBox.style.top = "61.8%";
        break;
      case 3:
        newBox.style.top = "69.8%";
        break;
      case 4:
        newBox.style.top = "78.8%";
        break;
    }

    let image = document.createElement("img");
    image.src = `../assets/images/icon-${element.replace(/\s+/g, "-")}.svg`;
    image.classList.add("icon-github-rectangle");
    let nameofBox = document.createElement("h4");
    nameofBox.textContent = element;
    nameofBox.classList.add("rectangle-h");

    let iconArrow = document.createElement("img");
    iconArrow.src = "../assets/images/icon-arrow-right.svg";
    iconArrow.classList.add("icon-arrow-right");

    if (element == "Frontend Mentor") {
      image.style.filter = "brightness(0%)";
      iconArrow.style.filter = "brightness(0%)";
      nameofBox.style.color = "black";
      newBox.style.border = "1px solid  #D9D9D9";
    }

    newBox.appendChild(image);
    newBox.appendChild(nameofBox);
    newBox.appendChild(iconArrow);
    phone.appendChild(newBox);
  });
}

//////////////////////////////////\

//remove errors on input

inputBasic.forEach((element) => {
  element.addEventListener("input", () => {
    element.parentElement.classList.remove("error");
    if (element.value !== "") {
      saveButton.style.opacity = "1";
    } else {
      saveButton.style.opacity = "0.25";
    }
  });
});

//save button

saveButton.addEventListener("click", () => {
  ///errors

  let error = false;
  if (!regexNotEmpty.test(firstNameInput.value)) {
    firstNameInput.parentElement.classList.add("error");
    error = true;
  }
  if (!regexNotEmpty.test(lastNameInput.value)) {
    lastNameInput.parentElement.classList.add("error");
    error = true;
  }
  if (!regexForEmail.test(emailInput.value)) {
    emailInput.parentElement.classList.add("error");
    emailInput.parentNode.lastElementChild.innerHTML = "invalid email!";
    error = true;
    if (emailInput.value === "") {
      emailInput.parentNode.lastElementChild.innerHTML = "Can’t be empty";
    }
  }
  if (error) {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////

  // save data

  let objUserInformation = {};

  objUserInformation["Firstname"] = firstNameInput.value;
  objUserInformation["lastName"] = lastNameInput.value;
  objUserInformation["email"] = emailInput.value;
  localStorage.setItem("profile details", JSON.stringify(objUserInformation));

  // throw alert of success

  alertOfSucces.style.display = "flex";
  setTimeout(() => {
    alertOfSucces.style.display = "none";
  }, 3000);

  ////////////////////////////////////////////////////////

  // use data from localStorage

  let profileDetails = JSON.parse(localStorage.getItem("profile details"));

  fulName.innerHTML = `${profileDetails["Firstname"]} ${profileDetails["lastName"]}`;
  emailUnderFullname.innerHTML = profileDetails["email"];

  fullNameWrapper.style.background = "white";
});

///////////////////////////////////////////

//use data from localStorage

document.addEventListener("DOMContentLoaded", () => {
  let profileDetails = JSON.parse(localStorage.getItem("profile details"));
  if (profileDetails !== null) {
    fulName.innerHTML = `${profileDetails["Firstname"]} ${profileDetails["lastName"]}`;
    emailUnderFullname.innerHTML = profileDetails["email"];
    fullNameWrapper.style.background = "white";
  }

  if (image !== null) {
    uploadPhotoWrapper.style.backgroundImage = `url(${image}) `;
    uploadPhotoWrapper.style.backgroundPosition = "center";
    imageWrapper.style.backgroundImage = `url(${image})`;
  }
});

////refresh

logoImages.forEach((image) => {
  image.addEventListener("click", () => {
    location.reload();
  });
});
