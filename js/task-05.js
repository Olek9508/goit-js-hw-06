const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== "") {
    return (refs.outputEl.textContent = event.currentTarget.value);
  }
  return (refs.outputEl.textContent = "Anonymous");
}

// ---------------option 2-------------------

// function option2(event) {
//   event.currentTarget.value !== ""
//     ? (refs.outputEl.textContent = event.currentTarget.value)
//     : (refs.outputEl.textContent = "Anonymous");
// }
