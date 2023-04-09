const submitBtn = document.querySelector(".submit-btn");
const input = document.querySelector(".name-input");

submitBtn.addEventListener("click", () => {
  if (input.value) {
    window.localStorage.setItem("userName", `${input.value}`);
  }
});
