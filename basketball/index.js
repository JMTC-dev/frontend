const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

const homeScoreBoardEl = document.getElementById("home-scoreboard");
const guestScoreBoardEl = document.getElementById("guest-scoreboard");

const newGameBtnEl = document.getElementById("new-game");

const homeScoreIncrementFirstBtn = document.getElementById("home-btn-1");
const homeScoreIncrementSecondBtn = document.getElementById("home-btn-2");
const homeScoreIncrementThirdBtn = document.getElementById("home-btn-3");

const guestScoreIncrementFirstBtn = document.getElementById("guest-btn-1");
const guestScoreIncrementSecondBtn = document.getElementById("guest-btn-2");
const guestScoreIncrementThirdBtn = document.getElementById("guest-btn-3");

let homeScore = 0;
let guestScore = 0;

function incrementScore(score, team) {
  switch (team) {
    case "home":
      homeScore += score;
      homeScoreEl.textContent = homeScore;
      break;
    case "guest":
      guestScore += score;
      guestScoreEl.textContent = guestScore;
  }

  if (homeScore > guestScore) {
    guestScoreBoardEl.classList.remove("champ");
    homeScoreBoardEl.classList.add("champ");
  } else if (homeScore === guestScore) {
    homeScoreBoardEl.classList.remove("champ");
    guestScoreBoardEl.classList.remove("champ");
  } else {
    homeScoreBoardEl.classList.remove("champ");
    guestScoreBoardEl.classList.add("champ");
  }
}

function resetGame() {
  homeScore = 0;
  guestScore = 0;

  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;

  homeScoreBoardEl.classList.remove("champ");
  guestScoreBoardEl.classList.remove("champ");
}

newGameBtnEl.addEventListener("click", (e) => {
  resetGame();
});

homeScoreIncrementFirstBtn.addEventListener("click", (e) => {
  incrementScore(1, "home");
});
homeScoreIncrementSecondBtn.addEventListener("click", (e) => {
  incrementScore(2, "home");
});
homeScoreIncrementThirdBtn.addEventListener("click", (e) => {
  incrementScore(3, "home");
});

guestScoreIncrementFirstBtn.addEventListener("click", (e) => {
  incrementScore(1, "guest");
});
guestScoreIncrementSecondBtn.addEventListener("click", (e) => {
  incrementScore(2, "guest");
});
guestScoreIncrementThirdBtn.addEventListener("click", (e) => {
  incrementScore(3, "guest");
});
