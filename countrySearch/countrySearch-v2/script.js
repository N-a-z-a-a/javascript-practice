const search = document.getElementById("search");

search.onfocus = function () {
  search.placeholder = "";
  search.style.padding = "10px";
};

search.onblur = function () {
  search.placeholder = "Enter a country...";
};

const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const input = search.value.toLowerCase();
  search.value = "";
  fetch(`https://restcountries.com/v2/name/${input}`)
    .then((res) => res.json())
    .then((data) => {
      data.map((country) => {
        const table = document.querySelector(".table");
        table.style.display = "table";

        const row = document.createElement("tr");

        const countryName = document.createElement("td");
        countryName.classList.add("items");
        countryName.textContent = country.name;

        const countryCapital = document.createElement("td");
        countryCapital.classList.add("items");
        countryCapital.textContent = country.capital;

        const countryFlag = document.createElement("td");
        countryFlag.classList.add("items", "flag");
        const flag = document.createElement("img");
        flag.src = country.flag;
        console.log(flag);
        countryFlag.appendChild(flag);

        const callingCodes = document.createElement("td");
        callingCodes.classList.add("items");
        callingCodes.textContent = "+" + country.callingCodes;

        const currencies = document.createElement("td");
        currencies.classList.add("items");
        currencies.textContent = `${country.currencies[0].name} (${country.currencies[0].symbol})`;

        row.append(
          countryName,
          countryCapital,
          countryFlag,
          callingCodes,
          currencies
        );

        const tableBody = document.querySelector(".body");
        tableBody.append(row);
      });
    });
});

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const input = search.value.toLowerCase();
    search.value = "";
    search.placeholder = "Enter a country...";
    fetch(`https://restcountries.com/v2/name/${input}`)
      .then((res) => res.json())
      .then((data) => {
        data.map((country) => {
          const table = document.querySelector(".table");
          table.style.display = "table";

          const row = document.createElement("tr");

          const countryName = document.createElement("td");
          countryName.classList.add("items");
          countryName.textContent = country.name;

          const countryCapital = document.createElement("td");
          countryCapital.classList.add("items");
          countryCapital.textContent = country.capital;

          const countryFlag = document.createElement("td");
          countryFlag.classList.add("items", "flag");
          const flag = document.createElement("img");
          flag.src = country.flag;
          console.log(flag);
          countryFlag.appendChild(flag);

          const callingCodes = document.createElement("td");
          callingCodes.classList.add("items");
          callingCodes.textContent = "+" + country.callingCodes;

          const currencies = document.createElement("td");
          currencies.classList.add("items");
          currencies.textContent = `${country.currencies[0].name} (${country.currencies[0].symbol})`;

          row.append(
            countryName,
            countryCapital,
            countryFlag,
            callingCodes,
            currencies
          );

          const tableBody = document.querySelector(".body");
          tableBody.append(row);
        });
      });
  }
});
