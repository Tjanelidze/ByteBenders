const shareBtn = document.querySelector(".share-btn");
const alertBox = document.querySelector(".alert-box");
const fullName = document.querySelector(".user-name");
const email = document.querySelector(".user-email");
const userBoxesParent = document.querySelector(".user-social-links");
const imageBox = document.querySelector(".user-photo-div");
const userDetails = JSON.parse(localStorage.getItem("profile details"));
const image = localStorage.getItem("thumbnail");
let linksInformation = JSON.parse(localStorage.getItem("links"));
let buttons = document.querySelectorAll(".added-link-rectangle");

/////////////////////////////////////////////////////

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

//////////////////////////////////////

function createColorfulBoxes(arr) {
  arr.forEach((element, index) => {
    let newBox = document.createElement("div");
    newBox.classList.add("added-link-rectangle");
    newBox.style.background = boxColors[element];

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
    userBoxesParent.appendChild(newBox);
  });
}
/////////////////////////////////////////
shareBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href);

  alertBox.style.display = "flex";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
});

//////////////////////////////////////////////////

if (userDetails !== null) {
  fullName.innerHTML = userDetails.Firstname + " " + userDetails.lastName;
  email.innerHTML = userDetails.email;
} else {
  fullName.innerHTML = "Ben Wright";
  email.innerHTML = "ben@example.com";
}

////////////////////////////////////////////

if (linksInformation === null) {
  createColorfulBoxes(["GitHub", "YouTube", "LinkedIn"]);
} else {
  let arrayForColorfulBoxes = Object.keys(linksInformation);
  createColorfulBoxes(arrayForColorfulBoxes);
}

////////////////////////

if (image !== null) {
  imageBox.style.background = `url(${image})`;
  imageBox.style.backgroundSize = "cover";
  imageBox.style.backgroundPosition = "center";
} else {
  imageBox.style.background = "url(../assets/images/profile-image.png)";
  imageBox.style.backgroundSize = "cover";
  imageBox.style.border = "none";
}

///////////////////////////////

if (linksInformation !== null) {
  let buttons = document.querySelectorAll(".added-link-rectangle");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let buttonName = button.children[1].textContent;
      window.location.href = linksInformation[buttonName];
    });
  });
}
