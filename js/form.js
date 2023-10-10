// const form = document.querySelector('[data-js="form"]');
// const card = document.querySelector(".card");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   console.log(formData);

//   const newCard = Object.fromEntries(formData);

//   console.log(newCard);

//   const newAnswer = `<h2 class="card__question">${newCard.question}</div><p class="card__answer"> ${newCard.answer} </p><li class="card__tags__tag"> ${newCard.tag}</li>`;

//   const actualList = card.innerHTML;
//   card.innerHTML = newAnswer;
// });

const form = document.querySelector('[data-js="card-form"]');
const displayCard = document.querySelector('[data-js="card-container"]');
