//////// DARK MODE //////////

const darkMode = document.querySelector('[data-js="darkMode"]');

darkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
