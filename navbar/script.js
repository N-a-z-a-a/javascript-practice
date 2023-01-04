// Desktop view
function dropdown() {
  const dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

const parentMenu = document.querySelector(".dropdown-item");
parentMenu.addEventListener("click", dropdown);

window.onclick = function (e) {
  if (!e.target.matches(".testimonial")) {
    const dropdowns = document.getElementsByClassName("drop-down");
    for (let i = 0; i < dropdowns.length; i++) {
      const items = dropdowns[i];
      if (items.classList.contains("show")) {
        items.classList.remove("show");
      }
    }
  }
};

// Mobile View
const mobileDropdown = document.querySelector(".mobile-dropdown");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenu.addEventListener("click", onClick);
function onClick() {
  mobileDropdown.classList.toggle("show");
}

const dropdownItems = document.querySelectorAll(".mobile-nav-item");
for (let item of dropdownItems) {
  item.addEventListener("click", function (e) {
    if (mobileDropdown.classList.contains("show")) {
      mobileDropdown.classList.remove("show");
    }
  });
}

const testimonial = document.querySelector(".mobile-testimonial");
testimonial.addEventListener("click", clickFunc);
function clickFunc() {
  const dropdown = document.getElementById("dropdownContent");
  dropdown.classList.toggle("mobile-dropdownContent-show");
}
