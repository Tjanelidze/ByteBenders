function updateFileName() {
  const inputElement = document.getElementById("upload-photo");
  const uploadPhotoWrapper = document.querySelector(".upload-photo");

  if (inputElement.files && inputElement.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const uploadedImageURL = e.target.result;
      uploadPhotoWrapper.style.backgroundImage = `url('${uploadedImageURL}')`;
      uploadPhotoWrapper.classList.add("upload-photo-background");
    };

    reader.readAsDataURL(inputElement.files[0]);
  } else {
    uploadPhotoWrapper.style.backgroundImage =
      "url('../assets/images/icon-upload-image.svg')";
    uploadPhotoWrapper.classList.remove("upload-photo-background");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("upload-photo");
  const labelElement = inputElement.nextElementSibling;
  const uploadPhotoWrapper = document.querySelector(".upload-photo");

  inputElement.addEventListener("change", updateFileName);
});
