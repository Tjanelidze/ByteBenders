const saveButton = document.querySelector(".save");
const firstNameInput = document.querySelector("#username");
const lastNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email-blank");
const uploadInput = document.getElementById("upload-photo");
const uploadPhotoWrapper = document.querySelector(".upload-photo-class");

function updateFileName() {
  const inputElement = document.getElementById("upload-photo");
  const labelElement = inputElement.nextElementSibling;
  console.log(inputElement.files[0]);
  if (inputElement.files && inputElement.files[0]) {
    const reader = new FileReader();
    reader.readAsDataURL(inputElement.files[0]);
    reader.addEventListener("load", () => {
      localStorage.setItem("thumbnail", reader.result);
    });
    reader.onload = function (e) {
      // Set the uploaded image as background image
      uploadPhotoWrapper.style.backgroundImage = `url(${e.target.result})`;

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

saveButton.addEventListener("click", () => {
  console.log(firstNameInput.value);
  console.log(lastNameInput.value);
  console.log(emailInput);
});
