const todoList = [];
let i = 0;

const inputValue = document.getElementById("input");
const addBtn = document.querySelector(".submit");

// const container = document.querySelector(".first-layout");
// container.onkeyup = function (e) {
//   if (e.keyCode === 13) {
//     console.log("Enter");
//   }
// };

addBtn.addEventListener("click", function () {
  if (inputValue.value === "") {
    alert("Please, enter a task");
  } else {
    todoList.push(inputValue.value);
    console.log(todoList);
    inputValue.value = "";

    const lists = document.querySelector(".task-list");
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "flex");
    parentDiv.classList.add(`todo-${++i}`);

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const item = document.createElement("p");
    const recentTodoItem = todoList[todoList.length - 1];
    const capitalizedRecentTodoItem =
      recentTodoItem.charAt(0).toUpperCase() + recentTodoItem.slice(1);
    item.textContent = capitalizedRecentTodoItem;

    item.setAttribute("class", "text-style");

    const del = document.createElement("button");
    del.textContent = "del";
    del.setAttribute("id", `del-${i}`);
    del.classList.add("del");

    const edit = document.createElement("button");
    edit.textContent = "edit";
    edit.setAttribute("id", "edit");
    edit.classList.add("edit");

    parentDiv.append(checkBox, item, del, edit);
    lists.appendChild(parentDiv);

    // Delete Functionality
    const deleteBtns = document.querySelectorAll(".del");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].onclick = function () {
        const prompt = confirm("Are you sure you want to delete this item?");
        if (prompt) {
          const targetElement = this.parentElement;
          targetElement.style.display = "none";
        }
      };
    }

    // Edit Functionality
    const editBtns = document.querySelectorAll(".edit");
    for (let i = 0; i < editBtns.length; i++) {
      editBtns[i].onclick = function () {
        const editAlert = confirm("Do you want to edit this task?");
        if (editAlert) {
          const targetEditElement = this.parentElement.children[1];
          const editInput = prompt("Edit your task");
          targetEditElement.textContent = editInput;
        }
      };
    }

    // Completed Functionality
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].onclick = function () {
        const parent = this.parentElement.children[1];
        if (checkBoxes[i].checked) {
          parent.style.textDecoration = "line-through";
        } else {
          parent.style.textDecoration = "none";
        }
      };
    }
  }
});
