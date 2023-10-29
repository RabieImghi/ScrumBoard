// ------------PARTIE RABIE*do not touch it if ur not rabie*
function drog_drop_function() {
  let lists_story_user = document.getElementsByClassName("story");
  let todo_box = document.getElementById("todo_box");
  let doing_box = document.getElementById("doing_box");
  let finish_box = document.getElementById("finish_box");
  for (list_story of lists_story_user) {
    list_story.addEventListener("dragstart", function (e) {
      let selected = e.target;
      todo_box.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      todo_box.addEventListener("drop", function (e) {
        todo_box.appendChild(selected);
        selected = null;
      });
      doing_box.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      doing_box.addEventListener("drop", function (e) {
        doing_box.appendChild(selected);
        selected = null;
      });
      finish_box.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      finish_box.addEventListener("drop", function (e) {
        finish_box.appendChild(selected);
        selected = null;
      });
    });
  }
}
function affiche() {
  var menu_vertical = document.getElementById("header_vertical");
  var filter = document.getElementById("filter");
  filter.classList.remove("d-none");
  menu_vertical.classList.add("header_vertical_mobile");
}
function close_menu() {
  var menu_vertical = document.getElementById("header_vertical");
  var filter = document.getElementById("filter");
  filter.classList.add("d-none");
  menu_vertical.classList.remove("header_vertical_mobile");
}
// ------------PARTIE filaly*do not touch it if ur not filaly*
const btn_edit_img = document.getElementById("editPicture");
const hidden_file = document.getElementById("hiddenFileInput");
const user_pick = document.getElementById("user_pick");
const user = document.getElementsByClassName("user");
const user_elements = user_pick.querySelectorAll("li");
const user_default = user_pick.querySelector("#default");

btn_edit_img.addEventListener("click", () => {
  hidden_file.click();
function drog_drop_function(){
    let lists_story_user=document.getElementsByClassName('story');
    let todo_box=document.getElementById('todo_box');
    let doing_box=document.getElementById('doing_box');
    let finish_box=document.getElementById('finish_box');
    for(list_story of lists_story_user){
        list_story.addEventListener('dragstart', function(e){
            let selected = e.target;
            todo_box.addEventListener('dragover', function(e){
                e.preventDefault();
            })
            todo_box.addEventListener('drop', function(e){
                todo_box.appendChild(selected);
                selected=null;
            })
            doing_box.addEventListener('dragover', function(e){
                e.preventDefault();
            })
            doing_box.addEventListener('drop', function(e){
                doing_box.appendChild(selected);
                selected=null;
            })
            finish_box.addEventListener('dragover', function(e){
                e.preventDefault();
            })
            finish_box.addEventListener('drop', function(e){
                finish_box.appendChild(selected);
                selected=null;
            })
        });         
    }
}
function affiche(){
    var menu_vertical = document.getElementById('header_vertical');
    var filter = document.getElementById('filter');
    filter.classList.remove('d-none')
    menu_vertical.classList.add("header_vertical_mobile");
}
function close_menu(){
    var menu_vertical = document.getElementById('header_vertical');
    var filter = document.getElementById('filter');
    filter.classList.add('d-none')
    menu_vertical.classList.remove("header_vertical_mobile");
}

//****page parametre
const editPictureButton = document.getElementById("editPicture");
const hiddenFileInput = document.getElementById("hiddenFileInput");
const allUsers = document.getElementsByClassName("user_picker");

editPictureButton.addEventListener("click", () => {
  hiddenFileInput.click();
});

user_pick.addEventListener("click", () => {
  let getS = user_pick.className;
  if (getS === "user_picker") {
    user_pick.classList.add("user_picking");
    user_pick.classList.remove("user_picker");
  } else {
    user_pick.classList.remove("user_picking");
    user_pick.classList.add("user_picker");
  }
});

function reSort(element) {
  user_elements.forEach((userElement, index) => {
    userElement.removeAttribute("class");
  });

  element.setAttribute("class", "d-none");
  user_default.innerHTML = element.innerHTML;
}
