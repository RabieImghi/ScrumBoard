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
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal?.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
function update_user_story(indec){
  var user_story = document.getElementById("user_story"+indec);
  var user_etat = document.getElementById("user_etat"+indec);
  var description_user = document.getElementById("description_user"+indec);
  var desc = document.getElementById("desc"+indec);
  description_user.value = desc.value;
  afiche_detail_user(indec);
  if(user_etat.value == 0){
      var user_box = document.getElementById("todo_box");
      user_box.appendChild(user_story);
  }
  if(user_etat.value == 2){
      var user_box = document.getElementById("finish_box");
      user_box.appendChild(user_story);
  }
  if(user_etat.value == 1){
      var user_box = document.getElementById("doing_box");
      user_box.appendChild(user_story);
  }
}
function afiche_detail_user(indec){
  alert("ok")
  var description_user = document.getElementById("description_user"+indec);
  var desc = document.getElementById("desc"+indec);
  console.log(description_user.value)
  console.log( desc.value)
  desc.value=description_user.value;
  
}
// ------------PARTIE filaly*do not touch it if ur not filaly*
const btn_edit_img = document.getElementById("editPicture");
const hidden_file = document.getElementById("hiddenFileInput");
const user_pick = document.getElementById("user_pick");
const user = document.getElementsByClassName("user");
const user_elements = user_pick?.querySelectorAll("li");
const user_default = user_pick?.querySelector("#default");
const prj_pic = document.querySelector("#prj_pic");
const line = document.getElementById("line");
const trash = document.getElementById("trash");

document.addEventListener("DOMContentLoaded", () => {
  btn_edit_img?.addEventListener("click", () => {
    hidden_file.click();
  });
});

user_pick?.addEventListener("click", () => {
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
  user_elements.forEach((userElement) => {
    userElement.removeAttribute("class");
  });

  element.setAttribute("class", "d-none");
  user_default.innerHTML = element.innerHTML;
}
const P = line?.closest("tr");
const L = trash?.closest("tr");
document.addEventListener("DOMContentLoaded", () => {});
let Ln = document.querySelectorAll("#line");
let Tr = document.querySelectorAll("#trash");
for (let i = 0; i < Ln.length; i++) {
  Tr[i].addEventListener("click", () => {
    Ln[i].remove();
  });
}

const update = document.querySelectorAll("#update");
const btn_update = document.getElementById("btn_update");
const new_name = document.getElementById("recipient-name");
const new_mail = document.getElementById("recipient-email");
const nam = document.querySelectorAll("#name");
const mail = document.querySelectorAll("#mail");
const update_form = document.getElementById("udate_form");

for (let i = 0; i < update.length; i++) {
  update[i]?.addEventListener("click", () => {
    btn_update.click();
  });
}

function generateId(element) {
  let elements = document.querySelectorAll("#" + element);
  let n = 0;
  elements.forEach((ele) => {
    n++;
    ele.id = element + "_" + n;
  });
}

generateId("trash");
generateId("update");
generateId("line");
generateId("mail");
generateId("name");

update?.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log(element.id);
    let nom = document.getElementById("name_" + (index + 1));
    let em = document.getElementById("mail_" + (index + 1));
    console.log(nom.innerHTML);
    var eml = new_mail.value;
    update_form?.addEventListener("click", () => {
      let email_reg = /^[A-Za-z0-9]+@[A-Za-z].+[A-Za-z]{2,4}$/;

      if (new_name.value == "" || new_mail.value == "") {
        alert("please write somthing");
      } else if (eml.match(email_reg)) {
        alert("ok");
        nom.innerHTML = new_name.value;
        em.innerHTML = new_mail.value;
      }
    });
  });
});
