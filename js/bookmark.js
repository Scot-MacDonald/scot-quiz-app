const buttons = document.querySelectorAll('[data-js="button-selected"]');

// buttons.forEach(function (button) {
//   const icon = button.querySelector("i");

buttons.addEventListener("click", (button) => {
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
});
// });
