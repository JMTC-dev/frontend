const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

const homeFoulEl = document.getElementById("home-foul");
const guestFoulEl = document.getElementById("guest-foul");

const timerEl = document.getElementById("timer");

const homeScoreBoardEl = document.getElementById("home-scoreboard");
const guestScoreBoardEl = document.getElementById("guest-scoreboard");

const periodValueEl = document.getElementById("period");

const newGameBtnEl = document.getElementById("new-game");

const homeFoulButtonEl = document.getElementById("home-foul-btn-1");
const guestFoulButtonEl = document.getElementById("guest-foul-btn-1");

const manageTimerBtn = document.getElementById("manage-timer-btn");
const resetTimerBtn = document.getElementById("reset-timer-btn");
const timerMinBtn = document.getElementById("timer-min-btn");
const timerSecondBtn = document.getElementById("timer-secs-btn");

const homeScoreIncrementFirstBtn = document.getElementById("home-btn-1");
const homeScoreIncrementSecondBtn = document.getElementById("home-btn-2");
const homeScoreIncrementThirdBtn = document.getElementById("home-btn-3");

const guestScoreIncrementFirstBtn = document.getElementById("guest-btn-1");
const guestScoreIncrementSecondBtn = document.getElementById("guest-btn-2");
const guestScoreIncrementThirdBtn = document.getElementById("guest-btn-3");

const periodDecreaseBtn = document.getElementById("period-decrease-btn");
const periodIncreaseBtn = document.getElementById("period-increase-btn");

let homeScore = 0;
let guestScore = 0;

let homeFoul = 0;
let guestFoul = 0;

let period = 1;

let duration = 0;

let minutes = new Intl.NumberFormat("en", {
  minimumIntegerDigits: 2,
}).format(Math.floor(duration / 60000));

let seconds = new Intl.NumberFormat("en", {
  minimumIntegerDigits: 2,
}).format(Math.floor((duration / 1000) % 60));

function incrementFoul(score, team) {
  switch (team) {
    case "home":
      homeFoul += score;
      homeFoulEl.textContent = homeFoul;
      break;
    case "guest":
      guestFoul += score;
      guestFoulEl.textContent = guestFoul;
  }
}

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

function updatePeriod(type) {
  function increasePeriod() {
    period++;
    if (period >= 5) {
      period = 1;
    }
  }

  function decreasePeriod() {
    period--;
    if (period <= 0) {
      period = 4;
    }
  }

  if (type === "increase") {
    increasePeriod();
  } else {
    decreasePeriod();
  }

  switch (period) {
    case 1:
      periodValueEl.textContent = `${period}st`;
      break;
    case 2:
      periodValueEl.textContent = `${period}nd`;
      break;
    case 3:
      periodValueEl.textContent = `${period}rd`;
      break;
    case 4:
      periodValueEl.textContent = `${period}th`;
      break;
  }
}

function displayTimerValues() {
  minutes = new Intl.NumberFormat("en", {
    minimumIntegerDigits: 2,
  }).format(Math.floor(duration / 60000));

  seconds = new Intl.NumberFormat("en", {
    minimumIntegerDigits: 2,
  }).format(Math.floor((duration / 1000) % 60));

  timerEl.textContent = `${minutes}:${seconds}`;
}

function updateTimer(type) {
  function addMinute() {
    duration += 60000;
  }

  function addTenSeconds() {
    duration += 10000;
  }

  if (type === "minute") {
    addMinute();
  } else {
    addTenSeconds();
  }

  displayTimerValues();
}

let intervalId;
function manageTimer(type) {
  if (
    (type === "start" && manageTimerBtn.textContent === "START TIMER") ||
    (type === "start" && manageTimerBtn.textContent === "RESUME TIMER")
  ) {
    startTimer();
    console.log(intervalId);
  } else if (type === "start" && manageTimerBtn.textContent === "PAUSE TIMER") {
    pauseTimer();
  } else if (type === "reset") {
    resetTimer();
  }

  function startTimer() {
    manageTimerBtn.textContent = "PAUSE TIMER";
    function decreaseTime() {
      duration -= 1000;

      displayTimerValues();

      if (duration <= 0) {
        updatePeriod("increase");
        resetTimer();
      }
    }
    intervalId ??= setInterval(decreaseTime, 1000);
  }

  function pauseTimer() {
    manageTimerBtn.textContent = "RESUME TIMER";
    clearInterval(intervalId);
    intervalId = null;
  }

  function resetTimer() {
    manageTimerBtn.textContent = "START TIMER";
    clearInterval(intervalId);
    intervalId = null;
    duration = 0;
    displayTimerValues();
  }
}

function resetGame() {
  homeScore = 0;
  guestScore = 0;

  homeFoul = 0;
  guestFoul = 0;

  period = 1;

  manageTimer("reset");

  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;

  homeFoulEl.textContent = homeFoul;
  guestFoulEl.textContent = guestFoul;

  periodValueEl.textContent = `${period}st`;

  homeScoreBoardEl.classList.remove("champ");
  guestScoreBoardEl.classList.remove("champ");
}

timerMinBtn.addEventListener("click", (e) => {
  updateTimer("minute");
});

timerSecondBtn.addEventListener("click", (e) => {
  updateTimer("second");
});

periodIncreaseBtn.addEventListener("click", (e) => {
  updatePeriod("increase");
});

periodDecreaseBtn.addEventListener("click", (e) => {
  updatePeriod("decrease");
});

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

homeFoulButtonEl.addEventListener("click", (e) => {
  incrementFoul(1, "home");
});

guestFoulButtonEl.addEventListener("click", (e) => {
  incrementFoul(1, "guest");
});

manageTimerBtn.addEventListener("click", (e) => {
  manageTimer("start");
});

resetTimerBtn.addEventListener("click", (e) => {
  manageTimer("reset");
});

resetGame();
