const cards = document.querySelectorAll(".card");

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
