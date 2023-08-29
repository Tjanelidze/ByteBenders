// Create the variables of html elements
let newLinkBtn = document.querySelector(".add-link");
let emptyDesign = document.querySelector(".new-link-page");
let upperMain = document.querySelector(".upper-main");
let inputLink = document.querySelector("#input-link");
let phonePart = document.querySelector("#rectangle-id");

// Create a tiny function for add new link button
let newLink = () => {
  emptyDesign.style.display = "none";
  phonePart.style.display = "flex";
};

newLinkBtn.addEventListener("click", function () {
  newLink();

  const newLinkBox = document.createElement("div");

  const currentLinks = upperMain.querySelectorAll(".link-box").length;
  console.log(currentLinks);
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
          <p class="custom-link-p">Link #${currentLinks + 1}</p>
        </div>
        <p class="custom-remove">Remove</p>
      </div>

      <div class="custom-selections">
        <div class="cstm upper-selection">
          <label for="platform-selection">Platform</label>
          <select
            name="Platform"
            id="platform-selection"
            class="customization-area"
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
