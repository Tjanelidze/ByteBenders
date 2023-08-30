// Create the variables of html elements
let newLinkBtn = document.querySelector(".add-link");
let emptyDesign = document.querySelector(".new-link-page");
let upperMain = document.querySelector(".upper-main");
let inputLink = document.querySelector("#input-link");
let phonePart = document.querySelector("#rectangle-id");
let phone = document.querySelector(".img-wrapper");

// Create a tiny function for add new link button
let newLink = () => {
  emptyDesign.style.display = "none";
};

newLinkBtn.addEventListener("click", function () {
  newLink();
  const newLinkBox = document.createElement("div");
  const currentLinks = upperMain.querySelectorAll(".link-box").length;
  if (currentLinks >= 5) {
    return;
  }

  newLinkBox.innerHTML = `
      <div class="link-box">
      <div class="upper-link">
        <div class="custom-link">
          <img
            src="../assets/images/icon-drag-and-drop.svg"
            alt="icon-drag-and-drop"
            class="icon-drag-and-drop"
          />
          <p class="custom-link-p">Link </p>
        </div>
        <p class="custom-remove">Remove</p>
      </div>

      <div class="custom-selections">
        <div class="cstm upper-selection">
          <label for="platform-selection">Platform</label>
          <select
            name="Platform"
            id="platform-selection"
            class="customization-area dropDown"
          >
            <option value="Github" class="gitHub">Github</option>
            <option value="Frontend Mentor">Frontend Mentor</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="YouTube">YouTube</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitch">Twitch</option>
            <option value="Dev.to">Dev.to</option>
            <option value="Codewars">Codewars</option>
            <option value="Codepen">Codepen</option>
            <option value="freeCodeCamp">freeCodeCamp</option>
            <option value="GitLab">GitLab</option>
            <option value="Hashnode">Hashnode</option>
            <option value="Stack Overflow">Stack Overflow</option>
          </select>
        </div>
        <div class="cstm bottom-selection">
          <label for="input-link">Link</label>
          <input
            type="text"
            name="input-link"
            class="customization-area"
            id="input-link"
            placeholder="e.g. https://www.github.com/johnappleseed"
          />
        </div>
      </div>
    </div>
    `;

  upperMain.appendChild(newLinkBox);
  updateLinkNumeration();
});

function updateLinkNumeration() {
  const linkBoxes = upperMain.querySelectorAll(".link-box");

  linkBoxes.forEach((linkBox, index) => {
    const linkNumber = index + 1;
    const linkNumberElement = linkBox.querySelector(".custom-link-p");
    if (linkNumberElement) {
      linkNumberElement.textContent = `Link #${linkNumber}`;
    }
  });
}

upperMain.addEventListener("click", (event) => {
  if (event.target.classList.contains("custom-remove")) {
    const linkBox = event.target.closest(".link-box");
    if (linkBox) {
      linkBox.remove();
      updateLinkNumeration();
    }
  }
});

upperMain.addEventListener("input", (event) => {
  if (event.target && event.target.classList.contains("customization-area")) {
    event.target.parentElement.children[1].style.backgroundImage = `url(../assets/images/icon-${event.target.value.replace(
      /\s+/g,
      "-"
    )}.svg), url(../assets/images/icon-chevron-down.svg)`;
  }
});

upperMain.addEventListener("click", () => {
  const boxes = upperMain.querySelectorAll(".dropDown");
  let arrayOfboxes = [];

  boxes.forEach((box) => {
    if (arrayOfboxes.indexOf(box.value) === -1) {
      arrayOfboxes.push(box.value);
    }
    let elementsToRemove = document.querySelectorAll(".added-link-rectangle");
    elementsToRemove.forEach(function (element) {
      element.remove();
    });
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

    arrayOfboxes.forEach((element, index) => {
      let newBox = document.createElement("div");
      newBox.classList.add("added-link-rectangle");
      newBox.style.background = `${boxColors[element]}`;
      switch (index) {
        case 0:
          newBox.style.top = "43.8%";
          break;
        case 1:
          newBox.style.top = "53.8%";
          break;
        case 2:
          newBox.style.top = "63.8%";
          break;
        case 3:
          newBox.style.top = "73.8%";
          break;
        case 4:
          newBox.style.top = "83.8%";
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

      newBox.appendChild(image);
      newBox.appendChild(nameofBox);
      newBox.appendChild(iconArrow);
      phone.appendChild(newBox);
    });
  });
});
