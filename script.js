//****page parametre
const editPictureButton = document.getElementById("editPicture");
const hiddenFileInput = document.getElementById("hiddenFileInput");
const allUsers = document.getElementsByClassName("user_picker");

editPictureButton.addEventListener("click", () => {
  hiddenFileInput.click();
});

allUsers.addEventListener("click", () => {
  for (var i = 0; i < allUsers.length; i++) {
    console.log(allUsers[i]);
  }
});
