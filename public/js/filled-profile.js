const saveButton = document.querySelector(".save");
const firstNameInput = document.querySelector("#username");
const lastNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email-blank");
//////////////////////////////////////////////////////////////

function updateFileName() {
  const inputElement = document.getElementById("upload-photo");
  const uploadPhotoWrapper = document.querySelector(".upload-photo");

  if (inputElement.files && inputElement.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const uploadedImage = document.createElement("img");
      uploadedImage.src = e.target.result;
      uploadedImage.classList.add("uploaded-image");

      // Remove any existing uploaded image
      const existingImage = uploadPhotoWrapper.querySelector(".uploaded-image");
      if (existingImage) {
        existingImage.remove();
      }

      // Add the uploaded image to the wrapper
      uploadPhotoWrapper.appendChild(uploadedImage);
      console.log(uploadedImage);
      // Hide the label
      labelElement.style.display = "none";
    };

    reader.readAsDataURL(inputElement.files[0]);
  } else {
    uploadPhotoWrapper.style.backgroundImage =
      "url('../assets/images/icon-upload-image.svg')";
    uploadPhotoWrapper.classList.remove("upload-photo-background");
  }
}

saveButton.addEventListener("click", () => {
  console.log(firstNameInput.value);

  console.log(lastNameInput.value);
  console.log(emailInput);
});
