function updateFileName() {
  const inputElement = document.getElementById("upload-photo");
  const labelElement = inputElement.nextElementSibling;
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

      // Hide the label
      labelElement.style.display = "none";
    };

    reader.readAsDataURL(inputElement.files[0]);
  } else {
    // Remove the uploaded image and show the label
    const existingImage = uploadPhotoWrapper.querySelector(".uploaded-image");
    if (existingImage) {
      existingImage.remove();
    }
    labelElement.style.display = "block";
  }
}