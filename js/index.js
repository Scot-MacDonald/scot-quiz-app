const toggleButton = document.querySelector('[data-js="toggle-button"]');
const answer = document.querySelector('[data-js="answer"]');

toggleButton.addEventListener("click", function () {
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    toggleButton.textContent = "Hide Answer";
  } else {
    answer.classList.add("hidden");
    toggleButton.textContent = "Show Answer";
  }
});
