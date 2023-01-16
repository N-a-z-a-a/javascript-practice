const btn = document.getElementById("button");
btn.addEventListener("click", function () {
  const msg = document.getElementById("msg");
  msg.textContent = "Please be patient, while we get your data....";

  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => {
      const arr = [];
      arr.push(data);
      if (arr.length !== 0) {
        msg.style.display = "none";

        const searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "Search by Country...";
        searchInput.classList.add("search");
        const buttonDiv = document.querySelector(".button");
        buttonDiv.insertAdjacentElement("afterend", searchInput);

        data.map((names) => {
          const parentDiv = document.createElement("div");
          parentDiv.append(names.name);
          parentDiv.classList.add("country");
          const countriesList = document.getElementById("countriesList");
          countriesList.append(parentDiv);
        });

        const search = document.querySelector(".search");
        search.onkeyup = function () {
          const input = search.value.toLowerCase();
          const countries = document.getElementsByClassName("country");
          for (let i = 0; i < countries.length; i++) {
            if (!countries[i].innerHTML.toLowerCase().includes(input)) {
              countries[i].style.display = "none";
            } else {
              countries[i].style.display = "block";
            }
          }
        };
      }
    });
});

//restcountries.com/v2/name/${country}
const button1 = document.getElementById("a");
button1.addEventListener("click", function () {
  const anotherInput = document.querySelector(".search2");
  value2 = anotherInput.value.toLowerCase();

  fetch(`https://restcountries.com/v2/name/${value2}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
