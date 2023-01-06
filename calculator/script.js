const keys = document.querySelectorAll(".keys");

const result = document.getElementById("result");
let value = "";

for (let key of keys) {
  key.addEventListener("click", function (e) {
    value += e.target.innerText;
    result.textContent = value;
  });
}

const equals = document.getElementById("equals");
equals.addEventListener("click", function () {
  result.textContent = eval(value);
});

const clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  result.textContent = "";
  value = "";
});
