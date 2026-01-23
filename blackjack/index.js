let firstCard = 11;
let secondCard = 10;
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

let startButtonEl = document.getElementById("start-btn-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardButtonEl = document.getElementById("new-card-btn-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've won!";
    hasBlackJack = true;
  } else {
    message = "You've lost!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  message = "Drawing a new card from the deck!";
  messageEl.textContent = message;
  let card = 6;
  sum += card;
  renderGame();
}

startButtonEl.addEventListener("click", (e) => {
  startGame();
});

newCardButtonEl.addEventListener("click", (e) => {
  newCard();
});
