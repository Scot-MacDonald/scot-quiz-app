const mode = document.getElementById("mode");

mode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
