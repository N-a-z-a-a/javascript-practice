const key = "544eb5a9c2e94d84842130842231001";
const baseURL = "http://api.weatherapi.com/v1";
// requestURL = `${baseURL}/current.json?key=${key}&q=${lat},${lon}`;
// "https://api.weatherapi.com/v1/current.json?key=544eb5a9c2e94d84842130842231001&q=Nigeria&aqi=no";

// fetch(requestURL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const success = (position) => console.log(position);
// const error = (error) => console.log(error);

// navigator.geolocation.getCurrentPosition(success, error)

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success.coords);
    const coords = success.coords;
    const lon = coords.longitude;
    const lat = coords.latitude;

    requestURL = `${baseURL}/current.json?key=${key}&q=${lat},${lon}&aqi=no`;

    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);

          const mapIcon = document.querySelector(".map");
          mapIcon.src = "./assets/mapIcon.jpeg";
          const location = document.querySelector(".place");
          location.textContent = data.location.name;

          const dateAndTime = document.querySelector(".date-time");
          dateAndTime.textContent = data.location.localtime + "pm";

          const icon = document.querySelector(".icon");
          icon.src = data.current.condition.icon;

          const temp = document.querySelector(".value");
          temp.textContent = `${data.current.temp_c}°C`;

          const condition = document.querySelector(".text");
          condition.textContent = data.current.condition.text;

          const compare = document.getElementById("temp");
          compare.textContent = `${data.current.temp_c}°C/${Math.floor(
            data.current.temp_f
          )}°F`;

          const feelsLike = document.querySelector(".feels");
          feelsLike.textContent = `Feels  like ${data.current.feelslike_c}°C`;
        } else {
          const info = document.querySelector(".message");
          info.textContent = "Please wait while your data is fetching";
        }
      });
  });
}
