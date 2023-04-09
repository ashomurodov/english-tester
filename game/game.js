"use strict";
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
const time = document.querySelector(".time");
const correctAnswer = document.querySelector(".correct span");
const incorrectAnswer = document.querySelector(".incorrect span");

// All results variable
const allResultSection = document.querySelector(".all-results");
const backResultArrow = document.querySelector(".back-arrow");
const userName = document.querySelector(".user p");

// interval
let timeInterval;

// Page-1 listeners
levels.forEach((level, idx) => {
  level.addEventListener("click", () => {
    levelBox.classList.add("displayNone");
    page2.classList.remove("displayNone");
    if (idx === 0) randomWordsGenerator(easyWords);
    else if (idx === 1) randomWordsGenerator(mediumWords);
    else randomWordsGenerator(hardWords);
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
});

// Playground listeners
finishBtn.addEventListener("click", () => {
  resultSection.classList.remove("displayNone");
  playgroundSection.classList.add("displayNone");
});

// function getRandomLocation() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   const x = Math.random() * (width - 200) + 100;
//   const y = Math.random() * (height - 200) + 100;
//   return { x, y };
// }

function createWords(randomNums, collectionWords) {
  cards.forEach((item) => {
    item.style.rotate = `${Math.random() * 90}deg`;
  });
  console.log(collectionWords);
  let j = 0;
  for (let i = 0; i < 20; i++) {
    let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    cards[
      randomNums[i]
    ].innerHTML = `<p style="background-color:#${randomColor1};">${collectionWords[j][0]}</p>`;
    cards[
      randomNums[i + 1]
    ].innerHTML = `<p style="background-color:#${randomColor2};">${collectionWords[j][1]}</p>`;
    j++;
    i++;
  }
  const allParagraph = document.querySelectorAll(".card p");
  let check = [];
  let pies = []
  allParagraph.forEach((p) => {
    p.addEventListener("click", (e) => {
      pies.push(p);
      collectionWords.forEach((arr, idx) => {
        if (arr.includes(p.textContent)) {
          
          check.push(idx);
          
          if (check.length === 2) {
            if (check[0] === check[1]) {
              pies.forEach((p) => {
                p.classList.add('displayNone');
              })
              check = [];
              pies = [];
            } else {check = []; pies = []};
          }
        }
      });
    });
  });
}

// Results Modal listeners
allResultBtn.addEventListener("click", () => {
  allResultSection.classList.remove("displayNone");
  resultSection.classList.add("displayNone");
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

allResultBtn.addEventListener("click", () => {
  allResultSection.classList.remove("displayNone");
  resultSection.classList.add("displayNone");
});

// All results listener
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

function startTime() {
  if (time <= 0) {
    clearInterval(timeInterval);
    // GameOver function
  }

  timeBar.style.width = `${time}%`;
}

// startTime();
userName.textContent = window.localStorage.getItem("userName");

// Taker random words Function
function randomWordsGenerator(collectionWords) {
  let randomNums = [];
  for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 20);
    if (randomNums.includes(num)) i--;
    else randomNums.push(num);
  }
  createWords(randomNums, collectionWords);
}
