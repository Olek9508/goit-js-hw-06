const refs = {
  inputChange: document.querySelector("input"),
  spanEl: document.querySelector("span"),
};

refs.inputChange.addEventListener("input", onTextSizeChangeBtn);

function onTextSizeChangeBtn(event) {
  if (event.currentTarget.value !== refs.inputChange.id) {
    return (refs.spanEl.style.fontSize = `${event.currentTarget.value}px`);
  }
}

// function onTextSizeChangeBtn(event) {
//   event.currentTarget.value !== refs.inputChange.id
//     ? (refs.spanEl.style.fontSize = `${event.currentTarget.value}px`)
//     : refs.spanEl.style.fontSize;
// }
