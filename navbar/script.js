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
const mobileMenu = document.getElementById("mobileMenu");
mobileMenu.addEventListener("click", onClick);

const mobileDropdown = document.querySelector(".mobile-dropdown");

function onClick() {
  mobileDropdown.classList.toggle("show");
}

const dropdownItems = document.querySelectorAll(".mobile-nav-item");
for (let item of dropdownItems) {
  item.addEventListener("click", function () {
    if (mobileDropdown.classList.contains("show")) {
      mobileDropdown.classList.remove("show");
    }
  });
}
