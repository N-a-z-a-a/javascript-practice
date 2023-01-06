const button = document.querySelector(".flip");
button.addEventListener("click", onClick);

function onClick() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  const color = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = color;
  const title = document.querySelector(".title");
  title.textContent = `Color: ${color}`;

  if (color === "rgb(255, 255, 255") {
    title.style.color = "black";
  } else {
    title.style.color = "white";
  }
}
