const inputValidate = document.querySelector("input");
const validLength = parseInt(inputValidate.getAttribute("data-length"));

inputValidate.addEventListener("blur", onValidInput);

function onValidInput(event) {
  if (event.currentTarget.value.length === validLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}
