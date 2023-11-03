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
  hidden_file?.addEventListener("change", (event) => {
    console.log(prj_pic.src);
    prj_pic.src = URL.createObjectURL(event.target.files[0]);
    console.log(prj_pic.src);
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
  user_elements.forEach((userElement, index) => {
    userElement.removeAttribute("class");
  });

  element.setAttribute("class", "d-none");
  user_default.innerHTML = element.innerHTML;
}
const elements = document.querySelectorAll("*");
function gen(element, eltoadd) {
  let i = 0;
  elements.forEach((element) => {
    if (element.id === eltoadd) {
      i++;
      element.id = eltoadd + i;
      console.log(element);
    }
  });
}
const P = line?.closest("tr");
const L = trash?.closest("tr");
document.addEventListener("DOMContentLoaded", () => {
  gen(L, "line");
  gen(P, "trash");
});
let Ln = document.querySelectorAll("#line");
let Tr = document.querySelectorAll("#trash");
for (let i = 0; i < Ln.length; i++) {
  console.log(Ln[i]);
  console.log(Tr[i]);
  Tr[i].addEventListener("click", () => {
    Ln[i].remove();
  });
}
// ------------PARTIE KHALID*do not touch it if ur not KHALID*
//timeRes

// lWe9t li bA9i 
var countDownDate = new Date("21 jan, 2024 15:37:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;

    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 30 * 12));
    var mounths = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timeRes").innerHTML = years + "y " + mounths + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeRes").innerHTML = "EXPIRED";
    }
}, 1000);




 
