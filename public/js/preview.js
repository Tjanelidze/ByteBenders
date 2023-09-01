const shareBtn = document.querySelector(".share-btn");
const alertBox = document.querySelector(".alert-box");
const fullName = document.querySelector(".user-name");

const userDetails = JSON.parse(localStorage.getItem("profile details"));

shareBtn.addEventListener("click", () => {
  alertBox.style.display = "flex";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
});

fullName.innerHTML = userDetails.Firstname + " " + userDetails.lastName;
