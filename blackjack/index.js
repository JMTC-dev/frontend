let firstCard = 11;
let secondCard = 10;

let sum = firstCard + secondCard;

if (sum <= 20) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("You've won!");
} else {
  console.log("You've lost!");
}
