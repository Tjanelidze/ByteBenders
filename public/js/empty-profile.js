// Create the variables of html elements
let newLinkBtn = document.querySelector(".add-link");
let emptyDesign = document.querySelector(".new-link-page");
let upperMain = document.querySelector(".upper-main");
let inputLink = document.querySelector("#input-link");
let phonePart = document.querySelector("#rectangle-id");
let phone = document.querySelector(".img-wrapper");
let saveButton = document.querySelector(".save");
let footer = document.querySelector(".end");
let main = document.querySelector(".main");
////******************************************************* */

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

////////////////////////////////////////

newLinkBtn.addEventListener("click", function () {
  emptyDesign.style.display = "none";
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
        <p class=links-error-p>Can’t be empty</p>
          <label for="input-link">Link</label>
          <input
            type="text"
            name="input-link"
            class="customization-area link-inputs"
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

//remove buttons  and save button background

upperMain.addEventListener("click", (event) => {
  const currentLinks = upperMain.querySelectorAll(".link-box").length;
  if (currentLinks === 0) {
    let elementsToRemove = document.querySelectorAll(".added-link-rectangle");
    elementsToRemove.forEach(function (element) {
      element.remove();
      footer.classList.remove("buttonActive");
    });
  } else {
    footer.classList.add("buttonActive");
  }

  if (event.target.classList.contains("custom-remove")) {
    const linkBox = event.target.closest(".link-box");
    if (linkBox) {
      linkBox.remove();
      updateLinkNumeration();
    }
  }
  upperMain.click();
});

//dropdown icon

upperMain.addEventListener("input", (event) => {
  if (
    event.target.value !== "" &&
    event.target.classList.contains("link-inputs")
  ) {
    const linkBox = event.target.closest(".custom-selections");
    linkBox.classList.remove("error");
  }

  if (event.target && event.target.classList.contains("dropDown")) {
    event.target.parentElement.children[1].style.backgroundImage = `url(../assets/images/icon-${event.target.value.replace(
      /\s+/g,
      "-"
    )}.svg), url(../assets/images/icon-chevron-down.svg)`;
  }
});

// color boxes

upperMain.addEventListener("click", () => {
  const selectionInputs = upperMain.querySelectorAll(".dropDown");

  let arrayOfboxes = [];
  selectionInputs.forEach((element) => {
    if (arrayOfboxes.indexOf(element.value) === -1) {
      arrayOfboxes.push(element.value);
    }

    let elementsToRemove = document.querySelectorAll(".added-link-rectangle");
    elementsToRemove.forEach(function (element) {
      element.remove();
    });

    arrayOfboxes.forEach((element, index) => {
      let newBox = document.createElement("div");
      newBox.classList.add("added-link-rectangle");
      newBox.style.background = boxColors[element];

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
  });

  //to dont repeat boxes  ///eror

  selectionInputs.forEach((input) => {
    input.addEventListener("input", () => {
      upperMain.click();
      if (arrayOfboxes.includes(input.value)) {
        const linkBox = input.closest(".link-box");
        linkBox.remove();
        let index = arrayOfboxes.indexOf(input.value);

        arrayOfboxes.splice(index, 1);

        upperMain.click();
      }
    });
  });
});

saveButton.addEventListener("click", () => {
  const allLinkBoxes = upperMain.querySelectorAll(".custom-selections");

  let dataObj = {};
  allLinkBoxes.forEach((element) => {
    socialNetwork = element.children[0].children[1].value;
    link = element.children[1].children[2].value;

    if (link === "") {
      element.classList.add("error");
      return;
    }
    dataObj[socialNetwork] = link;
    localStorage.setItem("links", JSON.stringify(dataObj));
  });
});
