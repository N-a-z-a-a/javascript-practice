const key = "544eb5a9c2e94d84842130842231001";
const baseURL = "https://api.weatherapi.com/v1";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((success) => {
    const coords = success.coords;
    const lon = coords.longitude;
    const lat = coords.latitude;

    requestURL = `${baseURL}/current.json?key=${key}&q=${lat},${lon}&aqi=no`;

    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);

          const arr = [];
          arr.push(data);
          if (arr.length !== 0) {
            const info = document.querySelector(".message");
            info.textContent = "";
          }

          const mapIcon = document.querySelector(".map");
          mapIcon.style.display = "block";
          mapIcon.src = "./assets/mapIcon.jpeg";
          const location = document.querySelector(".place");
          location.textContent = data.location.name;

          const dateAndTime = document.querySelector(".date-time");
          dateAndTime.textContent = data.location.localtime + "pm";

          const icon = document.querySelector(".icon");
          icon.style.display = "block";
          icon.src = data.current.condition.icon;

          const temp = document.querySelector(".value");
          temp.textContent = `${data.current.temp_c}°C`;
          temp.addEventListener("click", function () {
            if (temp.textContent.includes("°C")) {
              temp.textContent = `${data.current.temp_f}°F`;
            } else {
              temp.textContent = `${data.current.temp_c}°C`;
            }
          });

          const condition = document.querySelector(".text");
          condition.textContent = data.current.condition.text;

          const compare = document.getElementById("temp");
          compare.textContent = `${data.current.temp_c}°C/${Math.floor(
            data.current.temp_f
          )}°F`;

          const feelsLike = document.querySelector(".feels");
          feelsLike.textContent = `Feels like ${data.current.feelslike_c}°C`;
        }
      });
  });
}
