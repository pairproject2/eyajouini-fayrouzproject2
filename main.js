const taskInput = document.getElementById("task-input");
const addbtn = document.getElementById("add-btn");
const tasklist = document.getElementById("task-list");

//eventlistnners

/////////////add/////////////////

addbtn.addEventListener("click", function () {
  if (taskInput.value !== "") {
    var taskText = taskInput.value;
    console.log("our value", taskText);
    const listitem = document.createElement("li");
    listitem.innerHTML = `
                     <p id="pp"> ${taskText} </p>
                     <button class="delete-btn">Delete</button>
                     <button class="update-btn">Update</button>
                         `;
    tasklist.append(listitem);
  }
  taskInput.value = " ";
});

/////////////////////////////////////////////////delete//////
tasklist.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});

/////////////////////////////////update////////////////
tasklist.addEventListener("click", function (event) {
  if (event.target.classList.contains("update-btn")) {
    const listitem = document.createElement("div");
    listitem.innerHTML = `
                    <input id="input">
                     <button  id="t"class="save-btn">save</button>
                         `;
    tasklist.append(listitem);
  }
});

////////////////////////////////////////save//////////////////////

tasklist.addEventListener("click", function (event) {
  if (event.target.classList.contains("save-btn")) {
    var s1 = document.getElementById("input");
    var bt1 = document.getElementById("t");
    var x = s1.value;
    console.log("x", x);
    const taskp = document.getElementById("pp");
    taskp.textContent = x;
    s1.style.display = "none";
    bt1.style.display = "none";
  }
});
