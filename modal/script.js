const modalButton = document.querySelector(".modal-1");

modalButton.addEventListener("click", onClick);
function onClick() {
  const modal = document.querySelector(".modal-container");
  modal.style.display = "flex";
  console.log("worked");
}

setTimeout(onClick, 5000); //This brings up the modal after a set number of time.

window.onclick = function (e) {
  if (!e.target.matches(".modal-1") && !e.target.matches(".modal")) {
    const modal = document.querySelectorAll(".modal-container");
    for (let i = 0; i < modal.length; i++) {
      const items = modal[i];
      if (items.style.display === "flex") {
        items.style.display = "none";
      }
    }
  }
};
