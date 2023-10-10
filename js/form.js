// const form = document.querySelector('[data-js="form"]');
// const card = document.querySelector(".card");
// const main = document.querySelector('[data-js="main"]');

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   console.log(formData);

//   const newCard = Object.fromEntries(formData);

//   console.log(newCard);

//   //   const newAnswer = `<h2 class="card__question">${newCard.question}</div><p class="card__answer"> ${newCard.answer} </p><li class="card__tags__tag"> ${newCard.tag}</li>`;

//   //   const actualList = card.innerHTML;
//   //   card.innerHTML = newAnswer;
// });

// const h2 = document.createElement("h2");
// h2.classList.add("card__question");
// article.append(h2);
// h2.textContent = newCard.question;

// const cardForm = document.querySelector('[data-js="card-form"]');
// const displayCard = document.querySelector('[data-js="card-container"]');
// ////////////////////////////////////////
// const article = document.createElement("article");
// const button = document.createElement("button");

// mmain.append(article); // placing the created article at the end of the body
// article.classList.add("card");
// // placing the created button into the article

// button.classList.add("card__bookmarks");
// article.append(button);

// const h2 = document.createElement("h2");
// h2.classList.add("card__question");
// article.append(h2);
// h2.textContent = newCard.question;
// // button.classList.add("card__button");
// // article.append(button);

// const p = document.createElement("p");
// p.classList.add("card__answer");
// article.append(p);

// const li = document.createElement("li");
// li.classList.add("tag");
// article.append(li);

const form = document.querySelector('[data-js="form"]');
const card = document.querySelector(".card");
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const newCard = Object.fromEntries(formData);

  //Create HTML elements for the new card data
  const cardContainer = document.createElement("article");
  cardContainer.classList.add("card");

  const bookmarkButton1 = document.createElement("button");
  bookmarkButton1.classList.add("card__bookmarks");
  bookmarkButton1.setAttribute("data-js", "button-selected");
  bookmarkButton1.innerHTML = `
    <i class="fa-regular fa-bookmark" style="color: #000000"></i>
  `;
  const bookmarkButton2 = document.createElement("button");
  bookmarkButton2.classList.add("card__bookmarks");
  bookmarkButton2.setAttribute("data-js", "button-selected");
  bookmarkButton2.innerHTML = `
    <i class="fa-regular fa-bookmark" style="color: #000000"></i>
  `;

  const questionElement = document.createElement("h2");
  questionElement.classList.add("card__question");
  questionElement.textContent = newCard.question;

  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("card__button");
  showAnswerButton.textContent = "Show Answer";

  const answerElement = document.createElement("p");
  answerElement.classList.add("card__answer");
  answerElement.textContent = newCard.answer;

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tags");

  const tagElement = document.createElement("li");
  tagElement.classList.add("card__tags__tag");
  tagElement.textContent = newCard.tag;

  tagList.appendChild(tagElement);

  // Append the elements to the card container
  cardContainer.appendChild(bookmarkButton1);
  cardContainer.appendChild(bookmarkButton2);
  cardContainer.appendChild(questionElement);
  cardContainer.appendChild(showAnswerButton);
  cardContainer.appendChild(answerElement);
  cardContainer.appendChild(tagList); // Append the ul with the tag li

  // Append the card container to the main container
  main.appendChild(cardContainer);

  // Clear the form
  event.target.reset();
});

///////COUNTER////////

console.clear();

const questionElementA = document.querySelector('[data-js="question"]');
const amountLeftA = document.querySelector('[data-js="amountLeft"]');
const maxLengthA = questionElementA.getAttribute("maxlength");

const questionElementB = document.querySelector('[data-js="answer"]');
const amountLeftB = document.querySelector('[data-js="amountLeftB"]');
const maxLengthB = questionElementB.getAttribute("maxlength");

const updateAmountLeft = (element, value) => {
  element.innerText = value;
};

updateAmountLeft(amountLeftA, maxLengthA);
updateAmountLeft(amountLeftB, maxLengthB);

questionElementA.addEventListener("input", () => {
  updateAmountLeft(amountLeftA, maxLengthA - questionElementA.value.length);
});

questionElementB.addEventListener("input", () => {
  updateAmountLeft(amountLeftB, maxLengthB - questionElementB.value.length);
});
