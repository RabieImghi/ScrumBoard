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
function update_user_story(indec) {
  var user_story = document.getElementById("user_story" + indec);
  var user_etat = document.getElementById("user_etat" + indec);
  afiche_detail_user(indec);
  if (user_etat.value == 0) {
    var user_box = document.getElementById("todo_box");
    user_box.appendChild(user_story);
  }
  if (user_etat.value == 2) {
    var user_box = document.getElementById("finish_box");
    user_box.appendChild(user_story);
  }
  if (user_etat.value == 1) {
    var user_box = document.getElementById("doing_box");
    user_box.appendChild(user_story);
  }
}
function update_user_story_desc(indec) {
  var description_user = document.getElementById("description_user" + indec);
  var desc = document.getElementById("desc" + indec);
  description_user.value = desc.value;
}
function afiche_detail_user(indec) {
  var description_user = document.getElementById("description_user" + indec);
  var desc = document.getElementById("desc" + indec);
  desc.value = description_user.value;
}
function openInput(indec) {
  var input = document.getElementById("inputOpen" + indec);
  input.removeAttribute("readonly");
  window.addEventListener("click", function () {
    input.setAttribute("readonly", "");
  });
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

let close_btn = document.getElementById("close_btn");
let email_reg = /^[A-Za-z0-9]+@[A-Za-z].+[A-Za-z]{2,4}$/;

update?.forEach((element, index) => {
  let nom = document.querySelectorAll("#name");
  let em = document.querySelectorAll("#mail");
  element.addEventListener("click", () => {
    console.log(element.id);
    console.log(nom[index].innerHTML);
    update_form?.addEventListener("click", () => {
      // if (new_name.value == "" || new_mail.value == "") {
      //   alert("please write somthing");
      // } else if (new_mail.value.match(email_reg)) {
      //   alert("ok");
      nom[index].innerHTML = new_name.value;
      em[index].textContent = new_mail.value;
      close_btn.click();
    });
  });
});
//partie khalid
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
    
    document.getElementById("timepassed").innerHTML = years + "y " + mounths + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    var nowRest = new Date("25 jan, 2024 15:37:25").getTime();
    
    var distanceRest =  nowRest - countDownDate ;
    distanceRest = distanceRest-1000

    var yearsRest = Math.floor(distanceRest / (1000 * 60 * 60 * 24 * 30 * 12));
    var mounthsRest = Math.floor(distanceRest / (1000 * 60 * 60 * 24 * 30));
    var daysRest = Math.floor(distanceRest / (1000 * 60 * 60 * 24));
    var hoursRest = Math.floor((distanceRest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesRest = Math.floor((distanceRest % (1000 * 60 * 60)) / (1000 * 60));
    var secondsRest = Math.floor((distanceRest % (1000 * 60)) / 1000);
    document.getElementById("timeRes").innerHTML = yearsRest + "y " + mounthsRest + "m " + daysRest + "d " + hoursRest + "h " + minutesRest + "m " + secondsRest + "s ";
    console.log(distanceRest)
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeRes").innerHTML = "EXPIRED";
    }
}, 1000);


// var x = setInterval(function() {
//   console.log("something")
//     var nowRest = new Date("25 jan, 2024 15:37:25").getTime();
    
//     var distanceRest = countDownDate - nowRest;

//     var yearsRest = Math.floor(distanceRest / (1000 * 60 * 60 * 24 * 30 * 12));
//     var mounthsRest = Math.floor(distanceRest / (1000 * 60 * 60 * 24 * 30));
//     var daysRest = Math.floor(distanceRest / (1000 * 60 * 60 * 24));
//     var hoursRest = Math.floor((distanceRest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutesRest = Math.floor((distanceRest % (1000 * 60 * 60)) / (1000 * 60));
//     var secondsRest = Math.floor((distanceRest % (1000 * 60)) / 1000);

//     var rightNow = new Date().getTime();
  
//     var distanceTimePassed = countDownDate - rightNow;
  
//     var yearsTimePassed = Math.floor(distanceTimePassed / (1000 * 60 * 60 * 24 * 30 * 12));
//     var mounthsTimePassed = Math.floor(distanceTimePassed / (1000 * 60 * 60 * 24 * 30));
//     var daysTimePassed = Math.floor(distanceTimePassed / (1000 * 60 * 60 * 24));
//     var hoursTimePassed = Math.floor((distanceTimePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutesTimePassed = Math.floor((distanceTimePassed % (1000 * 60 * 60)) / (1000 * 60));
//     var secondsTimePassed = Math.floor((distanceTimePassed % (1000 * 60)) / 1000);
//     console.log(rightNow)
//     document.getElementById("timepassed").innerHTML = yearsTimePassed + "y " + mounthsTimePassed + "m " + daysTimePassed + "d " + hoursTimePassed + "h " + minutesTimePassed + "m " + secondsTimePassed + "s ";
    
//     document.getElementById("timeRes").innerHTML = years + "y " + mounths + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("timeRes").innerHTML = "EXPIRED";
//     }
// }, 1000);