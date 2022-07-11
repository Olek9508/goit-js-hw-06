const formEls = document.querySelector("form");

formEls.addEventListener("submit", onFillFildesInputRequired);

function onFillFildesInputRequired(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled out");
  } else {
    formData.forEach((value, name) => {
      console.log(name);
      console.log(value);
      event.currentTarget.reset();
    });
  }
}
