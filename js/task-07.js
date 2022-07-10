const inputChange = document.querySelector("input");
const spanEl = document.querySelector("span");

inputChange.addEventListener("input", onTextSizeChangeBtn);

function onTextSizeChangeBtn(event) {
  if (event.currentTarget.value !== inputChange.id) {
    return (spanEl.style.fontSize = `${event.currentTarget.value}px`);
  }
}

// function onTextSizeChangeBtn(event) {
//   event.currentTarget.value !== inputChange.id
//     ? (spanEl.style.fontSize = `${event.currentTarget.value}px`)
//     : spanEl.style.fontSize;
// }
