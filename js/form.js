//////// FORM //////////

const form = document.querySelector('[data-js="form"]');
const card = document.querySelector(".card");
const main = document.querySelector('[data-js="main"]');

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);

//   const newCard = Object.fromEntries(formData);

//   const cardContainer = document.createElement("article");
//   cardContainer.classList.add("card");

//   const bookmarkButton1 = document.createElement("button");
//   bookmarkButton1.classList.add("card__bookmarks");
//   bookmarkButton1.setAttribute("data-js", "button-selected");
//   bookmarkButton1.innerHTML = `
//     <i class="fa-regular fa-bookmark" style="color: #000000"></i>
//   `;

//   const questionElement = document.createElement("h2");
//   questionElement.classList.add("card__question");
//   questionElement.textContent = newCard.question;

//   const showAnswerButton = document.createElement("button");
//   showAnswerButton.classList.add("card__button");
//   showAnswerButton.textContent = "Show Answer";
//   showAnswerButton.setAttribute("data-js", "toggle-button");

//   const answerElement = document.createElement("p");
//   answerElement.classList.add("card__answer", "hidden");
//   answerElement.textContent = newCard.answer;
//   answerElement.setAttribute("data-js", "answer");

//   const tagList = document.createElement("ul");
//   tagList.classList.add("card__tags");

//   const tagElement = document.createElement("li");
//   tagElement.classList.add("card__tags__tag");
//   tagElement.textContent = newCard.tag;

//   tagList.appendChild(tagElement);

//   cardContainer.appendChild(bookmarkButton1);
//   cardContainer.appendChild(questionElement);
//   cardContainer.appendChild(showAnswerButton);
//   cardContainer.appendChild(answerElement);
//   cardContainer.appendChild(tagList);

//   main.appendChild(cardContainer);

//   // NEED TO ADD 2 EVENTlISTNERS AFTER ADDED TO THE MAIN

//   //////// TO GET BOOKMARK BUTTONS WORKING //////////

// ... (previous code)

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const newCard = Object.fromEntries(formData);
  const tagsArray = newCard.tags.split(",").map((tag) => tag.trim()); // Split and trim tags

  const cardContainer = document.createElement("article");
  cardContainer.classList.add("card");

  const bookmarkButton1 = document.createElement("button");
  bookmarkButton1.classList.add("card__bookmarks");
  bookmarkButton1.setAttribute("data-js", "button-selected");
  bookmarkButton1.innerHTML = `
    <i class="fa-regular fa-bookmark" style="color: #000000"></i>
  `;

  const questionElement = document.createElement("h2");
  questionElement.classList.add("card__question");
  questionElement.textContent = newCard.question;

  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("card__button");
  showAnswerButton.textContent = "Show Answer";
  showAnswerButton.setAttribute("data-js", "toggle-button");

  const answerElement = document.createElement("p");
  answerElement.classList.add("card__answer", "hidden");
  answerElement.textContent = newCard.answer;
  answerElement.setAttribute("data-js", "answer");

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tags");

  // Create a list item for each tag
  tagsArray.forEach((tag) => {
    const tagElement = document.createElement("li");
    tagElement.classList.add("card__tags__tag");
    tagElement.textContent = tag;
    tagList.appendChild(tagElement);
  });

  cardContainer.appendChild(bookmarkButton1);
  cardContainer.appendChild(questionElement);
  cardContainer.appendChild(showAnswerButton);
  cardContainer.appendChild(answerElement);
  cardContainer.appendChild(tagList);

  main.appendChild(cardContainer);

  // NEED TO ADD 2 EVENT LISTENERS AFTER ADDED TO THE MAIN
  // ... (previous code)

  const bookmarkButton2 = cardContainer.querySelector(
    '[data-js="button-selected"]'
  );
  bookmarkButton2.addEventListener("click", function () {
    const icon = bookmarkButton2.querySelector("i");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
  });

  //////// TO GET ANSWER BUTTON WORKING //////////
  showAnswerButton.addEventListener("click", () => {
    answerElement.classList.toggle("hidden");
  });

  event.target.reset();
});

//////// COUNTER //////////

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
