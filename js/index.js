//////// Answer Button //////////

// const toggleButtons = document.querySelector('[data-js="toggle-button"]');
// const answer = document.querySelector('[data-js="answer"]');

// toggleButtons.forEach(function (toggleButton) {
//   const answer = toggleButton.querySelector("answer");

//   toggleButtons.addEventListener("click", function () {
//     if (answer.classList.contains("hidden")) {
//       answer.classList.remove("hidden");
//       toggleButtons.textContent = "Hide Answer";
//     } else {
//       answer.classList.add("hidden");
//       toggleButtons.textContent = "Show Answer";
//     }
//   });
// });

///
const toggleButtons = document.querySelectorAll('[data-js="toggle-button"]');

toggleButtons.forEach((toggleButton) => {
  const answer = toggleButton.nextElementSibling;

  toggleButton.addEventListener("click", function () {
    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      toggleButton.textContent = "Hide Answer";
    } else {
      answer.classList.add("hidden");
      toggleButton.textContent = "Show Answer";
    }
  });
});
