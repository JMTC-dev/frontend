const upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generateButtonEl = document.getElementById("generate-password-btn");
const passwordLengthEl = document.getElementById("password-length");
const numberOfPasswordsEl = document.getElementById("number-of-passwords");
const passwordsEl = document.getElementById("password-container");

const themeSwitchButtonEl = document.getElementById("theme-switch");

themeSwitchButtonEl.addEventListener("click", () => {
  console.log("hello");
  if (themeSwitchButtonEl.checked) {
    document.body.className = "light";
  } else {
    document.body.className = "dark";
  }
});

const upperCaseButtonEl = document.getElementById("uppercase-btn");
const lowerCaseButtonEl = document.getElementById("lowercase-btn");
const numbersButtonEl = document.getElementById("numbers-btn");
const symbolsButtonEl = document.getElementById("symbols-btn");

const copyPasswordStatusEl = document.getElementById("copy-password-status");

let availableCategories = ["upper", "lower", "numbers", "symbol"];

function manageCategories(category, btn) {
  if (!availableCategories.includes(category)) {
    availableCategories.push(category);
    btn.classList.add("active");
  } else {
    availableCategories = availableCategories.filter(
      (item) => item !== category,
    );
    btn.classList.remove("active");
  }
}

function generateRandomPassword(passwordLengthValue) {
  let passwordLength = passwordLengthValue;
  let password = [];

  function generateRandomCharacter() {
    let randomCategoryIndex = Math.floor(
      Math.random() * availableCategories.length,
    );
    let randomCategory = availableCategories[randomCategoryIndex];

    switch (randomCategory) {
      case "upper":
        randomCategory = upperCaseCharacters;
        break;
      case "lower":
        randomCategory = lowerCaseCharacters;
        break;
      case "numbers":
        randomCategory = numberCharacters;
        break;
      case "symbol":
        randomCategory = symbolCharacters;
    }

    let randomCharacterIndex = Math.floor(
      Math.random() * randomCategory.length,
    );
    let randomCharacter = randomCategory[randomCharacterIndex];
    return randomCharacter;
  }

  for (let i = 0; i < passwordLength; i++) {
    let passwordCharacter = generateRandomCharacter();
    password.push(passwordCharacter);
  }

  let finalPassword = password.join("");
  return finalPassword;
}

function createPasswordElement() {
  let passwordContainerEl = document.createElement("div");
  let passwordEl = document.createElement("button");
  passwordEl.classList.add("password");
  passwordEl.textContent = generateRandomPassword(passwordLengthEl.value);
  passwordEl.addEventListener("click", () => {
    updateClipboard(passwordEl.textContent);
  });
  passwordContainerEl.appendChild(passwordEl);
  passwordsEl.appendChild(passwordContainerEl);
}

let timeoutID = null;
function updateClipboard(newClip) {
  function updateText() {
    if (timeoutID) {
      clearInterval(timeoutID);
      timeoutID = null;
    }

    timeoutID ??= setTimeout(() => {
      copyPasswordStatusEl.textContent = "";
    }, 3000);
  }

  navigator.clipboard.writeText(newClip).then(
    () => {
      /* clipboard successfully set */
      copyPasswordStatusEl.textContent = "Copied to clipboard " + newClip;

      updateText();
    },
    () => {
      /* clipboard write failed */
      copyPasswordStatusEl.animate(textFadeIn, textFadeInTiming);

      copyPasswordStatusEl.textContent =
        "Failed to copy to clipboard " + newClip;

      updateText();
    },
  );
}

generateButtonEl.addEventListener("click", () => {
  passwordsEl.innerHTML = "";
  for (let i = 0; i < numberOfPasswordsEl.value; i++) {
    createPasswordElement();
  }
});

upperCaseButtonEl.addEventListener("click", () => {
  manageCategories("upper", upperCaseButtonEl);
});

lowerCaseButtonEl.addEventListener("click", () => {
  manageCategories("lower", lowerCaseButtonEl);
});

numbersButtonEl.addEventListener("click", () => {
  manageCategories("numbers", numbersButtonEl);
});

symbolsButtonEl.addEventListener("click", () => {
  manageCategories("symbol", symbolsButtonEl);
});
