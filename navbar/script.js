function dropdown() {
  const dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

const parentMenu = document.querySelector(".dropdown-item");
parentMenu.addEventListener("click", dropdown);

window.onclick = function (e) {
  if (!e.target.matches(".testimonial")) {
    const dropdowns = document.getElementsByClassName("dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      const items = dropdowns[i];
      if (items.classList.contains("show")) {
        items.classList.remove("show");
      }
    }
  }
};
