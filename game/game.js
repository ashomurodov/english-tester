// Global variables
const easyWords = [
  ["home", "uy"],
  ["dog", "it"],
  ["cat", "mushik"],
  ["goose", "g'oz"],
  ["horse", "ot"],
  ["car", "moshina"],
  ["mouse", "sichqon"],
  ["phone", "telefon"],
  ["eye", "ko'z"],
  ["foot", "oyoq"],
];

const mediumWords = [
  ["laptop", "noutbook"],
  ["headphone", "quloqchin"],
  ["charger", "quvatlagich"],
  ["keyboard", "klaviatura"],
  ["rooster", "xo'roz"],
  ["air-condition", "sovutgich"],
  ["fridge", "muzlatgich"],
  ["library", "kutubxona"],
  ["pillow", "yostiq"],
  ["stairs", "zinapoya"],
];

const hardWords = [
  ["allocate", "ajratish"],
  ["prospect", "istiqbol"],
  ["abandon", "quvatlagich"],
  ["frequency", "chastota"],
  ["candid", "samimiy"],
  ["embrace", "quchoqlash"],
  ["wayward", "qaysar"],
  ["logical", "mantiqiy"],
  ["eccentric", "ajib"],
  ["temper", "jahl"],
];

// Level variables
const levels = document.querySelectorAll(".level");
const levelBox = document.querySelector(".level-box");

// Page-2 variables
const startBtn = document.querySelector(".start-btn");
const backBtn = document.querySelector(".back");
const page2 = document.querySelector(".page-2");

// playground variables
const playgroundSection = document.querySelector(".playground");
const finishBtn = document.querySelector(".finish");
const cards = document.querySelectorAll(".card");

// Results page variables
const resultSection = document.querySelector(".result-wrapper ");
const allResultBtn = document.querySelector(".all-result-btn");
const restartBtn = document.querySelector(".restart-btn");
const changeLevelBtn = document.querySelector(".change-level-btn");
const time = document.querySelector(".timeG");
const correctAnswer = document.querySelector(".correct span");
const incorrectAnswer = document.querySelector(".incorrect span");

// All results variable
const allResultSection = document.querySelector(".all-results");
const backResultArrow = document.querySelector(".back-arrow");
const userName = document.querySelector(".user p");

// interval
let timeInterval;
//Audios
const startAudio = new Audio();
startAudio.src = "/assets/audios/start.mp3";

// Page-1 listeners
levels.forEach((level) => {
  level.addEventListener("click", () => {
    levelBox.classList.add("displayNone");
    page2.classList.remove("displayNone");
  });
});

// Page-2 listeners
backBtn.addEventListener("click", () => {
  levelBox.classList.remove("displayNone");
  page2.classList.add("displayNone");
});
startBtn.addEventListener("click", () => {
  timeInterval = setInterval(startTime, 1000);
  page2.classList.add("displayNone");
  playgroundSection.classList.remove("displayNone");
  startAudio.play();
});

// Playground listeners
finishBtn.addEventListener("click", () => {
  resultSection.classList.remove("displayNone");
  playgroundSection.classList.add("displayNone");
  clearInterval(timeInterval);
  finishGame();
});

// function getRandomLocation() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   const x = Math.random() * (width - 200) + 100;
//   const y = Math.random() * (height - 200) + 100;
//   return { x, y };
// }

function createWords() {
  cards.forEach((item, idx) => {
    const word = document.createElement("div");
    word.classList.add("random-word");
    word.textContent = "HELLO";
    word.style.rotate = `${Math.random() * 90}deg`;
    item.appendChild(word);
  });
}

createWords();

// Results Modal listeners
allResultBtn.addEventListener("click", () => {
  allResultSection.classList.remove("displayNone");
  resultSection.classList.add("displayNone");
  showAllResults();
});
restartBtn.addEventListener("click", () => {
  playgroundSection.classList.remove("displayNone");
  resultSection.classList.add("displayNone");
});
changeLevelBtn.addEventListener("click", () => {
  levelBox.classList.remove("displayNone");
  resultSection.classList.add("displayNone");
});

// All results listener
backResultArrow.addEventListener("click", () => {
  allResultSection.classList.add("displayNone");
  resultSection.classList.remove("displayNone");
});
userName.textContent = window.localStorage.getItem("userName");
// time.textContent = window.localStorage.setItem("time", `${time}`);
// correctAnswer.textContent = window.localStorage.setItem("correctAnswer", `${correctAnswer}`);
// incorrectAnswer.textContent = window.localStorage.setItem("incorrectAnswer", `${incorrectAnswer}`);

allResultBtn.addEventListener("click", () => {
  allResultSection.classList.remove("displayNone");
  resultSection.classList.add("displayNone");
});

// All results listener
backResultArrow.addEventListener("click", () => {
  allResultSection.classList.add("displayNone");
  resultSection.classList.remove("displayNone");
});

// Playground time;
const timeBar = document.querySelector(".time-bar");
let timeE = 90;
function startTime() {
  timeE -= 0.75;
  if (timeE <= 0) {
    clearInterval(timeInterval);
    // GameOver function
  }
  console.log("timeee", timeE);
  timeBar.style.width = `${timeE}%`;
}

// startTime();

let correctE = 10,
  incorrectE = 45;

const resultBox = document.querySelector(".results-box");
let historyGame = JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : [];

function finishGame() {
  const MinuteCurrent = Math.floor(timeE / 60);
  const SecundeCurrent = Math.floor(timeE % 60);
  const result = `${MinuteCurrent}:${SecundeCurrent}`;
  clearInterval(timeInterval);
  time.textContent = result;
  console.log(time);
  correctAnswer.textContent = correctE;
  incorrectAnswer.textContent = incorrectE;
  historyGame.push({ time: result, correctAnswer: correctE, incorrectAnswer: incorrectE });
  console.log(result, correctE, incorrectE);
  setItem();
}

function setItem() {
  localStorage.setItem("list", JSON.stringify(historyGame));
}

function showAllResults() {
  historyGame.forEach((item, idx) => {
    const time = item.time;
    const correct = item.correctAnswer;
    const incorrect = item.incorrectAnswer;
    const result = document.createElement("div");
    result.classList.add("result");
    for (let i = 0; i < 3; i++) {
      const el = document.createElement("p");
      if (i == 0) {
        el.classList.add("time");
        el.innerHTML = time;
      } else if (i == 1) {
        el.classList.add("correct");
        el.innerHTML = "correct: " + correct;
      } else if (i == 2) {
        el.classList.add("wrong");
        el.innerHTML = "wrong: " + incorrect;
      }

      result.appendChild(el);
    }
    resultBox.appendChild(result);
  });
}
