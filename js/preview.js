const shareBtn = document.querySelector(".share-btn");
console.log(shareBtn);
const alertBox = document.querySelector(".alert-box");
console.log(alertBox);

shareBtn.addEventListener("click", () => {
  if (alertBox.style.display === "none") {
    alertBox.style.display = "flex";
  } else {
    alertBox.style.display = "none";
  }
});
