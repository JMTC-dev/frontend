const diceDiv = document.getElementById("dice-window");
const enemyHealthElement = document.getElementById("enemy-health");
let enemyHealth = 100;

const diceButton = document.createElement("button");
diceButton.innerHTML = "Roll Dice";

let diceResult = 0;
const diceResultElement = document.createElement("p");
diceResultElement.innerText = `Dice Result: ${diceResult}`;

diceButton.addEventListener("click", (e) => {
  diceResult = Math.floor(Math.random() * 20) + 1;
  enemyHealthElement.innerText = enemyHealth - diceResult;
  diceResultElement.innerText = `Dice Result: ${diceResult}`;
});

diceDiv.appendChild(diceButton);
diceDiv.appendChild(diceResultElement);
