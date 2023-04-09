function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

const words = ["hello", "world", "hello", "world", "world", "hello", "world", "hello", "world", "world", "hello", "world", "hello", "world", "world", "hello", "world", "hello", "world", "world"];

function createWords() {
  words.forEach((item, idx) => {
    const word = document.createElement("div");
    word.classList.add("random-word");
    word.textContent = item;
    const { x, y } = getRandomLocation();
    word.style.top = `${y}px`;
    word.style.left = `${x}px`;
    word.style.rotate = `${Math.random() * 360}deg`;
    main.appendChild(word);
  });
}

createWords();
