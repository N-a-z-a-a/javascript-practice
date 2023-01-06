const todoList = [];

const inputValue = document.getElementById("input");
const addBtn = document.querySelector(".submit");

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

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const item = document.createElement("p");
    item.textContent = todoList[todoList.length - 1];
    item.setAttribute("class", "text-style");

    const del = document.createElement("button");
    del.textContent = "del";
    del.setAttribute("id", "del");
    del.classList.add("del");

    const edit = document.createElement("button");
    edit.textContent = "edit";
    edit.setAttribute("id", "edit");
    edit.classList.add("edit");

    parentDiv.append(checkBox, item, del, edit);

    lists.appendChild(parentDiv);
  }
});

if (inputValue.length !== 0) {
  const del = document.getElementById("del");
  del.addEventListener("click", function () {
    console.log("CLICKED");
  });
}
