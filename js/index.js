const bodyElement = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');
const answer = document.querySelector('[data-js="answer"]');

toggleButton.addEventListener("click", function () {
  if (answer.style.display === "block") {
    answer.style.display = "none";
    toggleButton.textContent = "Hide Answer";
  } else {
    answer.style.display = "block";
    toggleButton.textContent = "Show Answer";
  }
});
