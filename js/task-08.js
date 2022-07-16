const formEls = document.querySelector('form');

formEls.addEventListener('submit', onFillFildesInputRequired);

function onFillFildesInputRequired(event) {
  event.preventDefault();
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;

  email === '' || password === ''
    ? alert('All fields must be filled out')
    : console.log({
        email,
        password,
      });

  event.currentTarget.reset();
}
