const levels = document.querySelectorAll(".level");
const startBtn = document.querySelector(".start-btn");
const levelBox = document.querySelector(".level-box");

// Page-2
const backBtn = document.querySelector(".back");
const page2 = document.querySelector(".page-2");

// Page-1 listeners
levels.forEach((level) => {
  level.addEventListener("click", () => {
    levelBox.classList.add("displayNone");
    page2.classList.remove('displayNone')
  });
});

// Page-2 listeners
backBtn.addEventListener("click", () => {
  levelBox.classList.remove("displayNone");
  page2.classList.add("displayNone");
});
