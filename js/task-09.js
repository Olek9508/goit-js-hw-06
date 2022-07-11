function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  btnEl: document.querySelector(".change-color"),
  bodyColor: document.querySelector("body"),
  spanEl: document.querySelector(".color"),
};

refs.btnEl.addEventListener("click", function () {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
});
