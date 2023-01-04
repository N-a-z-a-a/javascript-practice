let count = 0;
let value = document.querySelector(".count");

const btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  btn.addEventListener("click", function (e) {
    if (e.target.id === "add") {
      let addValue = ++count;
      value.innerText = addValue;
    } else if (e.target.id === "subs") {
      let subtractValue = --count;
      value.innerText = subtractValue;
    } else {
      count = 0;
      value.innerText = count;
    }
  });
}
