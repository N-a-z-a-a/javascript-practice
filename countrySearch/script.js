const btn = document.getElementById("button");
btn.addEventListener("click", function () {
  const msg = document.getElementById("msg");
  msg.textContent = "Please be patient, while we get your data....";
  
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => {
      const arr = [];
      arr.push(data);
      console.log(data);
      if (arr.length !== 0) {
        msg.style.display = "none";
        data.map((names) => {
          const parentDiv = document.createElement("div");
          parentDiv.append(names.name);
          const countriesList = document.getElementById("countriesList");
          countriesList.append(parentDiv);
          console.log(names.name);
        });
      }
    });
});
