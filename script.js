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
generateId("name");
generateId("mail");

let close_btn = document.getElementById("close_btn");
let email_reg = /^[A-Za-z0-9]+@[A-Za-z].+[A-Za-z]{2,4}$/;
let cur_name;
let cur_mail;

update?.forEach((element, index) => {
  element.addEventListener("click", () => {
    let nom = document.getElementById("name_" + (index + 1));
    let em = document.getElementById("mail_" + (index + 1));
    update_form?.addEventListener("click", () => {
      // if (new_name.value == "" || new_mail.value == "") {
      //   alert("please write somthing");
      // } else if (new_mail.value.match(email_reg)) {
      //   alert("ok");
      cur_name = nom;
      cur_mail = mail;
      cur_name = new_name.value;
      cur.textContent = new_mail.value;
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
    var timepassed = document.getElementById("timepassed")
    if(timepassed)
    timepassed.innerHTML = years + "y " + mounths + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timepassed").innerHTML = "EXPIRED";
    }
}, 1000);

//oumaima parite
function modifierUserS(indice){
  var text = document.getElementById('storytext'+indice);
  var desscription = document.getElementById('description'+indice);
  desscription.innerHTML=text.textContent;

}
function updateDescription(indice)
{
  var text = document.getElementById('storytext'+indice);
  var desscription = document.getElementById('description'+indice);
  text.innerHTML =desscription.value; 

}
function deleteDiv(indice)
{
  var elements = document.getElementsByClassName('group_user'+ indice);
  elements[0].remove();
}

document.getElementById("add")?.addEventListener('click', function(){
  const id = Math.floor(Math.random() * (1 - 1000000 + 1)) + 1000000;
  const dynamicContent = `
          <div style="width: 99%;" class="row border rounded-1 mt-1 p-2 align-items-center modal-1">
              <div class="col-8 d-flex align-items-center gap-2">
                  <img src="./images/user.png" alt="">
                  <span id="storytext${id}" class="text-secondary">Lorem Ipsum is simply dummy text dustry 1</span>
              </div>
              <div class="col-2">
                  <select class="form-select form-select input d-flex align-items-center" style="width: 70%;">
                      <option selected>To Do</option>
                      <option value="1">In Progress</option>
                      <option value="2">Done</option>
                  </select>
              </div>
              <div class="col-2 d-flex gap-4 justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="modal" data-bs-target="#modifier_sprint${id}" onclick="modifierUserS(${id})" height="1em" viewBox="0 0 512 512">
                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                  </svg>
                  <svg onclick="deleteDiv(${id})" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
                  </svg>
              </div>
          </div>
          <div class="modal fade" id="modifier_sprint${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content">
                      <div class="modal-body">
                          <div class="d-flex justify-content-between width-img">
                              <h5 class="text-secondary">Add a user story</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="d-flex justify-content-between">
                              <input class="col-6" type="text" placeholder="Title">
                              <select class="form-select w-25 text text-white" style="background-color: var(--btn);">
                                  <option selected>to do</option>
                                  <option value="1">Doing</option>
                                  <option value="2">Done</option>
                              </select>
                          </div>
                          <div class="mt-3">
                              <textarea id="description${id}" class="w-75" name="" id="" cols="30" rows="10" placeholder="Description" style="outline: none;"></textarea>
                          </div>
                          <button onclick="updateDescription(${id})" class="btn btn-primary">add</button>
                      </div>
                  </div>
              </div>
          </div>
  `;
  var div = document.createElement("div")
  div.classList.add('group_user'+id);
  div.classList.add('ml-2');
  div.style.width="100%";
  div.innerHTML=dynamicContent;
  document.getElementById('userGroups').appendChild(div);
})

const dragArea = document.getElementById("userGroups");
if(dragArea)
new Sortable(dragArea)