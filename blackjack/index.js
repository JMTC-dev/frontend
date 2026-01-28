let cards = [];

let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let player = {
  name: "Jack",
  chips: 145,
};

let message = "";

let startButtonEl = document.getElementById("start-btn-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardButtonEl = document.getElementById("new-card-btn-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards;
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
  if (isAlive && !hasBlackJack) {
    message = "Drawing a new card from the deck!";
    messageEl.textContent = message;
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

startButtonEl.addEventListener("click", (e) => {
  startGame();
});

newCardButtonEl.addEventListener("click", (e) => {
  newCard();
});
