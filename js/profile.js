// Create the variables of html elements

let newLinkBtn = document.querySelector(".add-link");
let emptyDesign = document.querySelector(".new-link-page");
let customLink = document.querySelector(".link-box");
let inputLink = document.querySelector("#input-link");
let removeBtn = document.querySelector(".custom-remove");
let phonePart = document.querySelector("#rectangle-id");

// Create a tiny function for add new link button

let newLink = () => {
  customLink.style.display = "block";
  emptyDesign.style.display = "none";
  phonePart.style.display = "flex";
};

// Remove button tiny function

let removeLink = () => {};

// Added event listener to new Link button
newLinkBtn.addEventListener("click", function () {});

// Add event listener to remove link button
removeBtn.addEventListener("click", removeLink);
