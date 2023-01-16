const search = document.getElementById("search");
console.log(search);

search.onfocus = function () {
  search.placeholder = "";
  search.style.padding = "20px";
};

search.onblur = function () {
  search.placeholder = "Enter a country...";
  search.style.padding = "20px";
};

const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const input = search.value.toLowerCase();
  search.value = "";
  fetch(`https://restcountries.com/v2/name/${input}`)
    .then((res) => res.json())
    .then((data) => {
      data.map((country) => {
        console.log(country.currencies[0]);
        const containingDiv = document.createElement("div");
        containingDiv.classList.add("country-container");

        const countryName = document.createElement("p");
        countryName.textContent = country.name;

        const capital = document.createElement("p");
        capital.textContent = country.capital;

        const denonym = document.createElement("p");
        denonym.textContent = country.denonym;

        const region = document.createElement("p");
        region.textContent = country.region;

        const timezones = document.createElement("p");
        timezones.textContent = country.timezones;

        const flag = document.createElement("img");
        flag.src = country.flag;
        flag.style.height = "50px";
        flag.style.width = "50px";

        const callingCodes = document.createElement("p");
        callingCodes.textContent = "+" + country.callingCodes;

        const currencies = document.createElement("p");
        currencies.textContent = `${country.currencies[0].name} (${country.currencies[0].symbol})`;

        containingDiv.append(
          countryName,
          capital,
          denonym,
          region,
          timezones,
          flag,
          callingCodes,
          currencies
        );

        const results = document.querySelector(".results");
        results.appendChild(containingDiv);
      });

      console.log(data);
    });
});

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const input = search.value.toLowerCase();
    fetch(`https://restcountries.com/v2/name/${input}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
});
